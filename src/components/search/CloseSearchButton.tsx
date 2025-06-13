import useSearchButton from "@/hooks/useSearchButton"
import { useSearchStore } from "@/lib/store/useSearchStore";
import { X } from "lucide-react"

const CloseSearchButton = () => {
    const { handleSetSearchState } = useSearchButton();
    const { isOpen } = useSearchStore();

    if (!isOpen) return null;
    
    return (
        <div onClick={() => handleSetSearchState(false)} className="cursor-pointer">
            <X className='text-black' />
        </div>
    )
}

export default CloseSearchButton