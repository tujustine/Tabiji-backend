import { z } from "zod";

export const createShareLinkSchema = z.object({
  role: z.enum(["EDITOR", "VIEWER"]).default("VIEWER"),
});

export const shareTokenParamsSchema = z.object({
  token: z.string(),
});

export const shareIdParamsSchema = z.object({
  id: z.string(),
});

export const shareTripParamsSchema = z.object({
  tripId: z.string(),
});

export type CreateShareLinkInput = z.infer<typeof createShareLinkSchema>;
export type ShareTokenParams = z.infer<typeof shareTokenParamsSchema>;
export type ShareIdParams = z.infer<typeof shareIdParamsSchema>;
export type ShareTripParams = z.infer<typeof shareTripParamsSchema>;
