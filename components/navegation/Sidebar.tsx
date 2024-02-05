import { Eclipse } from "lucide-react"
import Brand from "./components/Brand"


const Sidebar = () => {
    return (
        <div
            className="h-full border-r flex flex-col overflow-y-auto bg-[#141414] shadow-sm text-white border-[#4f4f4f]"
        >
            <div className="p-6">
                <Brand />
            </div>
        </div>
    )
}

export default Sidebar