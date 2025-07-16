import { Router } from "express";
import {
  getSpecificBlog,
  getUserInfo,
  createBlog,
  createUser,
  getAllBlogs,
  getUserSpecificBlogs,
  getUserSpecificBlog,
  deleteSpecificBlog,
  deleteUserToken,
  getCurrentUserDetails,
  updateBlog,
  updateUserInfo,
  updatePassword,
  cloudinaryUpload,
} from "../controllers/exports.controller.ts";
import {
  authenticateEmail,
  authenticateUsername,
  verifyLoginPassword,
  verifyUserWebToken,
  createUserJWebToken,
  verifyPassword,
  getUserPassword,
} from "../middlewares/exports.middleware.ts";
import verifyNameEmail from "../middlewares/verifyNameEmail.middleware.ts";
const router = Router();

router.post("/signature", verifyUserWebToken, cloudinaryUpload)
router.post(
  "/auth/register",
  authenticateUsername,
  authenticateEmail,
  createUser,
);
router.post("/auth/login", verifyLoginPassword, createUserJWebToken);
router.post("/blogs", verifyUserWebToken, createBlog);
router.post("/auth/logout", verifyUserWebToken, deleteUserToken);
router.get("/users/:id", verifyUserWebToken, getUserInfo);
router.get("/user", verifyUserWebToken, getCurrentUserDetails);
router.get("/user/blogs", verifyUserWebToken, getUserSpecificBlogs);
router.get("/user/blogs/:id", verifyUserWebToken, getUserSpecificBlog);
router.get("/blogs/:id", verifyUserWebToken, getSpecificBlog);
router.get("/blogs", verifyUserWebToken, getAllBlogs);
router.patch("/blogs/:id", verifyUserWebToken, updateBlog);
router.patch("/users", verifyUserWebToken, verifyNameEmail, updateUserInfo);
router.patch(
  "/users/password",
  verifyUserWebToken,
  getUserPassword,
  verifyPassword,
  updatePassword,
);
router.delete("/blogs/:id", verifyUserWebToken, deleteSpecificBlog);
export default router;
