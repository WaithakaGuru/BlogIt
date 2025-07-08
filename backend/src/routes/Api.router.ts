import { Router } from "express";
import createBlog from '../controllers/create-Blog.controller.ts';
import createUser from "../controllers/createUser.controller.ts";

const router = Router();

router.post("/api/blogs", createBlog);
router.post("/api/auth/register", createUser);
export default router;