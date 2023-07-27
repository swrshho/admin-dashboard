import { Routes, Route, Navigate } from 'react-router-dom'
import { userRoutes } from 'router/allRoutes'

function App() {
	return (
		<div className='w-full h-screen p-4 bg-zinc-900'>
			<Routes>
				<Route
					path='/'
					element={<Navigate to={'/user-management'} replace />}
				/>
				{userRoutes.map((route, idx) => (
					<Route key={idx} path={route.path} element={route.element} />
				))}
			</Routes>
		</div>
	)
}

export default App
