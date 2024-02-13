"use client";

import { Compass, Layout } from "lucide-react";
import { SidebarItem } from './SidebarItem';

const guestRoutes = [
    {
        icon: Layout,
        name: "Dashboard",
        href: '/',
    },
    {
        icon: Compass,
        name: "Browse",
        href: '/search',
    }
]

export const SidebarRoutes = () => {

    const routes = guestRoutes

    return (
        <div className="flex flex-col w-full">
            {
                routes.map((route) => (
                    <SidebarItem
                        key={route.name}
                        {...route}
                    />
                ))
            }
        </div>
    )
}