import client from "../utils/PrismaUtils.ts";
import { Request, Response } from "express";

export default async function getAllBlogs(req:Request, res:Response) {
    try{
        const allBlogs = await client.posts.findMany()
        if(allBlogs) res.status(200).json(allBlogs);
        else res.status(404).json({message: "Empty: No blogs were found!!"});
    }catch(err){
        console.log(err);
        res.status(500).json({message: "Something went wrong! Try again after some minutes!"})
    }
}
