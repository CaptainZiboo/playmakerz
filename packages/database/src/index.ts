import { drizzle } from "drizzle-orm/node-postgres";
import * as entities from "./entities/index.js";
import postgres from "pg";
import { eq } from "drizzle-orm";

const { Client } = postgres;

export const db_client = new Client({
  connectionString: "postgres://root:password@localhost:5432/playmakerz",
});

export const db = drizzle(db_client, {
  schema: entities,
});

export {
  eq,
  ne,
  gt,
  gte,
  lt,
  lte,
  isNull,
  isNotNull,
  inArray,
  notInArray,
  exists,
  notExists,
  between,
  notBetween,
  like,
  ilike,
  notLike,
  not,
  and,
  or,
  arrayContains,
  arrayContained,
  arrayOverlaps,
} from "drizzle-orm";
