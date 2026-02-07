import { z } from "zod";

export const addCollaboratorSchema = z.object({
  userId: z.string().min(1, "UserId is required"),
  role: z.enum(["OWNER", "EDITOR", "VIEWER"], {
    message: "Role must be OWNER, EDITOR, or VIEWER",
  }),
});

export const updateCollaboratorSchema = z.object({
  role: z.enum(["OWNER", "EDITOR", "VIEWER"], {
    message: "Role must be OWNER, EDITOR, or VIEWER",
  }),
});

export const collaboratorParamsSchema = z.object({
  tripId: z.string(),
  userId: z.string(),
});

export const collaboratorsParamsSchema = z.object({
  tripId: z.string(),
});

export type AddCollaboratorInput = z.infer<typeof addCollaboratorSchema>;
export type UpdateCollaboratorInput = z.infer<typeof updateCollaboratorSchema>;
export type CollaboratorParams = z.infer<typeof collaboratorParamsSchema>;
export type CollaboratorsParams = z.infer<typeof collaboratorsParamsSchema>;
