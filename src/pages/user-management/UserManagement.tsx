import UserStats from './components/UserStats'
import SearchPanel from './components/SearchPanel'
import Filters from './components/Filters'

const UserManagement = () => {
	return (
		<div className='p-6'>
			<h1 className='text-white font-black text-lg'>Users Management</h1>
			<UserStats />
			<SearchPanel />
			<Filters />
		</div>
	)
}

export default UserManagement
