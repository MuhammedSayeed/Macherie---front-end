import React from 'react'
import { Button } from '../ui/button'

const FilterDrawerActions = () => {
  return (
    <div className='grid grid-cols-2 gap-3 px-4 py-6 border-t-[6px] border-[#E3E3E3]'>
      <Button size={"lg"} variant={"outline"} className='rounded-full py-6'>Reset Filters</Button>
      <Button size={"lg"} className='rounded-full py-6'>See Results</Button>
    </div>
  )
}

export default FilterDrawerActions