import { z } from "zod";

export const paginationQuerySchema = z.object({
  page: z.string().optional().transform((val) => (val ? Number.parseInt(val, 10) : 1)),
  limit: z.string().optional().transform((val) => (val ? Number.parseInt(val, 10) : 20)),
  search: z.string().optional(),
});

export const updateUserAdminSchema = z.object({
  username: z.string().optional(),
  email: z.email().optional(),
  admin: z.boolean().optional(),
});

export const adminUserParamsSchema = z.object({
  id: z.string(),
});

export const adminTripParamsSchema = z.object({
  id: z.string(),
});

export const adminMemoryParamsSchema = z.object({
  id: z.string(),
});

export const adminMediaParamsSchema = z.object({
  id: z.string(),
});

export const adminTripsQuerySchema = paginationQuerySchema.extend({
  tripId: z.string().optional(),
});

export type PaginationQuery = z.infer<typeof paginationQuerySchema>;
export type UpdateUserAdminInput = z.infer<typeof updateUserAdminSchema>;
export type AdminUserParams = z.infer<typeof adminUserParamsSchema>;
export type AdminTripParams = z.infer<typeof adminTripParamsSchema>;
export type AdminMemoryParams = z.infer<typeof adminMemoryParamsSchema>;
export type AdminMediaParams = z.infer<typeof adminMediaParamsSchema>;
export type AdminTripsQuery = z.infer<typeof adminTripsQuerySchema>;
