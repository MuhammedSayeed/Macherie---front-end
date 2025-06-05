import { t_shirts_big_screen, t_shirts_small_screen } from "@/constants/images"
import DynmicSection from "../ui/section/DynmicSection"




const TShirtsSection = () => {
    return (
        <DynmicSection label="T-shirts" path="/t-shirts" bigScreenCover={t_shirts_big_screen} smallScreenCover={t_shirts_small_screen} />
    )
}

export default TShirtsSection