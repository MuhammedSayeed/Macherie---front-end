"use client"
import { Button } from '../ui/button'
import useFilterDrawer from '@/hooks/useFilterDrawer'

interface IProps {
  disabled: boolean
}
const FilterToggleButton = ({ disabled }: IProps) => {
  const { toggleDrawer } = useFilterDrawer();
  return (
    <Button disabled={disabled} onClick={toggleDrawer} variant={"outline"} className='border-black/50 cursor-pointer'>Filter</Button>
  )
}

export default FilterToggleButton