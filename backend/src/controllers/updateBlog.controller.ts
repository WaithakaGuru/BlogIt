import client from "../utils/PrismaUtils.ts";
import { Response, Request } from "express";

const updateBlog = async (req:Request, res:Response) => {
    const {title, synopsis, content, featuredImageURL} = req.body;
    const id = req.params.id;
    try{
        const updatedBlog = await client.posts.update({
          where:{id}, data:{title, synopsis, content, featuredImageURL}
        })
        if(updatedBlog) res.status(201).json(updateBlog);
        else res.status(400).json({message: "update failed"})
    }catch(err) {
        res.status(500).json({message: "Server failed to update Blog"})
    }
}

export default updateBlog;