import { AxiosRequestConfig } from "axios";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/config/axios";



interface IUseCustomQuery {
    queryKey: string[];
    endPoint: string;
    config?: AxiosRequestConfig;
    enabled?: boolean;
}

const useCustomQuery = ({queryKey , endPoint , config , enabled} : IUseCustomQuery)=>{
    return useQuery({
        queryKey,
        queryFn: async ()=>{
            const res = await axiosInstance.get(endPoint, config);
            return res.data;
        },
        enabled
    })
}

export default useCustomQuery;