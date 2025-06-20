import { apiClient } from "@/libs/api-client";
export const BlogCataApi = {
    getBlogCata:()=>
      apiClient.get<TypeOfAllCatagory>('/api/pages/blogcatagory')
}