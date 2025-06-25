"use client"
import { Button } from '../ui/button'
import useFilterDrawer from '@/hooks/useFilterDrawer'

const FilterButton = () => {
  const { toggleDrawer } = useFilterDrawer();
  return (
    <Button onClick={toggleDrawer} variant={"outline"} className='border-black/50 cursor-pointer'>Filter</Button>
  )
}

export default FilterButton