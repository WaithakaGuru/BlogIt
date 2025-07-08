import { Router,Request, Response } from "express";
import createBlog from '../controllers/create-Blog.controller.ts';
import createUser from "../controllers/createUser.controller.ts";
import getUsers from "../controllers/getUsers.controller.ts";

const router = Router();

router.get("/", (_req: Request, res: Response)=>{res.send("Welcome to the Home Page")});
router.post("/blogs", createBlog);
router.post("/auth/register", createUser);
router.get("/users", getUsers)
export default router;