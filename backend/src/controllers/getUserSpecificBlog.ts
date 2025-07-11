import { Request, Response } from "express";
import client from "../utils/PrismaUtils.ts";

export default async function getUserSpecificBlog(req: Request, res: Response) {
  const blogid = req.params.id;
  const { id } = res.locals.user;
  try {
    const userBlog = await client.posts.findFirst({
      where: {
        AND: [{ id: blogid }, { userId: id }],
      },
    });
    if (userBlog) res.status(200).json(userBlog);
    else res.status(404).json({ message: "Blog not found" });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "Something went wrong!! Fetch blog later!!" });
  }
}
