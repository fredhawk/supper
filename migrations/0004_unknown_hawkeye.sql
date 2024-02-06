ALTER TABLE "user" RENAME COLUMN "int" TO "github_id";--> statement-breakpoint
ALTER TABLE "user" DROP CONSTRAINT "user_int_unique";--> statement-breakpoint
ALTER TABLE "user" ADD CONSTRAINT "user_github_id_unique" UNIQUE("github_id");