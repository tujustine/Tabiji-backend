import "express";
import { UploadedFile, FileArray } from "express-fileupload";

declare module "express-serve-static-core" {
  interface Request {
    files?: FileArray | null | undefined;
  }
}

