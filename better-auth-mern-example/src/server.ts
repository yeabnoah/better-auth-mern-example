import "dotenv/config";
import express, { Request, Response } from "express";
import cors from "cors"; // Import cors
import { connect } from "./db/mongo-client";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";

const app = express();
const PORT = 3000;

app.use(cors());

app.all("/api/auth/*", toNodeHandler(auth));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Express and TypeScript!");
});

async function startServer() {
  try {
    await connect();
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(
      "Failed to connect to the database. Server not started.",
      error
    );
    process.exit(1);
  }
}

startServer();
