import useBlog from "../store/Blog.store";
import { useMutation } from "@tanstack/react-query";
import axInstance from "../utils/AxInstance";

const deleteBlog = async (blogId: string) => {
  const { token } = useBlog();
  const deletedBlog = useMutation({
    mutationKey: ["DELETE_BLOG", blogId],
    mutationFn: async () => {
      await axInstance.patch(`/blogs/${blogId}`, {
        data: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
  });
  return deletedBlog;
};
export default deleteBlog;
