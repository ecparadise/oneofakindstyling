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
    <div className="w-full flex justify-center border-b fixed top-0 z-50" style={{ fontFamily: 'Arial, Helvetica, sans-serif', backgroundColor: '#fbf8f3', opacity: 1 }}>
      <NavigationMenu className='list-none' style={{ backgroundColor: '#fbf8f3' }}>
        {menuItems.map((item) => {
          const { name, href } = item;
          return (
            <NavigationMenuItem key={name}>
              <NavigationMenuLink
                asChild
                active={selectedPath === href}
                className={`${navigationMenuTriggerStyle()} ${selectedPath === href ? 'font-normal underline underline-offset-8' : 'font-normal'}`}
                style={{ 
                  letterSpacing: '0.3px', 
                  backgroundColor: '#fbf8f3',
                  color: 'black',
                  textDecorationColor: selectedPath === href ? '#7a2e2e' : 'transparent'
                }}
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