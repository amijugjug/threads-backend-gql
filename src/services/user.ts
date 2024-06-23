import { prismaClient } from "../db";
import { CreateUserPayload, LoginUserPayload } from "../graphql/user/user";
import { generateSalt, genereateHashedPassword } from "../utils/utilities";
import JWT from "jsonwebtoken";

class UserService {
  public static createUser(payload: CreateUserPayload) {
    const { firstName, lastName, email, password } = payload;

    const salt = generateSalt();
    const hashedPassword = genereateHashedPassword(password, salt);

    return prismaClient.user.create({
      data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hashedPassword,
        salt: salt,
      },
    });
  }

  private static getUserByEmail(email: string) {
    return prismaClient.user.findUnique({
      where: {
        email: email,
      },
    });
  }

  public static async getUserToken(payload: LoginUserPayload) {
    const { email, password } = payload;

    const user = await UserService.getUserByEmail(email);

    if (!user) {
      throw new Error("User does not exist");
    }

    const userSalt = user.salt;
    const hashedPassword = genereateHashedPassword(password, userSalt);

    if (hashedPassword !== user.password) {
      throw new Error("Incorrect password");
    }

    const token = JWT.sign(
      {
        id: user.id,
        email: user.email,
      },
      String(process.env.ACCESS_TOKEN_SECRET),
      {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
      }
    );
    return token;
  }
}

export default UserService;
