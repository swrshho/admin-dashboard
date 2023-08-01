import { useState } from 'react'
import { Listbox } from '@headlessui/react'
import TuneIcon from '@mui/icons-material/Tune'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const SearchTermSelector = () => {
	const searchTerms = [
		{ id: 1, name: 'Friend ID' },
		{ id: 2, name: 'Email' },
		{ id: 3, name: 'Phone Number' },
		{ id: 4, name: 'Name' },
	]

	const [searchTerm, setSearchTerm] = useState(searchTerms[0])

	return (
		<div className='text-white w-fit p-2 relative '>
			<Listbox value={searchTerm} onChange={setSearchTerm}>
				<div className='flex flex-nowrap gap-2 justify-between items-center'>
					<TuneIcon />
					<Listbox.Button>
						{searchTerm.name}
						<ExpandMoreIcon />
					</Listbox.Button>
				</div>
				<div className='absolute right-0 w-full'>
					<Listbox.Options className='p-2 bg-zinc-800 rounded-md'>
						{searchTerms.map((term) => (
							<Listbox.Option
								key={term.id}
								value={term}
								className='cursor-pointer p-1 transition-all rounded-sm hover:bg-zinc-700'>
								{term.name}
							</Listbox.Option>
						))}
					</Listbox.Options>
				</div>
			</Listbox>
		</div>
	)
}

export default SearchTermSelector
