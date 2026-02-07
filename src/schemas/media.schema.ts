import { z } from "zod";

export const mediaTripParamsSchema = z.object({
  tripId: z.string(),
  memoryId: z.string(),
});

export type MediaTripParams = z.infer<typeof mediaTripParamsSchema>;
