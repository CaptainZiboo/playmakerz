import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import postgres from "pg";
import "dotenv/config";

const { Pool } = postgres;

const pool = new Pool({
  connectionString: "postgres://root:password@localhost:5432/playmakerz",
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
