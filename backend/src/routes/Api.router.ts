import { Router} from "express";
import {getSpecificBlog, getUsers, createBlog, createUser, getAllBlogs} from "../controllers/exports.controller.ts"
import authenticateUsername from "../middlewares/authenticateUsername.middleware.ts";
import authenticateEmail from "../middlewares/authenticateEmail.middleware.ts";
import verifyLoginPassword from "../middlewares/verifyLoginPassword.middleware.ts";
import createUserJWebToken from "../middlewares/createUserWebToken.middleware.ts";
import verifyUserWebToken from "../middlewares/verifyUserJWebToken.middleware.ts";

const router = Router();

router.post("/auth/register", authenticateUsername, authenticateEmail, createUser);
router.post("/auth/login", verifyLoginPassword, createUserJWebToken)
router.post("/blogs",verifyUserWebToken, createBlog);
router.get("/users", getUsers);
router.get("/blogs/:id",verifyUserWebToken, getSpecificBlog);
router.get("/blogs",verifyUserWebToken, getAllBlogs);
export default router;


/* Remaining tasks */
/**
//  * POST /api/auth/register: register a user

// POST /api/auth/login: login a user

POST /api/auth/logout: logout a user

// GET /api/blogs: get all blogs

// POST /api/blogs: create a blog.

// GET /api/blogs/:blogId: get a specific blog.

PATCH /api/blogs/:blogId: update a blog.

DELETE /api/blogs/:blogId: delete a blog

PATCH /api/user: update user's primary information.

PATCH /api/user/password: update user's password.

GET /api/user/blogs: get all blogs belonging to a specific user.
 */
