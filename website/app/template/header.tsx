'use client'

import React, { useState, useEffect } from 'react'

import Link from "next/link"

import { Cog, Moon, Sun, Radar, TriangleAlert, CloudLightning, CloudHail, Wind, Tornado, 
    MessageSquareWarning, Car, CloudRainWind, LandPlot, CirclePlus, Save } from "lucide-react"

import { useTheme } from "next-themes"

import { Switch } from "@/components/ui/switch"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList,
  NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    icon: <Car />,
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

function ListItem({title, children, href, ...props}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

export default function Header() {

    const { setTheme } = useTheme()

    return (
        <header className="flex justify-between items-center p-1 border-b">
            <NavigationMenu viewport={false}>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Layout</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-2 md:w-[500px] md:grid-cols-2">
                                <li className="row-span-6">
                                    <NavigationMenuLink asChild>
                                        <a className="from-muted/50 to-muted flex h-50 w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md" href="#">
                                            <div className="mt-4 mb-2 text-lg font-medium justify-between">
                                            1x1
                                            </div>
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                                <li className="row-span-6">
                                    <NavigationMenuLink asChild>
                                        <a className="from-muted/50 to-muted flex h-50 w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md" href="#">
                                            <div className="mt-4 mb-2 text-lg font-medium justify-between">
                                            1x2
                                            </div>
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                                <li className="row-span-6">
                                    <NavigationMenuLink asChild>
                                        <a className="from-muted/50 to-muted flex h-50 w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md" href="#">
                                            <div className="mt-4 mb-2 text-lg font-medium justify-between">
                                            2x2
                                            </div>
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                                <li className="row-span-6">
                                    <NavigationMenuLink asChild>
                                        <a className="from-muted/50 to-muted flex h-50 w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md" href="#">
                                            <div className="mt-4 mb-2 text-lg font-medium justify-between">
                                            2x3
                                            </div>
                                        </a>
                                    </NavigationMenuLink>
                                </li>

                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>N/A</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {components.map((component) => (
                                <ListItem
                                key={component.title}
                                title={component.title}
                                href={component.href}
                                >
                                {component.description}
                                </ListItem>
                            ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Radar</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[200px] gap-4">
                                <li>
                                    <NavigationMenuLink asChild>
                                        <Link href="#">
                                            <div className="font-medium">Base Reflectivity</div>
                                        </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <Link href="#">
                                            <div className="font-medium">Base Velocity</div>
                                        </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <Link href="#">
                                            <div className="font-medium">Storm Relative Velocity</div>
                                        </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <Link href="#">
                                            <div className="font-medium">ZDR</div>
                                        </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <Link href="#">
                                            <div className="font-medium">KDP</div>
                                        </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <Link href="#">
                                            <div className="font-medium">HCA</div>
                                        </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <Link href="#">
                                            <div className="font-medium">Rainfall</div>
                                        </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <Link href="#">
                                            <div className="font-medium">Derived</div>
                                        </Link>
                                    </NavigationMenuLink>
                                </li>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Map Layers</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[300px] gap-4">
                                <li>
                                    <NavigationMenuLink asChild>
                                    <Link href="#" className="flex-row justify-between">
                                        <div className="flex items-center gap-2">
                                            <Radar />
                                            Radar
                                        </div>
                                        <Switch />
                                    </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                    <Link href="#" className="flex-row justify-between">
                                        <div className="flex items-center gap-2">
                                            <TriangleAlert />
                                            Warnings
                                        </div>
                                        <Switch />
                                    </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                    <Link href="#" className="flex-row justify-between">
                                        <div className="flex items-center gap-2">
                                            <CloudLightning />
                                            SPC Convective Outlook - Day 1
                                        </div>
                                        <Switch />
                                    </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                    <Link href="#" className="flex-row justify-between">
                                        <div className="flex items-center gap-2">
                                            <Tornado />
                                            SPC Tornado Outlook - Day 1
                                        </div>
                                        <Switch />
                                    </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                    <Link href="#" className="flex-row justify-between">
                                        <div className="flex items-center gap-2">
                                            <Wind />
                                            SPC Wind Outlook - Day 1
                                        </div>
                                        <Switch />
                                    </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                    <Link href="#" className="flex-row justify-between">
                                        <div className="flex items-center gap-2">
                                            <CloudHail />
                                            SPC HailOutlook - Day 1
                                        </div>
                                        <Switch />
                                    </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                    <Link href="#" className="flex-row justify-between">
                                        <div className="flex items-center gap-2">
                                            <MessageSquareWarning />
                                            SPC Storm Reports (Expirimental)
                                        </div>
                                        <Switch />
                                    </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                    <Link href="#" className="flex-row justify-between">
                                        <div className="flex items-center gap-2">
                                            <MessageSquareWarning />
                                            SPC Meso Discussions
                                        </div>
                                        <Switch />
                                    </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                    <Link href="#" className="flex-row justify-between">
                                        <div className="flex items-center gap-2">
                                            <Car />
                                            Spotter Network Locations
                                        </div>
                                        <Switch />
                                    </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                    <Link href="#" className="flex-row justify-between">
                                        <div className="flex items-center gap-2">
                                            <CloudRainWind />
                                            NHC Tracks
                                        </div>
                                        <Switch />
                                    </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                    <Link href="#" className="flex-row justify-between">
                                        <div className="flex items-center gap-2">
                                            <LandPlot />
                                            Station Plots
                                        </div>
                                        <Switch />
                                    </Link>
                                    </NavigationMenuLink>
                                </li>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                            <Link href="#">Color Tables</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                            <Link href="/docs">Docs</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <div className="flex gap-2">
            {/* Save Configuration */}
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon">
                        <Save className="h-[1.2rem] w-[1.2rem]" />
                        <span className="sr-only">Save Configuration</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem>Save Current Layout</DropdownMenuItem>
                    <DropdownMenuItem>Load Saved Layout</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            {/* Settings */}
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon">
                        <Cog className="h-[1.2rem] w-[1.2rem]" />
                        <span className="sr-only">Settings</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem>OpenLayersMap Theme</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            {/* Theme Toggle */}
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                    <span className="sr-only">Toggle theme</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            </div>
        </header>
    )
}