import Koa from "koa";
import { koaBody } from "koa-body";
/* import { authRouter } from "./routes/auth.js"; */
import { db_client } from "@playmakerz/database";

const app = new Koa();

const start = async () => {
  await db_client.connect();

  console.log("Connected to database");

  app.use(koaBody());

  app.use(async (ctx) => {
    ctx.body = "Hello World";
  });

  /* app.use(authRouter.routes()); */

  app.listen(3000);
};

start();
