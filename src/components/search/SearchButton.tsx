import { Button } from '../ui/button'
import { Search } from 'lucide-react';

const SearchButton = () => {
  return (
    <div className="py-0.5 pl-2 min-w-[152px] lg:min-w-[250px] border rounded-xl bg-white/5 cursor-pointer">
        <Button variant={"ghost"} className='!p-0 hover:bg-transparent hover:text-white/70 '>
          <Search className="size-6" />
          <span>Search</span>
        </Button>
    </div>
  )
}

export default SearchButton