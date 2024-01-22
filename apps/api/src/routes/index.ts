import Router from "koa-router";
import { authRouter } from "./auth.js";

export const router = new Router();

router.use("/auth", authRouter.routes());
