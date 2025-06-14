import { apiClient } from "@/libs/api-client";

export const serviceBannerApi = {
  getServiceBanner: (params: { lang: string }) =>
    apiClient.get<TypeOfServiceBanner>("/api/pages/servicedata", params),
  //   getById: (id: string, params: { lang: string }) =>
  //     apiClient.get<BlogType>(`/api/pages/blog/${id}`, params),
};
