import { Button } from '../ui/button'
import { Search } from 'lucide-react';
import useSearchButton from '@/hooks/useSearchButton';
import { useSearchStore } from '@/lib/store/useSearchStore';

const OpenSearchButton = () => {
  const { handleSetSearchState } = useSearchButton();
  const { isOpen } = useSearchStore();
  
  if (isOpen) return null;

  return (
    <div onClick={() => handleSetSearchState(true)} className="py-0.5 pl-2 min-w-[152px] lg:min-w-[250px] border border-black rounded-xl bg-white/5 cursor-pointer">
      <Button variant={"ghost"} className='!p-0 hover:bg-transparent text-black  cursor-pointer'>
        <Search className="size-6" />
        <span>Search</span>
      </Button>
    </div>
  )
}

export default OpenSearchButton