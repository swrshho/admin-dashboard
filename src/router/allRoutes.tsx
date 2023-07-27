import { UserRoute } from 'types'

import UserManagement from 'pages/user-management/UserManagement'

export const userRoutes: UserRoute[] = [
	{ path: '/user-management', element: <UserManagement /> },
]
