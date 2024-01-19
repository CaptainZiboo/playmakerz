CREATE TABLE IF NOT EXISTS "teams_matches" (
	"team_id" integer NOT NULL,
	"match_id" integer NOT NULL,
	CONSTRAINT "teams_matches_team_id_match_id_pk" PRIMARY KEY("team_id","match_id")
);
--> statement-breakpoint
ALTER TABLE "teams" ADD COLUMN "name" varchar(256);--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "team_id" integer;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "teams_matches" ADD CONSTRAINT "teams_matches_team_id_teams__id_fk" FOREIGN KEY ("team_id") REFERENCES "teams"("_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "teams_matches" ADD CONSTRAINT "teams_matches_match_id_matches__id_fk" FOREIGN KEY ("match_id") REFERENCES "matches"("_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
