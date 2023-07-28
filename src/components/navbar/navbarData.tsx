import { NavLinkGroup } from 'types'

// icons
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined'
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined'
import RequestQuoteOutlinedIcon from '@mui/icons-material/RequestQuoteOutlined'
import GavelIcon from '@mui/icons-material/Gavel'
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined'

export const navbarData: NavLinkGroup[] = [
	{
		groupName: 'Super Admin Pannel',
		links: [
			{
				name: 'Dashboard',
				path: '/dashboard',
				icon: <DashboardOutlinedIcon className='nav-link__icon' />,
			},

			{
				name: 'Users',
				path: '/users',
				icon: <GroupsOutlinedIcon />,
			},

			{
				name: 'Payments & Cashouts',
				path: '/payments',
				icon: <RequestQuoteOutlinedIcon />,
			},

			{
				name: 'Judgments and Monitoring',
				path: '/judgments',
				icon: <GavelIcon />,
			},

			{
				name: 'Online Support',
				path: '/support',
				icon: <ForumOutlinedIcon />,
			},
		],
	},

	{
		groupName: 'Others',
		links: [
			{
				name: 'Website Settings',
				path: '/settings',
				icon: <SettingsOutlinedIcon />,
			},

			{
				name: 'Admins Management',
				path: '/admins-management',
				icon: <PeopleAltOutlinedIcon />,
			},
		],
	},

	{
		groupName: 'My Account',
		links: [
			{ name: 'Account Settings', path: '/account-settings' },
			{ name: 'Log out', path: '/logout' },
		],
	},
]
