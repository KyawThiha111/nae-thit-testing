import { apiClient } from "@/libs/api-client";

export const HomebannerApi = {
  getHomeData: (params: { lang: string }) =>
    apiClient.get<TypeOfHomeBanner>("/api/pages/homepagebanner", params),
  //   getById: (id: string, params: { lang: string }) =>
  //     apiClient.get<BlogType>(`/api/pages/blog/${id}`, params),
};
