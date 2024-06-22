import express from "express";

import { expressMiddleware } from "@apollo/server/express4";
import { initGraphQLServer } from "./graphql";

const startServer = async () => {
  const app = express();
  const PORT = Number(process.env.PORT) || 8000;
  app.use(express.json());

  const gqlServer = await initGraphQLServer();

  app.use("/graphql", expressMiddleware(gqlServer));

  app.get("/", (req, res) => res.json({ message: "Server is running" }));

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();
