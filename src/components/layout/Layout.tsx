import { LayoutProps } from 'types'

import NavBar from 'components/navbar/NavBar'
const Layout = ({ children }: LayoutProps) => {
	return (
		<div className='flex'>
			<div className='w-1/5'>
				<NavBar />
			</div>
			<div className='w-4/6'>{children}</div>
		</div>
	)
}

export default Layout
