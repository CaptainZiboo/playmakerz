import Router from "koa-router";

export const MatchesRouter: Router = new Router();

MatchesRouter.get("/", async (ctx) => {});

MatchesRouter.get("/:id", async (ctx) => {});

MatchesRouter.post("/", async (ctx) => {});

MatchesRouter.put("/:id", async (ctx) => {});

MatchesRouter.delete("/:id", async (ctx) => {});
