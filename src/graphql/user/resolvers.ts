import { prismaClient } from "../../db";

const queries = {
  healthCheck: () => "OK",
};

const mutations = {
  createUser: async (
    parent: any,
    {
      firstName,
      lastName,
      email,
      password,
    }: { firstName: string; lastName: string; email: string; password: string }
  ) => {
    await prismaClient.user.create({
      data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        salt: "some-random-salt",
      },
    });
    return true;
  },
};

export const resolvers = { queries, mutations };
