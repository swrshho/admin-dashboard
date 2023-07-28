import { UserRoute } from 'types'

import UserManagement from 'pages/user-management/UserManagement'

export const userRoutes: UserRoute[] = [
	{ path: '/users', element: <UserManagement /> },
]
