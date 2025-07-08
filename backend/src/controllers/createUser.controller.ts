import hashPassword from "../utils/hashPassword.ts";
import client from "../utils/PrismaUtils.ts"
import { Response, Request } from "express"

const createUser = async (req: Request, res: Response) => {
    try{
        const {firstName, lastName, userName, email, password} = req.body;
        const hashedPassword = hashPassword(password);
        const newUser = await client.user.create({
            data: {firstName, lastName, userName, email, password: hashedPassword}
        })
        if(newUser) res.status(201).json(newUser)
    }catch(err){
        console.log(err);
        res.status(500).json({message: "Something went wrong!!"})
    }
}
export default createUser;
