import axInstance from "../utils/AxInstance";
import { useMutation } from "@tanstack/react-query";
import useBlog from "../store/Blog.store";

function useUpdatePassword() {
    const {token} = useBlog();

    return useMutation({
        mutationKey: ["UPDATE_PASSWORD"],
        mutationFn: async(passData : { currentPassword: string, newPassword: string}) => {
            const updatedPassword  = await axInstance.patch(`user/password`, 
                passData,
                {headers: {Authorization: `Bearer ${token}`}}
            )
            return updatedPassword
        }
    })
}

type item = string | any

function useUpdateUserInfo () {
    const {token} = useBlog();
    return useMutation({
        mutationKey: ["UPDATE_USERR_INFO"],
        mutationFn: async (data: {firstName: item, lastName: item, userName: item, email: item}) => {
            const updatedUser = await axInstance.patch("user", 
                data, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            return updatedUser;
        }
    })
}

export {useUpdatePassword, useUpdateUserInfo}