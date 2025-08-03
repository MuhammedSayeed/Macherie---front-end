import { getBanner } from "@/lib/api/banner";
import StaticSection from "../ui/section/StaticSection"




export default async function TShirtsSection({ value }: { value: string }) {
    const banner = await getBanner(value);


    return (
        <StaticSection cover={banner.image as string} path={`/clothing/${banner.category.value}-${banner.category._id}/all`} label={banner.category.name} />
    )
}