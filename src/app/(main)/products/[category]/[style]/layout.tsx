import FilterDrawer from "@/components/productsFilter/FilterDrawer"

interface IProps {
    children: React.ReactNode
}

const layout = ({ children }: IProps) => {
    return (
        <div className="px-3 pt-[9rem] md:pt-[6rem]">
            <FilterDrawer />
            {children}
        </div>
    )
}

export default layout