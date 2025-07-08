import { Request, Response } from "express";
import client from "../utils/PrismaUtils.ts";

export default async function getSpecificBlog (req:Request, res:Response) {
    try{
        const id = req.params.id;
        const blog = await client.posts.findFirst({
            where: {AND: [{id}, {isDeleted: false}]}
        })
        if(blog) res.status(200).json(blog);
        else res.status(404).json("Blog not found!!")
    }catch(err){
        console.log(err);
        res.status(500).json({message: "Something went Wrong! Try again after sometime!!"});
    }
}