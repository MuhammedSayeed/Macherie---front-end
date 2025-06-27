import FilterButton from "@/components/ClothesFilter/FilterButton";
import Clothes from "@/components/clothes/Clothes";
import CompactViewButton from "@/components/clothes/CompactViewButton";
import ClothingStyles from "@/components/clothingStyles/ClothingStyles"
import { IClothingStyles } from "@/interfaces/clothingStyles";



// get server side props
// export const getServerSideProps = async () => {

// }

const page = () => {
  const clothingStyles: IClothingStyles[] = [
    { label: 'See all', value: 'all' },
    { label: 'Graphics', value: 'graphics' },
    { label: 'Basics', value: 'basics' },
    { label: 'STWD', value: 'stwd' },
    { label: 'Collaborations', value: 'collaborations' },
    { label: 'Strappy', value: 'strappy' },
  ];
  return (
    <div className="py-5">
      <div className="flex flex-col">
        <ClothingStyles styles={clothingStyles} />
        <div className="flex justify-end gap-2">
          <CompactViewButton />
          <FilterButton />
        </div>
      </div>
      <Clothes />
    </div>
  )
}

export default page