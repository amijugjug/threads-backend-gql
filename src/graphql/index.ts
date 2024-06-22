import { ApolloServer } from "@apollo/server";
import { User } from "./user";

export const initGraphQLServer = async () => {
  const server = new ApolloServer({
    typeDefs: `
            type Query {
                ${User.queries}
            }
            type Mutation {
                ${User.mutations}
            }
        `,
    resolvers: {
      Query: {
        ...User.resolvers.queries,
      },

      Mutation: {
        ...User.resolvers.mutations,
      },
    },
  });

  await server.start();

  return server;
};
