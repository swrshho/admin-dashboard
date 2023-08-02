import { Dispatch, SetStateAction } from 'react'

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

export interface HamburgerBtnProps {
	onClick: () => void
}

export interface ButtonProps {
	children: JSX.Element
}

export interface SelectorItemProps {
	name: string
	id: number
}

export interface SelectorProps {
	state: SelectorItemProps
	setState: Dispatch<SetStateAction<SelectorItemProps>>
	stateItems: SelectorItemProps[]
	icon?: JSX.Element
	title?: string
	color?: 'primary' | 'secondry'
}
