import { apiClient } from "@/libs/api-client";
export const servicesApi = {
    getServices:(params:{lang:string,showonhomepage:string})=>
      apiClient.get<TypeOfServices>('/api/pages/services',params)
}