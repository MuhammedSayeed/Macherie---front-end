"use client"
import Drawer from '../ui/drawer/Drawer'
import DrawerHeader from '../ui/drawer/Header'
import FilterDrawerActions from './FilterDrawerActions'
import ColorsFilter from './filters/ColorsFilter'
import OrderByPrice from './filters/OrderByPrice'
import SizeFilter from './filters/SizeFilter'
import useFilterDrawer from '@/hooks/useFilterDrawer'

const FilterDrawer = () => {
  const { isOpen, toggleDrawer } = useFilterDrawer();


  return (
    <Drawer isOpen={isOpen} onClose={toggleDrawer}>
      <div className="w-full h-full grid grid-rows-[auto_1fr_auto]">
        <DrawerHeader onClose={toggleDrawer} header='Filter' />
        <div className="h-full max-h-full relative">
          <div className="absolute w-full h-full overflow-y-auto">
            <OrderByPrice />
            <SizeFilter />
            <ColorsFilter />
          </div>
        </div>
        <FilterDrawerActions />
      </div>
    </Drawer>
  )
}

export default FilterDrawer