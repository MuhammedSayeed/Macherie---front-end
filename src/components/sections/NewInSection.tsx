import React from 'react'
import { new_in_big_screen, new_in_small_screen } from '@/constants/images'
import DynmicSection from '../ui/section/DynmicSection'
const NewInSection = () => {
    return (
        <DynmicSection path="/new" label="New in" bigScreenCover={new_in_big_screen} smallScreenCover={new_in_small_screen} />
    )
}

export default NewInSection