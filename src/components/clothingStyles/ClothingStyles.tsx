"use client"
import { IClothingStyles } from "@/interfaces/clothingStyles"
import { Button } from "../ui/button"
import useUtils from "@/hooks/useUtils"
import clsx from "clsx"

interface IProps {
  styles: IClothingStyles[]
}
const ClothingStyles = ({ styles }: IProps) => {
  const { handleNavigate, params } = useUtils()

  const renderStyles = styles.map(({ label, value }) => {
    const handleClick = () => handleNavigate(`/clothing/${params?.category}/${value}`)
    const isActive = params?.style === value
    return <Button onClick={handleClick} className={clsx("cursor-pointer bg-gray-100 text-black hover:bg-gray-200", isActive && "bg-black hover:bg-black/80 text-white")} key={value}>{label}</Button>
  })


  return (
    <div className='flex justify-center flex-wrap space-x-3 space-y-2'>
      {renderStyles}
    </div>
  )
}

export default ClothingStyles