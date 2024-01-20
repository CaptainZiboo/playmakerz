import type { Config } from "drizzle-kit";
import "dotenv/config";

const config: Config = {
  schema: "./dist/entities/index.cjs",
  out: "./migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: "postgres://root:password@localhost:5432/playmakerz",
  },
};

export default config;
