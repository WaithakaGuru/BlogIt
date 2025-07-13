import useBlog from "../store/Blog.store";
import axInstance from "../utils/AxInstance";
import { useMutation } from "@tanstack/react-query";

function useRegisterNewUser () {
    const {token} = useBlog();
    return useMutation({
        mutationKey: ["RGISTER_NEW_USER"],
        mutationFn: async (data: any) => {
            axInstance.post("/auth/register", data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        }
    })
}

function useLogOutUser () {
    const {token} = useBlog();
    return useMutation({
        mutationKey: ["LOGOUT_USER"],
        mutationFn: async () => {
            axInstance.post("/auth/logout", {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        }
    })
}

export {useRegisterNewUser, useLogOutUser}