ALTER SCHEMA "wonderfood" RENAME TO "foodie";
--> statement-breakpoint
ALTER TABLE "foodie"."session" DROP CONSTRAINT "session_user_id_user_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "foodie"."session" ADD CONSTRAINT "session_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "foodie"."user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
