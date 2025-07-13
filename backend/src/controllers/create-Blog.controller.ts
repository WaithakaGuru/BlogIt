import client from "../utils/PrismaUtils.ts";
import { Response, Request } from "express";

const createBlog = async (req: Request, res: Response) => {
  try {
    const { title, synopsis, content, featuredImageURL, userId } = req.body;
    const newClient = await client.posts.create({
      data: {
        title,
        synopsis,
        content,
        featuredImageURL,
        userId,
      },
    });
    if (newClient) res.status(201).json(newClient);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export default createBlog;
