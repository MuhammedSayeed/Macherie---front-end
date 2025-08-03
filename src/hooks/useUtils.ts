"use client"

import { useRouter , useParams} from "next/navigation";
const useUtils = () => {
    const router = useRouter();
    const params = useParams()
    const handleNavigate = (path: string) => {
        router.push(path);
    }

    const getIdFromUrl = (url: string) => {
        const id = url.split("-").pop();
        return id;
      }
    
    return {
        handleNavigate,
        params,
        getIdFromUrl
    }
}

export default useUtils