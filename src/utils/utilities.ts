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
