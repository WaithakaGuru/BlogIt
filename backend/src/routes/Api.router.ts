import { Router } from "express";
import {
  getSpecificBlog,
  getUsers,
  createBlog,
  createUser,
  getAllBlogs,
  getUserSpecificBlogs,
  deleteSpecificBlog,
  deleteUserToken,
} from "../controllers/exports.controller.ts";
import {
  authenticateEmail,
  authenticateUsername,
  verifyLoginPassword,
  verifyUserWebToken,
  createUserJWebToken,
} from "../middlewares/exports.middleware.ts";
const router = Router();

router.post(
  "/auth/register",
  authenticateUsername,
  authenticateEmail,
  createUser,
);
router.post("/auth/login", verifyLoginPassword, createUserJWebToken);
router.post("/blogs", verifyUserWebToken, createBlog);
router.post("/auth/logout", verifyUserWebToken, deleteUserToken);
router.get("/users", getUsers);
router.get("/user/blogs", verifyUserWebToken, getUserSpecificBlogs);
router.get("/blogs/:id", verifyUserWebToken, getSpecificBlog);
router.get("/blogs", verifyUserWebToken, getAllBlogs);
router.delete("/blogs/:blogId", deleteSpecificBlog);
export default router;

/* Remaining tasks */
/**
//  * POST /api/auth/register: register a user

// POST /api/auth/login: login a user

//POST /api/auth/logout: logout a user

// GET /api/blogs: get all blogs

// POST /api/blogs: create a blog.

// GET /api/blogs/:blogId: get a specific blog.

// DELETE /api/blogs/:blogId: delete a blog

// GET /api/user/blogs: get all blogs belonging to a specific user.

PATCH /api/blogs/:blogId: update a blog.

PATCH /api/user: update user's primary information.

PATCH /api/user/password: update user's password.

 */
