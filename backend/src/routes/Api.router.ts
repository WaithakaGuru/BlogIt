import { Router,Request, Response } from "express";
import {getSpecificBlog, getUsers, createBlog, createUser, getAllBlogs} from "../controllers/exports.controller.ts"
import verifyUniqueUsername from "../middlewares/verifyUsername.middleware.ts";
import verifyUniqueEmail from "../middlewares/verifyEmail.middleware.ts";

const router = Router();

router.get("/", (_req: Request, res: Response)=>{res.send("Welcome to the Home Page")});
router.post("/blogs", createBlog);
router.post("/auth/register", verifyUniqueUsername, verifyUniqueEmail, createUser);
router.get("/users", getUsers);
router.get("/blogs/:id", getSpecificBlog);
router.get("/blogs", getAllBlogs);
export default router;