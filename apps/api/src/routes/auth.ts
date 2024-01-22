import Router from "koa-router";
import { LoginSchema } from "../validations/login.js";
import { db, eq } from "@playmakerz/database";
import { ZodError } from "zod";
import { RegisterSchema } from "../validations/register.js";
import { users } from "@playmakerz/database/entities";

export const authRouter = new Router();

authRouter.post("/login", async (ctx) => {
  try {
    const body = LoginSchema.parse(ctx.request.body);
    // TODO: Login logic

    ctx.body = "Login";
  } catch (error) {
    if (error instanceof ZodError) {
      ctx.status = 400;
      ctx.body = error.issues;
    } else {
      throw error;
    }
  }
});

authRouter.post("/register", async (ctx) => {
  try {
    const body = RegisterSchema.parse(ctx.request.body);

    // Check if user already exists
    const exists = await db
      .select()
      .from(users)
      .where(eq(users.email, body.email))
      .execute();

    // Throw error if user already exists
    if (exists.length) {
      throw new Error("User already exists");
    }

    // Insert user into database
    await db.insert(users).values(body).returning();

    console.log("Added user to database !");

    ctx.body = body;
  } catch (error) {
    console.log(error);
    if (error instanceof ZodError) {
      ctx.status = 400;
      ctx.body = error.issues;
    } else {
      ctx.status = 400;
    }
  }
});

authRouter.post("/logout", async (ctx) => {
  // TODO: Logout logic

  ctx.body = "Logout";
});

authRouter.get("/me", async (ctx) => {
  ctx.body = "Me";
});
