"use client"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
  NavigationMenuIndicator
} from "@/components/ui/navigation-menu"
import Link from "next/link"
import { menuItems } from "../constants/menu-items"
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Menu() {
  const pathname = usePathname();
  const [selectedPath, setSelectedPath] = useState(('/'));
  useEffect(() => {
    setSelectedPath(pathname);
  }, [pathname]);
  return (
    <div className="w-full flex justify-center border-b fixed top-0 z-10 bg-white">
      <NavigationMenu className='list-none'>
        {menuItems.map((item) => {
          const { name, href } = item;
          return (
            <NavigationMenuItem key={name}>
              <NavigationMenuLink
                asChild
                active={selectedPath === href}
                className={`${navigationMenuTriggerStyle()} ${selectedPath === href ? 'font-bold underline underline-offset-8' : ''}`}
              >
                <Link href={href}>{name}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          )
        }
        )}
        <NavigationMenuIndicator />
      </NavigationMenu>
    </div >
  )

}