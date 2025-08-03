import AuthNavbar from "@/components/ui/Navbar/AuthNavbar"



interface IProps {
    children: React.ReactNode
}
const Authlayout = ({ children }: IProps) => {
    return (
        <div className="grid grid-rows-[auto_1fr]">
            <AuthNavbar />
            <div>
                {children}
            </div>
        </div>
    )
}

export default Authlayout