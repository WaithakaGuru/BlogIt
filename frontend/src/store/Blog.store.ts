import { create, type StateCreator } from "zustand";

type BlogPost = {
  title: string;
  synopsis: string;
  description: string;
  imageUrl: string;
};

type BlogItems = {
  blog?: BlogPost;
  token: string | null;
  isLoggedIn: boolean | null;

  /* status code usage - 1 -> loggedIn user; 0 -> user not logged in */
  setIsLoggedIn: (code: number) => void;
  addToken: (value: string) => void;
};

const blogitStore: StateCreator<BlogItems> = (set) => {
  return {
    token: localStorage.getItem("token"),
    isLoggedIn: Boolean(localStorage.getItem("loggedIn")),
    addToken(value) {
      localStorage.setItem("token", value)
      set({ token: value });
    },
    setIsLoggedIn(code){
      if(code===1) {
        localStorage.setItem("loggedIn", "true");
         set({isLoggedIn: true})
      } else{
        localStorage.removeItem("loggedIn")
        set({isLoggedIn: false})
      }
    },
  };
};

const useBlog = create(blogitStore);
export default useBlog;
