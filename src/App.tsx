import { Routes, Route, Navigate } from 'react-router-dom'
import { userRoutes } from 'router/allRoutes'

import Layout from 'components/layout/Layout'

function App() {
	return (
		<div className='w-full h-screen font-quicksand bg-zinc-900'>
			<Layout>
				<Routes>
					<Route path='/' element={<Navigate to={'/users'} replace />} />
					{userRoutes.map((route, idx) => (
						<Route key={idx} path={route.path} element={route.element} />
					))}
				</Routes>
			</Layout>
		</div>
	)
}

export default App
