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
  token: string;
  addToken: (value: string) => void;
};

const blogitStore: StateCreator<BlogItems> = (set) => {
  return {
    name: "Waithaka",
    token: "",
    addToken(value) {
      set({ token: value });
    },
  };
};

const useBlog = create(blogitStore);
export default useBlog;
