import { LayoutProps } from 'types'

import NavBar from 'components/navbar/NavBar'
const Layout = ({ children }: LayoutProps) => {
	return (
		<div className='flex justify-between'>
			<div className='w-1/5'>
				<NavBar />
			</div>
			<div className='w-full'>{children}</div>
		</div>
	)
}

export default Layout
