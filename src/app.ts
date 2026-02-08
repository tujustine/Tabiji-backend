import express, { Request, Response } from "express";
import cors from "cors";
import fileUpload from "express-fileupload";
import { handleError } from "./utils/error.util";

// Routes
import tripRoutes from "./routes/trip.routes";
import userRoutes from "./routes/user.routes";
import mediaRoutes from "./routes/media.routes";
import placesRoutes from "./routes/places.routes";
import memoryRoutes from "./routes/memory.routes";
import collaboratorRoutes from "./routes/collaborator.routes";
import shareRoutes from "./routes/share.routes";
import adminRoutes from "./routes/admin.routes";

const app = express();

// Configuration CORS flexible via variables d'environnement
const allowedOrigins: string[] = [
  process.env.FRONTEND_URL,
  process.env.FRONTEND_URL_DEV,
  process.env.CORS_ORIGIN,
].filter((origin): origin is string => Boolean(origin));

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  })
);
app.use(express.json({ limit: "10mb" }));
// Middleware pour gérer l'upload de fichiers
app.use(
  fileUpload({
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB max
  })
);
app.options("*", cors());

// Routes de base
app.get("/", (_req: Request, res: Response) => {
  res.json({
    message: "API Tabiji - Backend",
    timestamp: new Date().toISOString(),
  });
});

// Routes API
app.use(tripRoutes);
app.use(userRoutes);
app.use(mediaRoutes);
app.use(placesRoutes);
app.use(memoryRoutes);
app.use(collaboratorRoutes);
app.use(shareRoutes);
app.use(adminRoutes);

// Route non trouvée
// changement depuis express 5
app.all("/*splat", (_req: Request, res: Response) => {
  res.status(404).json({ message: "This route does not exist" });
});

// Middleware de gestion d'erreurs global
app.use((err: any, req: Request, res: Response, next: any) => {
  handleError(err, res);
});

export default app;
