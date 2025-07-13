import useBlog from "../store/Blog.store";
import { useMutation } from "@tanstack/react-query";
import axInstance from "../utils/AxInstance";

const useDeleteBlog = (blogId: string, data: boolean = true) => {
  const { token } = useBlog();
  return useMutation({
    mutationKey: ["DELETE_BLOG", blogId],
    mutationFn: async (blogId: string) => {
      const deletedBlog = await axInstance.post(`/blogs/${blogId}`, 
        data,
        {        
          headers: {
            Authorization: `Bearer ${token}`,
          }
        },
      );
      return deletedBlog;
    },
  });
};
export default useDeleteBlog;
