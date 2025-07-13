import { useMutation } from "@tanstack/react-query";
import axInstance from "../utils/AxInstance";

const useLogUserIn = () => {
  return useMutation({
    mutationKey: ["LOG_USER_IN"],
    mutationFn: async (loginData: {
      identifier: string;
      enteredPassword: string;
    }) => {
      const loggedIn = await axInstance.post("/auth/login", loginData);
      if (loggedIn) {
        const authToken = loggedIn.data;
        return authToken;
      }
    },
    retry: 2,
  });
};
export default useLogUserIn;
