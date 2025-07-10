import client from "../utils/PrismaUtils.ts";
import { Response, Request } from "express";

const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await client.user.findMany();
    if (users) res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "an error happened" });
  }
};
export default getUsers;
