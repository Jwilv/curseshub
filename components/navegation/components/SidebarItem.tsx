
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface SidebarItemProps {
    icon: LucideIcon;
    label: string;
    href: string;

}
export const SidebarItem = ({
    icon: Icon,
    label,
    href,
}: SidebarItemProps) => {

    const pathName = usePathname();

    const isActive = (pathName === href && pathName === '/') ||
        pathName === href || pathName?.startsWith(`${href}/`);

    return (
        <Link
            href={href}
            className={cn(
                'flex items-center gap-x-2 text-sm text-white    font-[500] pl-6 transition-all hover:text-slate-600',
                'hover:bg-slate-300/20 hover:text-white',
            )}
        >
            <div className="flex items-center gap-x-2 py-4">
                <Icon
                    size={22}
                    className={cn(
                        "text-white",
                        isActive && 'text-[#8046fd]'
                    )}
                />
                {label}
            </div>
            <div
                className={cn(
                    'ml-auto opacity-0 border-2 border-[#8046fd] h-full transition-all',
                    isActive && 'opacity-100',
                )}
            />
        </Link>
    )
}
