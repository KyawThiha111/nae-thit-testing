import { paginatedBlogApi } from "@/services/pagiblog";
import { useQuery } from "@tanstack/react-query";

export const usePaginatedBlog = (params:{
    lang:string,
    catagory:string|null,
    page:number
})=>{
    return useQuery({
        queryKey:['paginatedBlog'],
        queryFn:()=>paginatedBlogApi.getPaginatedBlog(params)
    })
}