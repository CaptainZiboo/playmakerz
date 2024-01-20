import { drizzle } from "drizzle-orm/node-postgres";
import * as entities from "./entities/index.js";
import postgres from "pg";

const { Client } = postgres;

export const db_client = new Client({
  connectionString: "postgres://root:password@localhost:5432/playmakerz",
});

export const db = drizzle(db_client, {
  schema: entities,
});
