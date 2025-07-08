import { Router,Request, Response } from "express";
import createBlog from '../controllers/create-Blog.controller.ts';
import createUser from "../controllers/createUser.controller.ts";
import getUsers from "../controllers/getUsers.controller.ts";
import getSpecificBlog from "../controllers/getSpecificBlog.controller.ts"
import verifyUniqueUsername from "../middlewares/verifyUsername.middleware.ts";
import verifyUniqueEmail from "../middlewares/verifyEmail.middleware.ts";

const router = Router();

router.get("/", (_req: Request, res: Response)=>{res.send("Welcome to the Home Page")});
router.post("/blogs", createBlog);
router.post("/auth/register", verifyUniqueUsername, verifyUniqueEmail, createUser);
router.get("/users", getUsers);
router.get("/blogs/:id", getSpecificBlog);
export default router;