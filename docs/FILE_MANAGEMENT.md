# File Management

## Overview

The File Management feature allows land records (PDFs and images) to be uploaded
to Cloudflare R2, stored securely, and selectively shared with registered users
through an assignment system. Admins control uploads, deletions, and assignments.
Users can only access files that have been explicitly assigned to them.

---

## Architecture

```
Frontend (Next.js)
       ↓
Express API  (backend/src/app.ts  →  /api/files)
       ↓
Multer  (memory storage, MIME + size validation)
       ↓
AWS SDK v3  (S3-compatible client in src/lib/storage.ts)
       ↓
Cloudflare R2  (private bucket, object stored under land-records/<unique-key>)
       ↓
PostgreSQL / Prisma  (File + FileAssignment metadata only — no URLs stored)
```

The AWS SDK v3 is used because Cloudflare R2 exposes an S3-compatible API.
Swapping to AWS S3 later requires only environment variable changes — no code changes.

---

## Storage Strategy

- Cloudflare R2 is used for development and testing.
- The AWS SDK v3 `S3Client` communicates with R2 via the S3-compatible endpoint.
- PostgreSQL stores only the `storageKey` (e.g. `land-records/<unique-filename>`).
- No R2/S3 URLs or credentials are ever stored in the database.
- Presigned download URLs are generated on demand and expire after 300 seconds.
- Switching to AWS S3 is purely a configuration change (see **AWS S3 Migration**).

---

## Folder Structure

```
backend/
├── src/
│   ├── controllers/
│   │   └── file.controller.ts     # All file-management business logic
│   ├── routes/
│   │   └── file.routes.ts         # Express router wiring for /api/files
│   ├── middleware/
│   │   ├── auth.middleware.ts      # protect + authorize (Clerk)
│   │   └── upload.middleware.ts   # Multer memory storage, MIME + size validation
│   ├── lib/
│   │   └── storage.ts             # S3Client initialisation (R2 / S3 compatible)
│   └── types/
│       ├── error.types.ts         # AppError interface
│       └── express.d.ts           # Express Request augmentation (userId)
├── prisma/
│   ├── schema.prisma              # File + FileAssignment models
│   └── migrations/
│       └── 20260913005730_add_file_management/
│           └── migration.sql
```

> **No `config/` files are created for this feature.**  
> Environment variables are read directly from `process.env` (loaded by `dotenv` in `server.ts`).

---

## Environment Variables

Add these to your `.env` file (see `.env.example` for placeholders):

| Variable                    | Description                    | Example                                         |
| --------------------------- | ------------------------------ | ----------------------------------------------- |
| `STORAGE_REGION`            | R2/S3 region                   | `auto`                                          |
| `STORAGE_ENDPOINT`          | R2 S3-compatible endpoint URL  | `https://<ACCOUNT_ID>.r2.cloudflarestorage.com` |
| `STORAGE_ACCESS_KEY_ID`     | R2 API token Access Key ID     | `abc123...`                                     |
| `STORAGE_SECRET_ACCESS_KEY` | R2 API token Secret Access Key | `xyz789...`                                     |
| `STORAGE_BUCKET`            | Name of the R2 bucket          | `villagearc-land-records`                       |

> **Never commit real credentials.** The `.env` file is git-ignored.

---

## R2 Setup

1. Log in to the [Cloudflare dashboard](https://dash.cloudflare.com/).
2. Go to **R2 Object Storage** and create a new bucket (e.g. `villagearc-land-records`).
3. Keep the bucket **private** (no public access).
4. Go to **R2 → Manage R2 API Tokens** and create a new API token with:
   - Permission: **Object Read & Write**
   - Scope: the bucket you created.
5. Note your **Cloudflare Account ID** (visible in the right sidebar of the dashboard).
6. Construct your R2 S3 endpoint: `https://<ACCOUNT_ID>.r2.cloudflarestorage.com`
7. Add the five `STORAGE_*` variables to your `.env` file.
8. Start the backend: `pnpm dev` (from `backend/`).
9. Test upload with a multipart POST to `POST /api/files/create` (Admin token required).

---

## AWS S3 Migration

To switch from Cloudflare R2 to AWS S3, update only your environment variables:

| Variable                    | R2 value                                        | S3 value                  |
| --------------------------- | ----------------------------------------------- | ------------------------- |
| `STORAGE_REGION`            | `auto`                                          | e.g. `ap-south-1`         |
| `STORAGE_ENDPOINT`          | `https://<ACCOUNT_ID>.r2.cloudflarestorage.com` | _(remove or leave empty)_ |
| `STORAGE_ACCESS_KEY_ID`     | R2 Access Key ID                                | AWS IAM Access Key ID     |
| `STORAGE_SECRET_ACCESS_KEY` | R2 Secret Access Key                            | AWS IAM Secret Access Key |
| `STORAGE_BUCKET`            | R2 bucket name                                  | S3 bucket name            |

No controller or middleware code needs to change.

---

## Upload Flow

```
Client (multipart/form-data, field: file)
  → Multer validates MIME type + size (≤ 20 MB)
  → Controller reads req.file.buffer
  → Generates unique filename:  <timestamp>-<random>-<originalname>
  → Builds storage key:         land-records/<unique-filename>
  → PutObjectCommand → R2 bucket
  → prisma.file.create  (stores metadata + storageKey only)
  → 201 response with file record
```

---

## Download Flow

```
Client  GET /api/files/:id/download
  → protect middleware verifies Clerk session
  → Controller checks caller role:
      ADMIN   → allowed
      USER    → checks FileAssignment; 403 if not assigned
  → GetObjectCommand with ResponseContentDisposition + ResponseContentType
  → getSignedUrl (expiresIn: 300 seconds)
  → 200 response with { url, expiresIn: 300 }
  → Client uses the presigned URL to download directly from R2
```

The R2 bucket is never made public. All access goes through the signed URL.

---

## Delete Flow

```
Client  DELETE /api/files/:id  (Admin only)
  → Controller fetches File record (storageKey)
  → DeleteObjectCommand → removes object from R2
  → prisma.file.delete  → cascades to FileAssignment rows
  → 200 response
```

The R2 object is always deleted **before** the database record.

---

## Assignment Flow

```
Admin  POST /api/files/:id/assign  { userId: 123 }
  → Validates file exists
  → Validates target user exists
  → Looks up Admin's own Prisma User record for assignedBy
  → Checks FileAssignment unique constraint (fileId, userId)
  → 409 if already assigned
  → prisma.fileAssignment.create
  → 201 response

Admin  DELETE /api/files/:id/assign/:userId
  → Finds assignment by composite key (fileId, userId)
  → 404 if not found
  → prisma.fileAssignment.delete
  → 200 response
```

---

## API Endpoints

| Method   | Endpoint                        | Auth     | Role  | Description                                |
| -------- | ------------------------------- | -------- | ----- | ------------------------------------------ |
| `POST`   | `/api/files/create`             | Required | ADMIN | Upload a new file to R2                    |
| `GET`    | `/api/files`                    | Required | ADMIN | List all files with uploader & assignments |
| `GET`    | `/api/files/user/:userId`       | Required | Any   | Get files assigned to a user               |
| `GET`    | `/api/files/:id/download`       | Required | Any   | Generate a presigned download URL          |
| `GET`    | `/api/files/:id`                | Required | Any   | Get file details by ID                     |
| `PATCH`  | `/api/files/:id`                | Required | ADMIN | Update file metadata (originalName)        |
| `DELETE` | `/api/files/:id`                | Required | ADMIN | Delete file from R2 and database           |
| `POST`   | `/api/files/:id/assign`         | Required | ADMIN | Assign file to a user                      |
| `DELETE` | `/api/files/:id/assign/:userId` | Required | ADMIN | Remove file assignment from a user         |
| `GET`    | `/api/files/:id/assignments`    | Required | Any   | List assignments for a file                |

> **Authorization notes:**
>
> - `GET /user/:userId` — ADMINs can view any user; USERs can only view their own.
> - `GET /:id/download` — ADMINs always allowed; USERs only if assigned to the file.
> - `GET /:id/assignments` — ADMINs see all; USERs see only their own assignment row.

---

## Request Examples

### Upload a file

```
POST /api/files/create
Authorization: Bearer <clerk-session-token>
Content-Type: multipart/form-data

field name: file
file:       land_record.pdf
```

### Update file metadata

```
PATCH /api/files/42
Authorization: Bearer <clerk-session-token>
Content-Type: application/json

{
  "originalName": "Khasra_Plot_42_Updated.pdf"
}
```

> **Note:** File replacement (swapping the actual object in R2) is not implemented
> in this version. Only `originalName` metadata can be updated. To replace the
> file content, delete the existing record and upload a new file.

### Assign a file to a user

```
POST /api/files/42/assign
Authorization: Bearer <clerk-session-token>
Content-Type: application/json

{
  "userId": 7
}
```

### Remove a file assignment

```
DELETE /api/files/42/assign/7
Authorization: Bearer <clerk-session-token>
```

### Download a file

```
GET /api/files/42/download
Authorization: Bearer <clerk-session-token>
```

Response:

```json
{
  "success": true,
  "message": "Download URL generated successfully",
  "data": {
    "url": "https://<ACCOUNT_ID>.r2.cloudflarestorage.com/...<presigned-params>",
    "expiresIn": 300
  }
}
```

The client uses `data.url` directly to download the file. The URL expires after 5 minutes.

---

## Response Examples

### Successful upload (201)

```json
{
  "success": true,
  "message": "File uploaded successfully",
  "data": {
    "id": 1,
    "originalName": "khasra_42.pdf",
    "fileName": "1726123456789-387261904-khasra_42.pdf",
    "mimeType": "application/pdf",
    "size": 204800,
    "storageKey": "land-records/1726123456789-387261904-khasra_42.pdf",
    "uploadedById": 3,
    "createdAt": "2026-09-13T02:00:00.000Z",
    "updatedAt": "2026-09-13T02:00:00.000Z"
  }
}
```

### File assignment (201)

```json
{
  "success": true,
  "message": "File assigned successfully",
  "data": {
    "id": 5,
    "fileId": 1,
    "userId": 7,
    "assignedBy": 3,
    "createdAt": "2026-09-13T02:05:00.000Z",
    "user": { "id": 7, "name": "Ramesh Kumar", "email": "ramesh@example.com" },
    "assigner": { "id": 3, "name": "Admin User" }
  }
}
```

### Error responses

```json
{ "message": "File not found" }
{ "message": "File already assigned to this user" }
{ "message": "You are not allowed to download this file" }
{ "message": "File type not allowed. Allowed types: application/pdf, image/jpeg, ..." }
```

---

## Database Schema

### `File`

| Column         | Type     | Description                           |
| -------------- | -------- | ------------------------------------- |
| `id`           | Int (PK) | Auto-increment primary key            |
| `originalName` | String   | Human-readable filename               |
| `fileName`     | String   | Unique filename used as R2 object key |
| `mimeType`     | String   | MIME type of the uploaded file        |
| `size`         | Int      | File size in bytes                    |
| `storageKey`   | String   | R2 object key (`land-records/<name>`) |
| `uploadedById` | Int (FK) | References `User.id`                  |
| `createdAt`    | DateTime | Creation timestamp                    |
| `updatedAt`    | DateTime | Last update timestamp                 |

### `FileAssignment`

| Column       | Type     | Description                               |
| ------------ | -------- | ----------------------------------------- |
| `id`         | Int (PK) | Auto-increment primary key                |
| `fileId`     | Int (FK) | References `File.id` (cascade delete)     |
| `userId`     | Int (FK) | References `User.id` (cascade delete)     |
| `assignedBy` | Int (FK) | References `User.id` (admin who assigned) |
| `createdAt`  | DateTime | Assignment timestamp                      |

Unique constraint: `(fileId, userId)` — a file can only be assigned once per user.

---

## Security

| Concern                | Implementation                                                    |
| ---------------------- | ----------------------------------------------------------------- |
| Private R2 bucket      | No public access; all downloads via presigned URLs                |
| Presigned URL expiry   | 300 seconds (5 minutes)                                           |
| Credential protection  | Credentials never stored in DB or returned in API responses       |
| storageKey only        | No R2/S3 URLs stored in PostgreSQL                                |
| Upload authorization   | Admin-only (`authorize('ADMIN')` middleware)                      |
| Download authorization | Role checked; non-admins verified against `FileAssignment`        |
| User file isolation    | `GET /user/:userId` enforces caller == target for normal users    |
| Assignment scoping     | `GET /:id/assignments` returns only caller's row for normal users |
| MIME validation        | Multer `fileFilter` rejects non-allowed types (400)               |
| Size limit             | Multer `limits.fileSize` = 20 MB                                  |
| ID validation          | `Number.isNaN()` check before every DB lookup                     |

---

## Error Cases

| Status | Cause                                                                                         |
| ------ | --------------------------------------------------------------------------------------------- |
| `400`  | Invalid file ID or user ID; missing file in request; disallowed MIME type; file exceeds 20 MB |
| `401`  | No valid Clerk session token                                                                  |
| `403`  | Normal user attempting to access another user's files or download an unassigned file          |
| `404`  | File, user, or assignment not found                                                           |
| `409`  | File already assigned to the target user                                                      |
| `500`  | Unexpected server error (R2 connectivity, DB failure, etc.)                                   |

---

## Testing

### Manual API testing (e.g. with cURL or Postman)

**Upload**

```bash
curl -X POST http://localhost:4000/api/files/create \
  -H "Authorization: Bearer <admin-clerk-token>" \
  -F "file=@/path/to/document.pdf"
```

**List all files (Admin)**

```bash
curl http://localhost:4000/api/files \
  -H "Authorization: Bearer <admin-clerk-token>"
```

**Get file by ID**

```bash
curl http://localhost:4000/api/files/1 \
  -H "Authorization: Bearer <user-clerk-token>"
```

**Update metadata**

```bash
curl -X PATCH http://localhost:4000/api/files/1 \
  -H "Authorization: Bearer <admin-clerk-token>" \
  -H "Content-Type: application/json" \
  -d '{"originalName": "renamed.pdf"}'
```

**Delete**

```bash
curl -X DELETE http://localhost:4000/api/files/1 \
  -H "Authorization: Bearer <admin-clerk-token>"
```

**Assign to user**

```bash
curl -X POST http://localhost:4000/api/files/1/assign \
  -H "Authorization: Bearer <admin-clerk-token>" \
  -H "Content-Type: application/json" \
  -d '{"userId": 7}'
```

**Remove assignment**

```bash
curl -X DELETE http://localhost:4000/api/files/1/assign/7 \
  -H "Authorization: Bearer <admin-clerk-token>"
```

**Get user's files**

```bash
# As the user themselves:
curl http://localhost:4000/api/files/user/7 \
  -H "Authorization: Bearer <user-7-clerk-token>"

# As admin:
curl http://localhost:4000/api/files/user/7 \
  -H "Authorization: Bearer <admin-clerk-token>"
```

**Download (get presigned URL)**

```bash
curl http://localhost:4000/api/files/1/download \
  -H "Authorization: Bearer <user-clerk-token>"
# Use the returned `data.url` to download the file
```

**Download authorization — unassigned user should get 403**

```bash
curl http://localhost:4000/api/files/1/download \
  -H "Authorization: Bearer <unassigned-user-clerk-token>"
# Expected: 403 You are not allowed to download this file
```

---

## Development Checklist

- [ ] Cloudflare R2 bucket created and set to **private**
- [ ] R2 API token created with Object Read & Write permission
- [ ] Five `STORAGE_*` environment variables added to `.env`
- [ ] `pnpm prisma migrate dev` run successfully (migration `20260913005730_add_file_management`)
- [ ] `pnpm prisma generate` run (Prisma client updated)
- [ ] Backend started with `pnpm dev`
- [ ] Upload tested with a PDF — verify object appears in R2 console
- [ ] Download tested — verify presigned URL expires after 5 minutes
- [ ] Delete tested — verify object disappears from R2 console
- [ ] Assign tested — verify user can download after assignment
- [ ] Unauthorized download tested — verify 403 for unassigned user
- [ ] Cross-user file list tested — verify 403 for normal user accessing another user's files
