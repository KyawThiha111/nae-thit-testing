import { TestimonalsApi } from "@/services/testimonals";
import { useQuery } from "@tanstack/react-query";

export const useTestimonals = (params:{
    lang:string
})=>{
    return useQuery({
        queryKey:['testimonals'],
        queryFn:()=>TestimonalsApi.getTestimonals(params)
    })
}