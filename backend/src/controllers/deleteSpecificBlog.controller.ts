import client from "../utils/PrismaUtils.ts";
import { Request, Response } from "express";

export default async function deleteSpecificBlog(req: Request, res: Response) {
  const blogId = req.params.id;
  const { data } = req.body;

  try {
    const deleted = await client.posts.update({
      where: { id: blogId },
      data: { isDeleted: data },
    });
    if (deleted) res.status(201).json(deleted);
  } catch (err) {
    console.log(err);
  }
}
