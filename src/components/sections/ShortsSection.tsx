import React from 'react'
import StaticSection from '../ui/section/StaticSection'
import { getBanner } from '@/lib/api/banner';



export default async function ShortsSection({ value }: { value: string }) {
  const banner = await getBanner(value);


  return (
    <StaticSection cover={banner.image as string} path={`/clothing/${banner.category.value}-${banner.category._id}/all`} label={banner.category.name} />
  )
}
