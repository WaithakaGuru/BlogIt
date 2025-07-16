import useBlog from "../store/Blog.store";
import axInstance from "../utils/AxInstance";
import { useMutation} from "@tanstack/react-query";

function useRegisterNewUser() {
  const { token } = useBlog();
  return useMutation({
    mutationKey: ["REGISTER_NEW_USER"],
    mutationFn: async (data: any) => {
      const newUser = axInstance.post("/auth/register", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return newUser;
    },
  });
}

function useLogOutUser() {
  const { token } = useBlog();
  return useMutation({
    mutationKey: ["LOGOUT_USER"],
    mutationFn: async () => {
      const logout = axInstance.post(
        "/auth/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      return logout;
    },
  });
}

function useCreateNewBlog() {
  const { token } = useBlog();
  return useMutation({
    mutationKey: ["CREATE_NEW_BLOG"],
    mutationFn: async (data) => {
      const newBlog = await axInstance.post("/blogs", data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return newBlog;
    },
  });
}

function useUploadImage() {
  const {token} = useBlog();
  return useMutation({
    mutationKey: ["UPLOAD_CLOUDINARY_IMAGE_URL"],
    mutationFn: async () =>{
      const info = await axInstance.post("/signature",
      {
        headers: {Authorization: `Bearer ${token}`}, 
      })
      return info;
  }
  })
}

export { useRegisterNewUser, useLogOutUser, useCreateNewBlog, useUploadImage };
