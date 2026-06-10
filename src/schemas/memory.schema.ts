import { z } from "zod";

const positionSchema = z.object({
  x: z.number(),
  y: z.number(),
});

const sizeSchema = z.object({
  width: z.number(),
  height: z.number(),
});

export const createMemorySchema = z.object({
  type: z.string().min(1, "Type is required"),
  content: z.any(),
  position: positionSchema,
  size: sizeSchema,
  zIndex: z.number().optional(),
});

export const updateMemorySchema = z.object({
  type: z.string().optional(),
  content: z.any().optional(),
  position: positionSchema.optional(),
  size: sizeSchema.optional(),
  zIndex: z.number().optional(),
});

export const batchMemorySchema = z.object({
  memories: z.array(
    updateMemorySchema.extend({
      id: z.string(),
      type: z.string().min(1, "Type is required"),
      content: z.any(),
      position: positionSchema,
      size: sizeSchema,
    })
  ),
});

export const memoryParamsSchema = z.object({
  id: z.string(),
});

export const memoryTripParamsSchema = z.object({
  tripId: z.string(),
  memoryId: z.string(),
});

export type CreateMemoryInput = z.infer<typeof createMemorySchema>;
export type UpdateMemoryInput = z.infer<typeof updateMemorySchema>;
export type BatchMemoryInput = z.infer<typeof batchMemorySchema>;
export type MemoryParams = z.infer<typeof memoryParamsSchema>;
export type MemoryTripParams = z.infer<typeof memoryTripParamsSchema>;
