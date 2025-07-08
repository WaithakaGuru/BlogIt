import { Router } from "express";
import createBlog from '../controllers/CreateBlog';

const router = Router();

router.post("/api/blogs", createBlog);