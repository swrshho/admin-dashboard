import { useState } from 'react'
import TuneIcon from '@mui/icons-material/Tune'
import Selector from 'components/selector/Selector'
import { SelectorItemProps } from 'types'

const SearchTermSelector = () => {
	const searchTerms: SelectorItemProps[] = [
		{ id: 1, name: 'Friend ID' },
		{ id: 2, name: 'Email' },
		{ id: 3, name: 'Phone Number' },
		{ id: 4, name: 'Name' },
	]

	const [searchTerm, setSearchTerm] = useState(searchTerms[0])

	return (
		<div className='text-white'>
			<Selector
				state={searchTerm}
				setState={setSearchTerm}
				stateItems={searchTerms}
				icon={<TuneIcon />}
			/>
		</div>
	)
}

export default SearchTermSelector
