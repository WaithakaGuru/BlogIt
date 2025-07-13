import useBlog from "../store/Blog.store";
import { useMutation } from "@tanstack/react-query";
import axInstance from "../utils/AxInstance";

const useDeleteBlog = async (blogId: string) => {
  const { token } = useBlog();
  return useMutation({
    mutationKey: ["DELETE_BLOG", blogId],
    mutationFn: async (blogId: string) => {
      await axInstance.patch(`/blogs/${blogId}`, {
        data: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
  });
};
export default deleteBlog;
