-- AlterTable
ALTER TABLE "User" ADD COLUMN     "email" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "name" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "phone" TEXT;

-- Backfill placeholder unique emails and names for existing rows if needed
UPDATE "User" SET "email" = 'user_' || "id" || '@placeholder.local', "name" = 'User ' || "id" WHERE "email" = '';

-- Remove temporary defaults
ALTER TABLE "User" ALTER COLUMN "email" DROP DEFAULT,
ALTER COLUMN "name" DROP DEFAULT;

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
