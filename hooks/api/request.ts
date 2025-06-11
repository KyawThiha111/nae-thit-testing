import { RequestMsg } from "@/services/request-msg";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type CreateBlogPayload = {
  sendername: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export const useCreateMessage = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error, CreateBlogPayload>({
    mutationFn: async (newBlog: CreateBlogPayload) => {
      const response = await RequestMsg.create(newBlog);
      return response; // Assuming response is of type BlogType, as defined in your API client
    },

    onSuccess: () => {},
    // Optional: Define what happens if the mutation fails.
    onError: (error: Error) => {
      console.error("Failed to create blog post:", error.message);
    },
  });
};
