import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { config as env } from "dotenv";
import postgres from "pg";

env({
  path: "../../.env",
});

const { PG_URL_MAIN } = process.env;

if (!PG_URL_MAIN) throw new Error("Missing database URL in .env file");

const { Pool } = postgres;

const pool = new Pool({
  connectionString: PG_URL_MAIN,
});

const database = drizzle(pool);

async function main() {
  console.log("Migrating...");
  await migrate(database, { migrationsFolder: "./migrations" });
  console.log("Migration ended !");
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
