import { useFiltersStore } from '@/lib/store/filtersStore';
import { Button } from '../ui/button'
import useFilterDrawer from '@/hooks/useFilterDrawer';

const FilterDrawerActions = () => {
  const { reset, colors , sort , sizes  } = useFiltersStore();
  const { toggleDrawer } = useFilterDrawer();

  const isFilterActive = colors.length > 0 || sizes.length > 0 || !!sort;

  const handleReset = () => {
    if (isFilterActive) reset()
  }

  const handleApplyFilters = () => {
    toggleDrawer()
  }
  return (
    <div className='grid grid-cols-2 gap-3 px-4 py-6 border-t-[6px] border-[#E3E3E3]'>
      <Button disabled={!isFilterActive} onClick={handleReset} size={"lg"} variant={"outline"} className='rounded-full py-6'>Reset Filters</Button>
      <Button onClick={handleApplyFilters} size={"lg"} className='rounded-full py-6'>See Results</Button>
    </div>
  )
}

export default FilterDrawerActions