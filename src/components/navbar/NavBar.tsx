import { NavLink } from 'react-router-dom'

import { navbarData } from './navbarData'

const NavBar = () => {
	return (
		<div className='h-screen flex justify-center items-center border-solid border-r border-r-neutral-800'>
			<div className='flex'>
				<div className='nav-links__container'>
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
				</div>
			</div>
		</div>
	)
}

export default NavBar
