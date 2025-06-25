import FilterDrawer from "@/components/ClothesFilter/FilterDrawer"
import CurrentPath from "@/components/currentPath/CurrentPath"

interface IProps {
    params: {
        category: string
    },
    children: React.ReactNode
}

const layout = ({ children, params }: IProps) => {
    return (
        <div className="px-3 pt-[9rem] md:pt-[6rem]">
            {/* <FilterDrawer/> */}
            <CurrentPath path={params.category} />
            <div className="">
                {children}
            </div>
        </div>
    )
}

export default layout