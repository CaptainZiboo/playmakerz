import { DotenvConfigOptions, config } from "dotenv";

export const env = (options?: DotenvConfigOptions) => {
  config(options);

  const { PG_USER_MAIN, PG_PASSWORD_MAIN, PG_DB_MAIN, PG_PORT_MAIN } =
    process.env;

  if (!PG_USER_MAIN) throw new Error("Missing database user in .env file");
  if (!PG_PASSWORD_MAIN)
    throw new Error("Missing database password in .env file");
  if (!PG_DB_MAIN) throw new Error("Missing database name in .env file");
  if (!PG_PORT_MAIN) throw new Error("Missing database port in .env file");

  process.env.PG_URL_MAIN = `postgres://${PG_USER_MAIN}:${PG_PASSWORD_MAIN}@localhost:${PG_PORT_MAIN}/${PG_DB_MAIN}`;
};
