CREATE TABLE IF NOT EXISTS "match_rounds" (
	"_id" serial PRIMARY KEY NOT NULL,
	"match_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "match_rounds_players" (
	"match_round_id" integer NOT NULL,
	"player_id" integer NOT NULL,
	CONSTRAINT "match_rounds_players_match_round_id_player_id_pk" PRIMARY KEY("match_round_id","player_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "teams_match_rounds" (
	"team_id" integer NOT NULL,
	"match_round_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "teams_matches" (
	"team_id" integer NOT NULL,
	"match_id" integer NOT NULL,
	CONSTRAINT "teams_matches_team_id_match_id_pk" PRIMARY KEY("team_id","match_id")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "match_rounds_players" ADD CONSTRAINT "match_rounds_players_match_round_id_match_rounds__id_fk" FOREIGN KEY ("match_round_id") REFERENCES "match_rounds"("_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "match_rounds_players" ADD CONSTRAINT "match_rounds_players_player_id_users__id_fk" FOREIGN KEY ("player_id") REFERENCES "users"("_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "teams_match_rounds" ADD CONSTRAINT "teams_match_rounds_team_id_teams__id_fk" FOREIGN KEY ("team_id") REFERENCES "teams"("_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "teams_match_rounds" ADD CONSTRAINT "teams_match_rounds_match_round_id_match_rounds__id_fk" FOREIGN KEY ("match_round_id") REFERENCES "match_rounds"("_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
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
