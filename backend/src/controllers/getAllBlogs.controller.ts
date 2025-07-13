import client from "../utils/PrismaUtils.ts";
import { Request, Response } from "express";

export default async function getAllBlogs(_req: Request, res: Response) {
  try {
    const allBlogs = await client.posts.findMany({
      include:{
        blogAuthor:{
          select:{
            userName:true, email: true
          }
        }
      },orderBy:{lastUpdated:"desc"}
    });
    if (allBlogs) res.send(allBlogs);
    else res.status(404).json({ message: "Empty: No blogs were found!!" });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "Something went wrong! Try again after some minutes!" });
  }
}
