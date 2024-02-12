"use client";

import { Compass, Layout } from "lucide-react";

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
                    <SidebarItem {...route} />
                ))
            }
        </div>
    )
}