import UserStats from './components/UserStats'
import SearchPanel from './components/SearchPanel'
import Filters from './components/Filters'
import Table from './components/Table'

const UserManagement = () => {
	return (
		<div className='p-6 flex flex-col gap-3 mt-12'>
			<h1 className='text-white font-black text-lg'>Users Management</h1>
			<UserStats />
			<SearchPanel />
			<Filters />
			<Table />
		</div>
	)
}

export default UserManagement
