import Link from "next/link"
import React from "react"

const Navigation = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div>
            {children}
        </div>
    )
}

const NavigationMenuList = ({
    children
}: {
    children: React.ReactNode
}) => {
    return <div className={
        'group flex flex-1'
    }>
        {children}
    </div>
}

const NavigationMenuItem = ({href, children}: {href: string, children: string | React.ReactElement }) => {
    return (
        <Link href={href}>
            {children}
        </Link>
    )
}

Navigation.MenuList = NavigationMenuList
Navigation.MenuItem = NavigationMenuItem

export default Navigation;
