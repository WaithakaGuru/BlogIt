import client from "../utils/PrismaUtils.ts";
import { Request, Response } from "express";

export default async function deleteSpecificBlog(req: Request, res: Response) {
  const {id} = req.params
   if (!id) {
    return res.status(400).json({ message: "Blog ID is required." });
  }
  try {
    const deleted = await client.posts.update({
      where: { id: id },
      data: { isDeleted: true},
    });
    if (deleted) res.status(201).json(deleted);
  } catch (err) {
    console.log(err);
  }
}
