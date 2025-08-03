import BottomsGuide from "./BottomsGuide"
import TopsGuide from "./TopsGuide"


interface Iprops {
    type: "tops" | "bottoms"
}
const MeasurementsPreview = ({ type }: Iprops) => {

    if (type === "tops") return <TopsGuide />
    if (type === "bottoms") return <BottomsGuide />
    return null;
}

export default MeasurementsPreview