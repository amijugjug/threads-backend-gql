import express from "express";

import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";

const startServer = async () => {
  const app = express();
  const PORT = Number(process.env.PORT) || 8000;

  app.use(express.json());

  const server = new ApolloServer({
    typeDefs: `
        type Query {
            hello: String
            say(name: String): String
        }
    `,
    resolvers: {
      Query: {
        hello: () => "Hello",
        say: (parent, { name }) => `Hello ${name}`,
      },
    },
  });

  await server.start();

  app.use("/graphql", expressMiddleware(server));

  app.get("/", (req, res) => res.json({ message: "Server is running" }));

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
startServer();
