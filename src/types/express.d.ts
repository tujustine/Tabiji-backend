import { User, Trip, CollaboratorRole } from "../generated/prisma/client";

declare global {
  namespace Express {
    interface Request {
      user?: Pick<
        User,
        | "id"
        | "email"
        | "username"
        | "token"
        | "admin"
        | "profilePhoto"
      >;
      trip?: Trip;
      userRole?: CollaboratorRole | "OWNER";
    }
  }
}
