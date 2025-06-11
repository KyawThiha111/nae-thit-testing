import { servicesApi } from "@/services/services";
import { useQuery } from "@tanstack/react-query";

export const useServices = (params:{
    lang:string,
    showonhomepage:string
})=>{
    return useQuery({
        queryKey:['services'],
        queryFn:()=>servicesApi.getServices(params)
    })
}