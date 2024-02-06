ALTER TABLE "foodie"."session" DROP CONSTRAINT "session_user_id_user_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "foodie"."session" ADD CONSTRAINT "session_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "foodie"."session" SET SCHEMA public;
--> statement-breakpoint
ALTER TABLE "foodie"."user" SET SCHEMA public;
--> statement-breakpoint
DROP SCHEMA "foodie";
