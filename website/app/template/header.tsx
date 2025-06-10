'use client'

import React, { useState, useEffect } from 'react'

import Link from "next/link"

import { CircleCheckIcon, CircleHelpIcon, CircleIcon, Cog, Moon, Sun } from "lucide-react"

import { useTheme } from "next-themes"

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList,
  NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
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
                        <NavigationMenuTrigger>Components</NavigationMenuTrigger>
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
                        <NavigationMenuTrigger>List</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[300px] gap-4">
                                <li>
                                    <NavigationMenuLink asChild>
                                    <Link href="#">
                                        <div className="font-medium">Components</div>
                                        <div className="text-muted-foreground">
                                        Browse all components in the library.
                                        </div>
                                    </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                    <Link href="#">
                                        <div className="font-medium">Documentation</div>
                                        <div className="text-muted-foreground">
                                        Learn how to use the library.
                                        </div>
                                    </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                    <Link href="#">
                                        <div className="font-medium">Blog</div>
                                        <div className="text-muted-foreground">
                                        Read our latest blog posts.
                                        </div>
                                    </Link>
                                    </NavigationMenuLink>
                                </li>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[200px] gap-4">
                                <li>
                                    <NavigationMenuLink asChild>
                                    <Link href="#" className="flex-row items-center gap-2">
                                        <CircleHelpIcon />
                                        Backlog
                                    </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                    <Link href="#" className="flex-row items-center gap-2">
                                        <CircleIcon />
                                        To Do
                                    </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                    <Link href="#" className="flex-row items-center gap-2">
                                        <CircleCheckIcon />
                                        Done
                                    </Link>
                                    </NavigationMenuLink>
                                </li>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                            <Link href="/docs">Docs</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <div className="flex gap-2">
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