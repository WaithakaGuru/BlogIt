import { useQuery } from "@tanstack/react-query";
import axInstance from "../utils/AxInstance";
import useBlog from "../store/Blog.store";

const { token } = useBlog();

const getAllBlogs = async () => {
  const allBlogs = useQuery({
    queryKey: ["GET_ALL_BLOGS"],
    queryFn: async () => {
      const blogs = await axInstance.get("/blogs", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return blogs && blogs.data;
    },
    retry: 2,
  });
  return allBlogs;
};

const getUserBlogs = async () => {
  const userBlogs = useQuery({
    queryKey: ["GET_USER_BLOGS"],
    queryFn: async () => {
      const blogs = await axInstance.get("/user/blogs", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return blogs && blogs.data;
    },
    retry: 2,
  });
  return userBlogs;
};

const getSpecificBlog = async (id: string) => {
  const userSpecificBlog = useQuery({
    queryKey: ["GET_USER_SPECIFIC_BLOG", id],
    queryFn: async () => {
      await axInstance.get(`/blogs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
  });
  return userSpecificBlog;
};

const getUserSpecificBlog = async (id: string) => {
  const specificBlog = useQuery({
    queryKey: ["GET_SPECIFIC_BLOG"],
    queryFn: async () => {
      axInstance.get(`/user/blogs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
  });
  return specificBlog;
};

export { getAllBlogs, getUserBlogs, getUserSpecificBlog, getSpecificBlog };
