"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export function Footer({ routes }) {
    const pathname = usePathname()

    return (
        <footer className="mx-auto py-4 sm:py-8">
            <div className="flex justify-between py-8 sm:py-12 border-t-2">
                <div className="flex space-x-4">
                <NavigationMenu className=" ">
                        {/* <NavigationMenu className={isOpen ? "w-full" : "hidden sm:block"}> */}
                        <NavigationMenuList className="">
                    {routes.map((route) => (
                        // don't show current page in footer
                        route.href !== pathname &&
                        <NavigationMenuItem className="" key={route.title}>
                            <Link className="w-full" href={route.href} legacyBehavior passHref>
                                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-muted-foreground`}>
                                    {route.title}
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    ))}
                    </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div>
                    <p className="px-3 py-2 text-sm font-medium text-muted-foreground">Made by Luca Grippa</p>
                </div>
            </div>
        </footer>
    )
}
