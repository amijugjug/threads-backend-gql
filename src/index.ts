import express from "express";
import cors from "cors";

import { expressMiddleware } from "@apollo/server/express4";
import { initGraphQLServer } from "./graphql";
import dotenv from "dotenv";
import { authMiddleware } from "./middlewares/auth.middleware";

dotenv.config({
  path: `./.env`,
});

const startServer = async () => {
  const app = express();
  const PORT = Number(process.env.PORT) || 8000;
  app.use(express.json());
  app.use(
    cors({
      origin: process.env.CORS_ORIGIN,
      credentials: true,
    })
  );

  const gqlServer = await initGraphQLServer();

  app.use(
    "/graphql",
    expressMiddleware(gqlServer, {
      context: authMiddleware,
    })
  );

  app.get("/", (req, res) => res.json({ message: "Server is running" }));

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();
