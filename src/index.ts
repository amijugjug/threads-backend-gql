import express from "express";

import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { prismaClient } from "./db";

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

        type Mutation {
            createUser(firstName: String!, lastName: String!, email: String!, password: String!): Boolean
        }
    `,
    resolvers: {
      Query: {
        hello: () => "Hello",
        say: (parent, { name }) => `Hello ${name}`,
      },
      Mutation: {
        createUser: async (
          parent,
          {
            firstName,
            lastName,
            email,
            password,
          }: {
            firstName: string;
            lastName: string;
            email: string;
            password: string;
          }
        ) => {
          await prismaClient.user.create({
            data: {
              firstName,
              lastName,
              email,
              password,
              salt: "",
            },
          });

          return true;
        },
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
