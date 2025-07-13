import { useMutation } from "@tanstack/react-query";
import axInstance from "../utils/AxInstance";
import useBlog from "../store/Blog.store";

const useCreateBlog = () => {
  const { token } = useBlog();
  return useMutation({
    mutationKey: ["CREATE_BLOG"],
    mutationFn: async (postData: any) => {
     const newBlog =  axInstance.post("/blogs", 
        postData,
        {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      return newBlog
    },
    retry: 2,
  });
};

export default useCreateBlog;
