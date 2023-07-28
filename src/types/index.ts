export interface UserRoute {
	path: string
	element: JSX.Element
}

export interface LayoutProps {
	children: JSX.Element
}

interface NavLink {
	name: string
	path: string
	icon?: JSX.Element
}

export interface NavLinkGroup {
	groupName: string
	links: NavLink[]
}
