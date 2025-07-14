import { useQuery } from "@tanstack/react-query";
import axInstance from "../utils/AxInstance";
import useBlog from "../store/Blog.store";

const useGetAllBlogs = () => {
  const { token } = useBlog();
  return useQuery({
    queryKey: ["GET_ALL_BLOGS"],
    queryFn: async () => {
      const blogs = await axInstance.get("/blogs", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return blogs.data;
    },
    retry: 2,
  });
};

const useGetUserBlogs = () => {
  const { token } = useBlog();
  return useQuery({
    queryKey: ["GET_USER_BLOGS"],
    queryFn: async () => {
      const blogs = await axInstance.get("/user/blogs", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return blogs.data;
    },
    retry: 2,
  });
};

const useGetSpecificBlog = (id: string) => {
  const { token } = useBlog();
  return useQuery({
    queryKey: ["GET_USER_SPECIFIC_BLOG", id],
    queryFn: async () => {
      const blog = await axInstance.get(`/blogs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return blog;
    },
    retry: 2,
  });
};

const useGetUserSpecificBlog = (id: string) => {
  const { token } = useBlog();
  return useQuery({
    queryKey: ["GET_SPECIFIC_BLOG"],
    queryFn: async () => {
      const specificBlog = await axInstance.get(`/user/blogs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return specificBlog.data;
    },
    retry: 1,
  });
};

const useGetCurrentUserInfo = (isLoggedIn: boolean = false) => {
  const { token } = useBlog();
  return useQuery({
    queryKey: ["GET_CURRENT_USER_DETAILS"],
    queryFn: async () => {
      const currentUserInfo = await axInstance.get("/user", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return currentUserInfo;
    },
    retry: 1,
    enabled: isLoggedIn,
  });
};

const useGetUserInfo = (id: String) =>  {
  const {token} = useBlog();
  return useQuery({
    queryKey: ["GET_USER_INFO", id],
    queryFn: async () => {
      const userInfo = await axInstance.get(`users/${id}`, {
        headers: {Authorization: `Bearer ${token}`},
      })
      return userInfo;
    },
    retry :1,
  })
}

export {
  useGetAllBlogs,
  useGetSpecificBlog,
  useGetUserSpecificBlog,
  useGetUserBlogs,
  useGetCurrentUserInfo,
  useGetUserInfo
};
