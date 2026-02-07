import { Request, Response, NextFunction } from "express";

const isAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  if (req.user?.admin === true) {
    next();
  } else {
    res.status(403).json("Forbidden");
  }
};

export default isAdmin;

