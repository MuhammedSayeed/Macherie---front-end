import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";


interface IProps {
    children: React.ReactNode;
}
const layout = ({ children }: IProps) => {
    return (
        <div className="grid grid-rows-[auto_1fr]">
            <nav className="px-3 py-5">
                <div className="">
                    <Link href={"/login"}>
                        <Button variant="ghost" size="icon" className=" hover:bg-gray-200 cursor-pointer">
                            <ArrowLeft className="size-6" />
                        </Button>
                    </Link>
                </div>
            </nav>
            {children}
        </div>
    )
}

export default layout