import useBlog from "../store/Blog.store";
import axInstance from "../utils/AxInstance";
import { useMutation } from "@tanstack/react-query";

function useRegisterNewUser () {
    const {token} = useBlog();
    return useMutation({
        mutationKey: ["RGISTER_NEW_USER"],
        mutationFn: async (data: any) => {
            const newUser = axInstance.post("/auth/register", data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            return newUser;
        }
    })
}

function useLogOutUser () {
    const {token} = useBlog();
    return useMutation({
        mutationKey: ["LOGOUT_USER"],
        mutationFn: async () => {
           const logout =  axInstance.post("/auth/logout", {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            return logout
        }
    })
}

export {useRegisterNewUser, useLogOutUser}