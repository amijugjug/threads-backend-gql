import UserService from "../../services/user";
import { CreateUserPayload, LoginUserPayload } from "./user";

const queries = {
  healthCheck: () => "OK",

  getUserToken: async (parent: any, payload: LoginUserPayload) => {
    const { email, password } = payload;
    const res = await UserService.getUserToken({ email, password });
    return res;
  },
};

const mutations = {
  createUser: async (parent: any, payload: CreateUserPayload) => {
    const res = await UserService.createUser(payload);
    return res.id;
  },
};

export const resolvers = { queries, mutations };
