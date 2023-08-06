import { LayoutProps } from 'types'

import NavBar from 'components/navbar/NavBar'
const Layout = ({ children }: LayoutProps) => {
	return (
		<div className='flex justify-between'>
			<div className='md:w-1/5 relative'>
				<NavBar />
			</div>
			<div className='w-full md:w-4/5'>{children}</div>
		</div>
	)
}

export default Layout
