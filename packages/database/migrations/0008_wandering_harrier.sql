CREATE TABLE IF NOT EXISTS "tournament_stages" (
	"_id" serial PRIMARY KEY NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tournament_stages_teams" (
	"tournament_stage_id" integer NOT NULL,
	"team_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tournaments" (
	"_id" serial PRIMARY KEY NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tournaments_teams" (
	"tournament_id" integer NOT NULL,
	"team_id" integer NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tournament_stages_teams" ADD CONSTRAINT "tournament_stages_teams_tournament_stage_id_tournament_stages__id_fk" FOREIGN KEY ("tournament_stage_id") REFERENCES "tournament_stages"("_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tournament_stages_teams" ADD CONSTRAINT "tournament_stages_teams_team_id_teams__id_fk" FOREIGN KEY ("team_id") REFERENCES "teams"("_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tournaments_teams" ADD CONSTRAINT "tournaments_teams_tournament_id_tournaments__id_fk" FOREIGN KEY ("tournament_id") REFERENCES "tournaments"("_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tournaments_teams" ADD CONSTRAINT "tournaments_teams_team_id_teams__id_fk" FOREIGN KEY ("team_id") REFERENCES "teams"("_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
