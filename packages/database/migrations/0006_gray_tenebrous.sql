CREATE TABLE IF NOT EXISTS "teams_players" (
	"team_id" integer NOT NULL,
	"player_id" integer NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "teams_players" ADD CONSTRAINT "teams_players_team_id_teams__id_fk" FOREIGN KEY ("team_id") REFERENCES "teams"("_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "teams_players" ADD CONSTRAINT "teams_players_player_id_users__id_fk" FOREIGN KEY ("player_id") REFERENCES "users"("_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
