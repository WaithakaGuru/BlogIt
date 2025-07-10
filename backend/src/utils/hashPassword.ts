import bcrypt from "bcrypt";

export default function hashPassword(password: string) {
  const rounds = 12;
  const salt = bcrypt.genSaltSync(rounds);
  return bcrypt.hashSync(password, salt);
}
