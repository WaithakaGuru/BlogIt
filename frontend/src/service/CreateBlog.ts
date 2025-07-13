import { useMutation } from "@tanstack/react-query";
import axInstance from "../utils/AxInstance";
import useBlog from "../store/Blog.store";

const createBlog = () => {
  const { token } = useBlog();
  return useMutation({
    mutationKey: ["CREATE_BLOG"],
    mutationFn: async (postData: any) => {
      axInstance.post("/blogs", {
        postData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    retry: 2,
  });
};

export default createBlog;
