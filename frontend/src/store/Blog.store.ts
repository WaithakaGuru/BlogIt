import {create, type StateCreator} from 'zustand'

type BlogPost = {
    title: string
    synopsis: string
    description: string
    imageUrl: string
}

type BlogItems = {
    blog?: BlogPost
    name: string
}


const blogitStore: StateCreator<BlogItems> = (set)=>{
   return{
    name: "Waithaka"
   }
}

const useBlog = create(blogitStore);
export default useBlog