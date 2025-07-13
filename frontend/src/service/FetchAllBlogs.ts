import { useQuery } from "@tanstack/react-query";
import axInstance from "../utils/AxInstance";
import useBlog from "../store/Blog.store";

const useGetAllBlogs = async () => {
  const { token } = useBlog();
  return useQuery({
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
}

const useGetUserBlogs = async () => {
  const { token } = useBlog();
  return useQuery({
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
};

const useGetSpecificBlog = async (id: string) => {
  const { token } = useBlog();
  return useQuery({
    queryKey: ["GET_USER_SPECIFIC_BLOG", id],
    queryFn: async () => {
      await axInstance.get(`/blogs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
  });
}

const useGetUserSpecificBlog = async (id: string) => {
  const { token } = useBlog();
  return useQuery({
    queryKey: ["GET_SPECIFIC_BLOG"],
    queryFn: async () => {
      axInstance.get(`/user/blogs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
  });
}

export { useGetAllBlogs, useGetSpecificBlog, useGetUserSpecificBlog, useGetUserBlogs };
