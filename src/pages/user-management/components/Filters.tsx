import Selector from 'components/selector/Selector'
import { useState } from 'react'
import { SelectorItemProps } from 'types'

import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined'
import SortIcon from '@mui/icons-material/Sort'
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined'

const Filters = () => {
	const displayOptions: SelectorItemProps[] = [
		{ id: 1, name: 'All Users' },
		{ id: 2, name: 'Active Users' },
		{ id: 3, name: 'Bonded Users' },
	]

	const filterOptions: SelectorItemProps[] = [
		{ id: 1, name: 'None' },
		{ id: 2, name: 'Filter1' },
		{ id: 3, name: 'Filter2' },
	]

	const sortOptions: SelectorItemProps[] = [
		{ id: 1, name: 'Name' },
		{ id: 1, name: 'Date Joined' },
		{ id: 1, name: 'Balance' },
	]

	const [display, setDisplay] = useState(displayOptions[0])
	const [filter, setFilter] = useState(filterOptions[0])
	const [sort, setSort] = useState(sortOptions[0])

	return (
		<div className='text-white flex justify-between items-center w-fit gap-5'>
			<Selector
				state={display}
				setState={setDisplay}
				stateItems={displayOptions}
				icon={<ViewAgendaOutlinedIcon />}
				title='Display:'
				color='secondry'
			/>

			<Selector
				state={filter}
				setState={setFilter}
				stateItems={filterOptions}
				icon={<FilterAltOutlinedIcon />}
				title='Filter:'
				color='secondry'
			/>

			<Selector
				state={sort}
				setState={setSort}
				stateItems={sortOptions}
				icon={<SortIcon />}
				title='Sort By:'
				color='secondry'
			/>
		</div>
	)
}

export default Filters
