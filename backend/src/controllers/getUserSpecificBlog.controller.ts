import { Request, Response } from "express";
import client from "../utils/PrismaUtils.ts";

export default async function getUserSpecificBlogs(
  req: Request,
  res: Response,
) {
  const { id } = res.locals.user;
  try {
    const userBlogs = await client.posts.findMany({
      where: { userId: id }, orderBy: {lastUpdated: "desc"},
      include:{blogAuthor: {select: {id:true, email:true, userName: true }}}
    });
    if (userBlogs.length > 0) res.status(200).json(userBlogs);
    else res.status(404).json({ message: "Empty: No blog posts found!!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Search Failed: something went wrong!!" });
  }
}
