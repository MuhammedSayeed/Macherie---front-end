import { Button } from '../ui/button'
import { Search } from 'lucide-react';

const SearchButton = () => {
  return (
    <div className="md:py-1 md:pl-2 md:min-w-[152px] lg:min-w-[250px] md:border md:rounded-2xl md:bg-white/10">
        <Button variant={"ghost"} className='!p-0 hover:bg-transparent hover:text-white/70 cursor-pointer '>
          <Search className="size-6" />
          <span className='hidden md:block'>Search</span>
        </Button>
    </div>
  )
}

export default SearchButton