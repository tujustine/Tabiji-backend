import { z } from "zod";

export const placesSearchQuerySchema = z.object({
  q: z.string().min(2, "Query must be at least 2 characters"),
  limit: z.string().optional().transform((val) => {
    const num = val ? Number.parseInt(val, 10) : 6;
    return Math.min(num, 10);
  }),
});

export type PlacesSearchQuery = z.infer<typeof placesSearchQuerySchema>;
