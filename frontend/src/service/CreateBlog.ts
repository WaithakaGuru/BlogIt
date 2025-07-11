import { useMutation } from "@tanstack/react-query";
import axInstance from "../utils/AxInstance";
import useBlog from "../store/Blog.store";

const createBlog = async (postData: any) => {
  const { token } = useBlog();
  const newBlog = useMutation({
    mutationKey: ["CREATE_BLOG"],
    mutationFn: async () => {
      axInstance.post("/blogs", {
        postData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    retry: 2,
  });
  return newBlog;
};

export default createBlog;
