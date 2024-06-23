import JWT from "jsonwebtoken";
import { createHmac, randomBytes } from "node:crypto";

export const genereateHashedPassword = (password: string, salt: string) => {
  const hashedPassword = createHmac("sha256", salt)
    .update(password)
    .digest("hex");

  return hashedPassword;
};

export const generateSalt = () => {
  const salt = randomBytes(32).toString("hex");
  return salt;
};

export const generateToken = (tokenArgs: { id: string; email: string }) => {
  const token = JWT.sign(tokenArgs, String(process.env.ACCESS_TOKEN_SECRET), {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
  });

  return token;
};

export const verifyToken = (token: string) => {
  const decodedToken = JWT.verify(
    token,
    String(process.env.ACCESS_TOKEN_SECRET)
  );
  return decodedToken;
};
