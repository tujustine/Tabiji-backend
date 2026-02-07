-- AlterTable
ALTER TABLE "share_links" ADD COLUMN     "role" "CollaboratorRole" NOT NULL DEFAULT 'VIEWER';
