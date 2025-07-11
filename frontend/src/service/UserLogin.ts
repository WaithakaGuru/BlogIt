import {useMutation} from "@tanstack/react-query";
import axInstance from "../utils/AxInstance";

const LogUserIn = (logInData: {}) => {
    const info = useMutation({
        mutationKey: ["LOG_USER_IN"],
        mutationFn: async () => {
            const loggedIn = await axInstance.post("/auth/login", logInData);
            if(loggedIn) {
                const authToken = loggedIn.data;
                return authToken
            }
        },
        retry: 2
    })
    return info
}
export default LogUserIn;