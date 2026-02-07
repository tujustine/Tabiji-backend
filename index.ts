import dotenv from "dotenv";
import { createServer } from "node:http";
import { initializeSocket } from "./src/socket/socket";
import { setIO } from "./src/socket/io";
import app from "./src/app";

dotenv.config();

const httpServer = createServer(app);
const PORT = process.env.PORT || 4000;

// Initialiser Socket.IO
const io = initializeSocket(httpServer);
setIO(io);

// Démarrage du serveur
httpServer.listen(PORT, () => {
  console.log(`🌸 Serveur Tabiji démarré sur le port ${PORT}`);
  console.log(`📱 Mode: ${process.env.NODE_ENV || "development"}`);
  console.log(`🌐 URL: http://localhost:${PORT}`);
  console.log(`🔌 Socket.IO initialisé`);
});
