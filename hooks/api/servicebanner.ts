import { serviceBannerApi } from "@/services/servicebanner";
import { useQuery } from "@tanstack/react-query";


export const useServiceBanner= (params:{
    lang:string
})=>{
    return useQuery({
        queryKey:['service_banner'],
        queryFn:()=>serviceBannerApi.getServiceBanner(params)
    })
}
