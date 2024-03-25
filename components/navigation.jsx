"use client"
import { useState } from 'react';
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { Menu, X, ExternalLink } from 'lucide-react';


import { Button } from '@/components/ui/button'
import { Toggle } from '@/components/ui/toggle'
import { ModeToggle } from '@/components/mode-toggle'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
    MobileNavigationMenu,
    MobileNavigationMenuItem,
    MobileNavigationMenuLink,
    MobileNavigationMenuList,
    mobileNavigationMenuTriggerStyle,
} from "@/components/ui/mobile-navigation-menu"

export function Navigation({ routes }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const pathname = usePathname()

    return (
        <div >
            <div className="mx-auto flex flex-row justify-between items-start sm:items-center">
                <div className="flex flex-col items-start">
                    <Button onClick={toggleMenu} className="sm:hidden" variant="outline" size="icon">
                        {isOpen ? (
                            <X className="" size={20} strokeWidth={1} />
                        ) : (
                            <Menu className="" size={20} strokeWidth={1} />
                        )}
                        <span className="sr-only">Open main menu</span>
                    </Button>
                    <NavigationMenu className="hidden sm:block">
                        {/* <NavigationMenu className={isOpen ? "w-full" : "hidden sm:block"}> */}
                        <NavigationMenuList className="">
                            {routes.map((route) => (
                                <NavigationMenuItem className="" key={route.title}
                                >
                                    <Link className="w-full" href={route.href} legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}
                                            data-state={
                                                route.href === pathname
                                                    ? "open"
                                                    : "closed"
                                            }
                                        >
                                            {route.title}
                                            {/* if route.title is GitHub then add an external link icon */}
                                            {route.title === "GitHub" && (
                                                <ExternalLink className="ml-1" size={14} strokeWidth={2} />
                                            )}

                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <ModeToggle />
            </div>

            {/* mobile menu */}
            <MobileNavigationMenu className={isOpen ? "sm:hidden" : "hidden"}>
                <MobileNavigationMenuList className=" ">
                    {routes.map((route) => (
                        <MobileNavigationMenuItem className="w-full" key={route.title}>
                            <Link href={route.href} legacyBehavior passHref>
                                <MobileNavigationMenuLink className={mobileNavigationMenuTriggerStyle()}
                                    data-state={
                                        route.href === pathname
                                            ? "open"
                                            : "closed"
                                    }
                                >
                                    {route.title}
                                </MobileNavigationMenuLink>
                            </Link>
                        </MobileNavigationMenuItem>

                    ))}
                </MobileNavigationMenuList>
            </MobileNavigationMenu>
        </div>
    )
}
