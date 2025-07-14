import client from "../utils/PrismaUtils.ts";
import { Response, Request } from "express";

const getUserInfo = async (_req: Request, res: Response) => {
  const { id } = res.locals.user;
  try {
    const userInfo = await client.user.findFirst({
      where: { id },
    });
    if (userInfo) res.status(200).json(userInfo);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "an error happened" });
  }
};
export default getUserInfo;
