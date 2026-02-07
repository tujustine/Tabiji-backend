import { z } from "zod";

const coordinatesSchema = z.object({
  lat: z.number(),
  lng: z.number(),
});

const placeDataSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  address: z.string().optional(),
  coordinates: coordinatesSchema,
  category: z.string().optional(),
  description: z.string().optional(),
});

const todoItemSchema = z.object({
  text: z.string(),
  completed: z.boolean().optional(),
  order: z.number().optional(),
});

const dayScheduleSchema = z.object({
  day: z.number(),
  date: z.string().optional().nullable(),
  placeIds: z.array(z.string()).optional(),
});

export const createTripSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  destination: z.string().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  image: z.string().optional(),
  participants: z.array(z.string()).optional(),
  activities: z.array(z.string()).optional(),
});

export const updateTripSchema = z.object({
  title: z.string().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  image: z.string().optional(),
  participants: z.array(z.string()).optional(),
  places: z.array(placeDataSchema).optional(),
  todoItems: z.array(todoItemSchema).optional(),
  daySchedule: z.array(dayScheduleSchema).optional(),
}).strip(); // Supprime les champs non définis (comme description, destination, etc.)

export const tripParamsSchema = z.object({
  id: z.string(),
});

export const tripIdParamsSchema = z.object({
  tripId: z.string(),
});

export type CreateTripInput = z.infer<typeof createTripSchema>;
export type UpdateTripInput = z.infer<typeof updateTripSchema>;
export type TripParams = z.infer<typeof tripParamsSchema>;
export type TripIdParams = z.infer<typeof tripIdParamsSchema>;
