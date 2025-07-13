import axInstance from "../utils/AxInstance";
import useBlog from "../store/Blog.store";
import { useMutation } from "@tanstack/react-query";


const useUpdateBlog = (id:string, data: any) => {
    const {token} = useBlog();
    return useMutation({
        mutationKey: ["UPDATE_BLOG", id],
        mutationFn: async () => {
            const updatedBlog = await axInstance.patch("/user/blogs", data, {
                headers: {Authorization: `Bearer ${token}`}
            })
            return updatedBlog
        }
    })

}

export default useUpdateBlog;