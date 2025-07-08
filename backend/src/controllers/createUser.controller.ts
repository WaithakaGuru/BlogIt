import client from "../utils/PrismaUtils.ts"
import { Response, Request } from "express"

const createUser = async (req: Request, res: Response) => {
    try{
        const {firstName, lastName, userName, email, password} = req.body;
        const newUser = await client.user.create({
            data: {firstName, lastName, userName, email, password}
        })
        if(newUser) res.status(201).json(newUser)
    }catch(err){
        console.log(err);
        res.status(500).json({message: "Something went wrong!!"})
    }
}
export default createUser;
