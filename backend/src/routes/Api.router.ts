import { Router} from "express";
import {getSpecificBlog, getUsers, createBlog, createUser, getAllBlogs} from "../controllers/exports.controller.ts"
import authenticateUsername from "../middlewares/authenticateUsername.middleware.ts";
import authenticateEmail from "../middlewares/authenticateEmail.middleware.ts";

const router = Router();

router.post("/blogs", createBlog);
router.post("/auth/register", authenticateUsername, authenticateEmail, createUser);
router.get("/users", getUsers);
router.get("/blogs/:id", getSpecificBlog);
router.get("/blogs", getAllBlogs);
export default router;