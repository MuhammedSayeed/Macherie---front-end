"use client"
import Drawer from '../ui/drawer/Drawer'
import FilterDrawerActions from './FilterDrawerActions'
import FilterHeader from './FilterHeader'
import ColorsFilter from './filters/ColorsFilter'
import FitsFilter from './filters/FitsFilter'
import OrderByFilter from './filters/OrderByFilter'
import SizeFilter from './filters/SizeFilter'
import useFilterDrawer from '@/hooks/useFilterDrawer'

const FilterDrawer = () => {
  const { isOpen, toggleDrawer } = useFilterDrawer();


  return (
    <Drawer isOpen={isOpen} onClose={toggleDrawer}>
      <div className="w-full h-full grid grid-rows-[auto_1fr_auto]">
        <FilterHeader />
        <div className="h-full max-h-full relative">
          <div className="absolute w-full h-full overflow-y-auto">
            <OrderByFilter />
            <SizeFilter />
            <ColorsFilter />
            <FitsFilter />
          </div>
        </div>
        <FilterDrawerActions />
      </div>
    </Drawer>
  )
}

export default FilterDrawer