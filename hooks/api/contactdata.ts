import { ContactDataApi } from "@/services/contactdata";
import { useQuery } from "@tanstack/react-query";

export const useContactData = (params:{
    lang:string
})=>{
    return useQuery({
        queryKey:['about_mission'],
        queryFn:()=>ContactDataApi.getContactData(params)
    })
}