import client from "../utils/PrismaUtils"
import { Response, Request } from "express"

const createBlog = async (req: Request, res: Response)=> {
    try{
        const { id } = req.params
        const {title, synopsis, content, imageUrl} = req.body;
        const newClient = await client.posts.create({
            data: {title, synopsis, content, featuredImageURL:imageUrl, userId: id }
        })
        if(newClient) res.status(201).json(newClient);
    }catch(err){
        console.log(err);
        res.status(500).json({message: "Something went wrong"})
    }
}

export default createBlog