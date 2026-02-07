import { z } from "zod";

export const signupSchema = z.object({
  username: z.string().min(1, "Username is required"),
  email: z.string().email("Invalid email format"),
  password: z.string().min(4, "Password must be at least 4 characters"),
});

export const loginSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(1, "Password is required"),
});

export const updateUserSchema = z.object({
  username: z.string().min(1).optional(),
  password: z.string().min(4).optional(),
});

export type SignupInput = z.infer<typeof signupSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type UpdateUserInput = z.infer<typeof updateUserSchema>;
