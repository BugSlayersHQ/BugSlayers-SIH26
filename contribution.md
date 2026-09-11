# Contributing to VillageARC

## Local Setup

### Prerequisites

- Git
- Node.js `24.20.0`
- pnpm `10.34.5`
- Docker + Docker Compose

### Clone

```bash
git clone https://github.com/BugSlayersHQ/VillageARC.git
cd VillageARC
nvm use
pnpm install
```

### Environment

Backend:

```bash
cp backend/.env.example backend/.env
```

Frontend:

```bash
cp frontend/.env.example frontend/.env.local
```

### Start PostgreSQL

```bash
docker compose up -d postgres
```

### Run Services

Frontend:

```bash
pnpm --filter frontend dev
```

Backend:

```bash
pnpm --filter backend dev
```

Worker:

```bash
pnpm --filter worker dev
```

Frontend: `http://localhost:3000`

Backend: `http://localhost:4000`

Health check: `http://localhost:4000/api/health`

---

## Development Flow

We use two protected branches:

```text
stage → integration/testing
prod  → production
```

### Feature Development

Always branch from the latest `stage`:

```bash
git switch stage
git pull origin stage
git switch -c feature/<name>
```

Example:

```bash
git switch -c feature/document-upload
```

Make your changes, then run:

```bash
pnpm format:check
pnpm lint
pnpm typecheck
pnpm build
```

Push the branch:

```bash
git push -u origin feature/<name>
```

Open a Pull Request:

```text
feature/<name> → stage
```

At least one team member must approve the PR before merging.

### Stage → Production

After the changes are tested on `stage`:

```text
stage
  ↓
Testing
  ↓
Pull Request
  ↓
prod
```

Do not push directly to `stage` or `prod`.

---

## Deployment Flow

```text
feature/*
    ↓
Vercel Preview
    ↓
PR → stage
    ↓
Vercel Stage + Render Stage
    ↓
Testing
    ↓
PR → prod
    ↓
Vercel Production + Render Production
```

For backend PR testing, Render PR Previews can be enabled when required.

---

## Important

- Never commit `.env` or `.env.local`.
- Use `.env.example` to document required environment variables.
- Read `docs/contracts.md` before modifying APIs.
- Keep PRs focused and reviewable.
- Do not introduce architectural changes without discussing them with
  the team.
