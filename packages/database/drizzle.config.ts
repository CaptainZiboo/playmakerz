import type { Config } from "drizzle-kit";
import { config as env } from "dotenv";

env({
  path: "../../.env",
});

const { PG_URL_MAIN } = process.env;

if (!PG_URL_MAIN) throw new Error("Missing database URL in .env file");

const config: Config = {
  schema: "./dist/entities/index.cjs",
  out: "./migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: PG_URL_MAIN,
  },
};

export default config;
