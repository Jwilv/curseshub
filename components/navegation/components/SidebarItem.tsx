
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface SidebarItemProps {
    icon: LucideIcon;
    name: string;
    href: string;

}
export const SidebarItem = ({
    icon: Icon,
    name,
    href,
}: SidebarItemProps) => {
 
    const pathName = usePathname();
    const router = useRouter();

    const isActive = (pathName === href && pathName === '/') ||
        pathName === href || pathName?.startsWith(`${href}/`);

    return (
        <div>SidebarItem</div>
    )
}
