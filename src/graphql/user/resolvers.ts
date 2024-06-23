import UserService from "../../services/user";
import { CreateUserPayload, LoginUserPayload } from "./user";

const queries = {
  healthCheck: () => "OK",

  getUserToken: async (parent: any, payload: LoginUserPayload) => {
    const { email, password } = payload;
    const res = await UserService.getUserToken({ email, password });
    return res;
  },

  getCurrentLoggedInUser: async (
    parent: any,
    payload: LoginUserPayload,
    context: any
  ) => {
    if (context && context.user) {
      console.log("inside ");
      const id = context.user.id;
      const user = await UserService.getUserById(id);
      return user;
    }
    throw new Error("I dont know who are you");
  },
};

const mutations = {
  createUser: async (parent: any, payload: CreateUserPayload) => {
    const res = await UserService.createUser(payload);
    return res.id;
  },
};

export const resolvers = { queries, mutations };
