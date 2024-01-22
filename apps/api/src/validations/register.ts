import { z } from "zod";

export const RegisterSchema = z.object({
  email: z.string().min(3).max(100),
  password: z.string().min(6).max(100),
});
