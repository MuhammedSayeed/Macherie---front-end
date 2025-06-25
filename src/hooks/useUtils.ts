"use client"

import { useRouter , useParams} from "next/navigation";
const useUtils = () => {
    const router = useRouter();
    const params = useParams()
    const handleNavigate = (path: string) => {
        router.push(path);
    }
    
    return {
        handleNavigate,
        params
    }
}

export default useUtils