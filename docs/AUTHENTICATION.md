# 🔐 Authentication System Documentation

## 1. Overview

The application utilizes **Clerk** for authentication and identity management, paired with **PostgreSQL** and **Prisma ORM** for managing application-specific data.

The system relies on a strict separation of concerns:

- **Clerk** handles authentication, user sessions, and identity verification.
- **PostgreSQL** stores application-specific users, relationships, and business logic.

### 🛠️ Technology Stack

- **Backend:** Express.js, TypeScript
- **Identity & Auth:** Clerk, Clerk Webhooks
- **Database & ORM:** PostgreSQL, Prisma ORM

---

## 2. Authentication Architecture

The core architecture follows a decoupled approach where authentication requests pass through identity verification before interacting with the database.

```text
Client
   │
   ├─ Sign Up / Sign In
   ▼
Clerk
   │
   ├─ Authenticated Request
   ▼
Express Backend
   │
   ├──────────────────────┐
   ▼                      ▼
protect()             authorize()
   │                      │
   └──────────┬───────────┘
              │
              ▼
         Controller
              │
              ▼
          Prisma ORM
              │
              ▼
         PostgreSQL
```

> **The Separation of Responsibilities:**
>
> - **Clerk** answers: _"Who is this user?"_
> - **PostgreSQL** answers: _"What does this user represent in our application?"_

**Identity Mapping Example:**

```text
Clerk User            PostgreSQL Admin
user_123456   ──►     id: 1
                      clerkUserId: user_123456
```

---

## 3. Core Concepts

### Why Clerk?

Clerk abstracts away the complexities of manual authentication. It seamlessly manages:

- User registration and login
- Password management and sessions
- Authentication tokens and account security

_The backend never stores passwords. It only receives the authenticated Clerk user ID to access application data._

### Why PostgreSQL?

Clerk alone cannot handle the application's business logic, such as relational data. PostgreSQL is required to store:

- `Admin` records
- `User` records
- `Admin` → `User` relationships
- Future application-specific data and document relationships

### User Identity

Every authenticated Clerk user has a unique ID (e.g., `user_2abc123xyz`). This ID bridges Clerk and PostgreSQL.

- **Schema Enforcement:** The `clerkUserId` must be unique (`@unique`) in the database to prevent duplicate associations.

---

## 4. Application Roles

The application currently supports two strictly defined roles:

```typescript
type Role = 'ADMIN' | 'USER';
```

- **ADMIN:** Can access administrative functionality (dashboard, user management, assigning documents).
- **USER:** An account created/invited by an Admin. Has restricted access based on the `USER` role.

### Role Storage

Roles are securely stored in Clerk's `publicMetadata`:

```json
{
  "role": "ADMIN"
}
```

**Security Rule:** The client must _never_ be trusted to determine its own role. The backend exclusively assigns and validates roles.

---

## 5. The Admin Signup Flow

The system features a dedicated Admin onboarding flow (`POST /api/auth/admin-signup`). This endpoint strictly requires an authenticated Clerk user.

### Step-by-Step Process:

1.  **Authenticate:** User creates/authenticates a Clerk account (yields `userId`).
2.  **Request:** Client sends a POST request to `/api/auth/admin-signup`.
3.  **Protect:** The `protect()` middleware verifies the active Clerk session.
4.  **Extract:** The backend retrieves `req.userId`.
5.  **Validate:** Checks PostgreSQL to ensure the user doesn't already exist as an Admin or User.
6.  **Assign Role:** Backend updates Clerk metadata: `{"role": "ADMIN"}`.
7.  **Provision:** Backend creates the PostgreSQL `Admin` record.
8.  **Success:** Returns `{"message": "Admin signup completed successfully"}`.

---

## 6. Middleware: Security & Access Control

### `protect()` Middleware (Authentication)

Verifies that the request originates from an authenticated Clerk user. It _does not_ check roles.

```typescript
export const protect = (req: Request, res: Response, next: NextFunction) => {
  // Verifies Clerk authentication and attaches req.userId
};
```

### `authorize()` Middleware (Authorization)

Validates the user's assigned role against the route's requirements.

```typescript
router.get('/dashboard', protect, authorize('ADMIN'), controller);
```

### Authentication vs. Authorization

- **Authentication (`protect`)** ➔ _"Who is the user?"_
- **Authorization (`authorize`)** ➔ _"What can the user do?"_

### Standard HTTP Status Codes

- **`401 Unauthorized`**: No valid Clerk session or missing authentication.
- **`403 Forbidden`**: Authenticated, but lacks the required role (e.g., USER accessing ADMIN route).
- **`409 Conflict`**: Requested state conflicts with existing data (e.g., "Admin already exists").

---

## 7. Database Models & ORM

### Prisma Schema Concept

An Admin manages multiple Users (One-to-Many relationship).

```prisma
model Admin {
  id          Int    @id @default(autoincrement())
  clerkUserId String @unique
  users       User[]
}

model User {
  id          Int    @id @default(autoincrement())
  clerkUserId String @unique
  adminId     Int
  admin       Admin  @relation(fields: [adminId], references: [id])
}
```

_Note: The database relies on foreign keys (`adminId`) rather than physically storing arrays of users. Prisma seamlessly exposes this as `admin.users`._

### Shared Prisma Client

To prevent connection exhaustion, a single shared Prisma client is instantiated in `src/lib/prisma.ts` and imported across controllers:

```typescript
import { prisma } from '../lib/prisma.js';
```

---

## 8. Clerk Webhooks

Webhooks notify the backend of Clerk user events (`user.created`, `user.updated`, `user.deleted`).

### Webhook Verification & Routing

Webhook payloads must be cryptographically verified using Clerk's utility before processing.
**Critical Infrastructure Rule:** The webhook route requires the raw request body and must be registered _before_ the global JSON parser.

```typescript
// ✅ CORRECT
app.use('/api/webhooks', express.raw({ type: 'application/json' }), webhookRouter);
app.use(express.json());
```

---

## 9. Error Handling & Security Rules

### Centralized Errors

Controllers must pass errors to the centralized middleware using `next(error)`. We utilize an `AppError` class to attach status codes.

```typescript
const error: AppError = new Error('Unauthorized');
error.statusCode = 401;
return next(error);
```

### Golden Security Rules

1.  **Never trust the client for authorization.**
2.  **Always protect private routes** with `protect()`.
3.  **Use `authorize("ROLE")`** for role-specific access.
4.  **Rely exclusively on `req.userId`** from the verified session, never from the request body.
5.  **Never expose secrets:** Keep `CLERK_SECRET_KEY` and `DATABASE_URL` in `.env` (gitignored).

---

## 10. Folder Structure & Responsibilities

```text
src/
├── controllers/
│   ├── admin.controller.ts     # Admin logic (signup, user management)
│   └── webhook.controller.ts   # Webhook verification & event processing
├── middleware/
│   ├── auth.middleware.ts      # protect() and authorize()
│   └── error.middleware.ts     # Centralized error formatting
├── routes/
│   ├── admin.routes.ts
│   ├── auth.routes.ts
│   └── webhook.routes.ts
├── lib/
│   └── prisma.ts               # Shared Prisma singleton
├── types/
│   ├── auth.types.ts
│   └── error.types.ts
├── generated/
│   └── prisma/
├── app.ts
└── server.ts
```

---

## 11. Testing Checklist

### Clerk & Identity

- [ ] User can sign up / log in via Clerk.
- [ ] Authenticated requests contain a valid Clerk identity.
- [ ] Unauthenticated requests are rejected (`401`).

### Admin Signup

- [ ] Authenticated user can complete Admin signup.
- [ ] Admin role is saved in Clerk metadata.
- [ ] Admin database record is created in PostgreSQL.
- [ ] Duplicate Admin signup returns `409`.
- [ ] Existing User cannot hijack the Admin flow.

### Middleware

- [ ] `protect()` rejects unauthorized users and attaches `req.userId`.
- [ ] `authorize()` restricts routes appropriately (`403` on wrong role).

### Database & Webhooks

- [ ] Prisma client connects successfully.
- [ ] User/Admin relations function correctly.
- [ ] Webhook endpoint is reachable and preserves raw body.
- [ ] Webhook signatures are verified successfully.

---

## 12. Future Scope

_These features are out-of-scope for the basic implementation but planned for future iterations:_

- Admin invitation system & User account creation
- Document uploads (Cloudinary) & Assignment
- Granular user-specific document access
- Advanced Webhook data synchronization

---

_End of Documentation_
