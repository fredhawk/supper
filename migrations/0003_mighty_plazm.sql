ALTER TABLE "user" ADD COLUMN "int" integer;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "username" text;--> statement-breakpoint
ALTER TABLE "user" ADD CONSTRAINT "user_int_unique" UNIQUE("int");