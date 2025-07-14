import useBlog from "../store/Blog.store";
import { useMutation } from "@tanstack/react-query";
import axInstance from "../utils/AxInstance";

const useDeleteBlog = (blogId: string) => {
  const { token } = useBlog();
  return useMutation({
    mutationKey: ["DELETE_BLOG", blogId],
    mutationFn: async () => {
      const deletedBlog = await axInstance.delete(`/blogs/${blogId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return deletedBlog;
    },
  });
};
export default useDeleteBlog;
