"use client"
import { frameImg, frameHeader } from '@/constants/images'
import StaticSection from '../ui/section/StaticSection'
import Image from 'next/image'

const FrameSection = () => {
    return (
        <StaticSection cover={frameImg} >
            <Image src={frameHeader} height={350} width={350} alt='frame' />
        </StaticSection>
    )
}

export default FrameSection