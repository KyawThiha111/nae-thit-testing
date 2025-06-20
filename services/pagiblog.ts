import { apiClient } from "@/libs/api-client";

export const paginatedBlogApi = {
  getPaginatedBlog: (params: { lang: string, catagory:string|null, page:number }) =>
    apiClient.get<TypeOfGetPagiBlog>("/api/pages/blogpagination", params),
  //   getById: (id: string, params: { lang: string }) =>
  //     apiClient.get<BlogType>(`/api/pages/blog/${id}`, params),
};