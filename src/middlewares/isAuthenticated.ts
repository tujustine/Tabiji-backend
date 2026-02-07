import { Request, Response, NextFunction } from "express";
import prisma from "../config/prisma";

const isAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (!req.headers.authorization) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    const token = req.headers.authorization.replace("Bearer ", "");
    const user = await prisma.user.findUnique({
      where: { token },
      select: {
        id: true,
        email: true,
        username: true,
        token: true,
        admin: true,
        profilePhoto: true,
      },
    });

    if (user === null) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    req.user = user;
    next();
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    res.status(500).json({ message: errorMessage });
  }
};

export default isAuthenticated;
