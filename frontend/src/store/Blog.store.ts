import {create, type StateCreator} from 'zustand'

type BlogPost = {
    title: string
    synopsis: string
    description: string
    imageUrl: string
}

type BlogItems = {
    blog?: BlogPost
    name: string,
    token: string 
}


const blogitStore: StateCreator<BlogItems> = (set)=>{
   return{
    name: "Waithaka",
    token: ""
   }
}

const useBlog = create(blogitStore);
export default useBlog