import { apiClient } from "@/libs/api-client";

type CreateBlogPayload = {
  sendername: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export const RequestMsg = {
  create: (payload: CreateBlogPayload) =>
    apiClient.post<any>("/api/pages/messageus", payload),
};
