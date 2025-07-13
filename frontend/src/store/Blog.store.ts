import { create, type StateCreator } from "zustand";

type BlogPost = {
  title: string;
  synopsis: string;
  description: string;
  imageUrl: string;
};

type BlogItems = {
  blog?: BlogPost;
  name: string;
  token: string | null;
  isLoggedIn: boolean
  setIsLoggedIn: () => void;
  addToken: (value: string | null) => void;
};

const blogitStore: StateCreator<BlogItems> = (set) => {
  return {
    name: "Waithaka",
    token: "",
    isLoggedIn: false,
    addToken(value) {
      set({ token: value });
    },
    setIsLoggedIn(){
      if(this.token !== null) {set({isLoggedIn: true})}
    }
  };
};

const useBlog = create(blogitStore);
export default useBlog;
