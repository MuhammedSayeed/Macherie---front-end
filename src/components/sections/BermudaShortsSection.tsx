import React from 'react'
import { bermuda_shorts_big_screen , bermuda_shorts_small_screen} from '@/constants/images'
import DynmicSection from '../ui/section/DynmicSection'

const BermudaShortsSection = () => {
  return (
    <DynmicSection label="Bermuda shorts" path="/bermuda-shorts" bigScreenCover={bermuda_shorts_big_screen} smallScreenCover={bermuda_shorts_small_screen} />
  )
}

export default BermudaShortsSection