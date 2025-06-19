import { HomebannerApi } from "@/services/homebanner";
import { useQuery } from "@tanstack/react-query";

export const useHomeBanner = (params: {
  // page: number;
  // per_page: number;
  lang: string;
}) => {
  return useQuery({
    queryKey: ["home_banner"],
    queryFn: () => HomebannerApi.getHomeData(params),
  });
};
