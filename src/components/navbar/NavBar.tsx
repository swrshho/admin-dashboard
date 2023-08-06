import { navbarData } from './navbarData'
import { useState, useEffect } from 'react'

import { NavLink } from 'react-router-dom'
import HamburgerBtn from 'components/hamburger-btn/HamburgerBtn'

const NavBar = () => {
	const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
	const clickHandler = () => {
		setSidebarIsOpen(!sidebarIsOpen)
	}

	useEffect(() => {
		sidebarIsOpen
			? (document.body.style.overflow = 'hidden')
			: (document.body.style.overflow = 'unset')
	}, [sidebarIsOpen])
	return (
		<div className='sticky top-0 bottom-0 z-10'>
			<div className='fixed left-6 top-7 md:hidden z-20'>
				<HamburgerBtn onClick={clickHandler} />
			</div>
			<div
				className={`h-screen z-10 border-solid border-r bg-zinc-900 border-r-neutral-800 flex justify-center items-center fixed top-0 bottom-0 md:static transition-all ${
					sidebarIsOpen ? 'left-0' : '-left-60'
				}`}>
				<div className='px-2'>
					<nav className='nav-links__container'>
						{navbarData.map((group) => (
							<>
								<span className='nav-links__heading'>{group.groupName}</span>
								{group.links.map((link) => (
									<span className='nav-link__container'>
										<NavLink
											to={link.path}
											className={({ isActive }) =>
												isActive ? 'flex gap-2 text-red-700' : 'flex gap-2'
											}>
											{link.icon && link.icon}
											{link.name}
										</NavLink>
									</span>
								))}
							</>
						))}
					</nav>
				</div>
			</div>
		</div>
	)
}

export default NavBar
