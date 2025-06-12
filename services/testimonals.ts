import { apiClient } from "@/libs/api-client";
export const TestimonalsApi = {
    getTestimonals:(params:{lang:string})=>
      apiClient.get<TypeOfTestimonals>('/api/pages/testimonals',params)
}