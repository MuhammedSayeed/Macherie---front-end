import React from 'react'
import Section from '../ui/Section'
import { new_in_big_screen, new_in_small_screen } from '@/constants/images'
const NewInSection = () => {
    return (
        <Section path="/new" label="New in" bigScreenCover={new_in_big_screen} smallScreenCover={new_in_small_screen} />
    )
}

export default NewInSection