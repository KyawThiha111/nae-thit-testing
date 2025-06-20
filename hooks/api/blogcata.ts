import { BlogCataApi } from "@/services/blogcata";
import { useQuery } from "@tanstack/react-query";

export const useBlogCata = ()=>{
    return useQuery({
        queryKey:['blogcata'],
        queryFn:()=>BlogCataApi.getBlogCata()
    })
}