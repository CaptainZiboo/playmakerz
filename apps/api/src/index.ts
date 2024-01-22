import Koa from "koa";
import { koaBody } from "koa-body";
import { db_client } from "@playmakerz/database";
import { router } from "./routes/index.js";

const app = new Koa();

const start = async () => {
  await db_client.connect();

  console.log("Connected to database");

  app.use(koaBody());

  app.use(router.routes());

  app.listen(3000);
};

start();
