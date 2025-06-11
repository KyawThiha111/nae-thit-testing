import { apiClient } from "@/libs/api-client";

export const ContactDataApi = {
  getContactData: (params: { lang: string }) =>
    apiClient.get<TypeOfContactData>("/api/pages/contactdata", params),
  //   getById: (id: string, params: { lang: string }) =>
  //     apiClient.get<BlogType>(`/api/pages/blog/${id}`, params),
};
