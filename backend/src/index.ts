import express from "express";
import { errorHandler } from "./middleware/errorHandler";
import { connectDB } from "./utils/db";
import { logger } from "./utils/logger";
import "dotenv/config";
import "./utils/db";
import dotenv from "dotenv";
import { serve } from "inngest/express";
import { inngest } from "./inngest/client";
import { functions as inngestFunctions } from "./inngest/functions";
import authRouter from "./routes/auth";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";

dotenv.config();
const app = express();


// Middleware
app.use(helmet()); // Security headers
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies
app.use(morgan("dev")); // HTTP request logger

app.use(errorHandler);

app.use(
  "/api/inngest",
  serve({ client: inngest, functions: inngestFunctions })
);


app.use("/auth", authRouter);

// Start server
const startServer = async () => {
  try {
    // Connect to MongoDB first
    await connectDB();
 
    // Then start the server
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
      logger.info(`Server is running on port ${PORT}`);
      logger.info(
        `Inngest endpoint available at http://localhost:${PORT}/api/inngest`
      );
    });
  } catch (error) {
    logger.error("Failed to start server:", error);
    process.exit(1);
  }
};