import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'

const SearchBar = () => {
	const [searchQuery, setSearchQuery] = useState('')
	const inputChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
		setSearchQuery(e.currentTarget.value)
	}
	const clearSearch = () => {
		setSearchQuery('')
	}
	return (
		<div className='p-1 w-7/12 flex items-center text-white bg-zinc-700 rounded-xl border border-solid border-zinc-500'>
			<input
				className='p-1 px-2 bg-zinc-700 w-full focus:outline-none'
				type='search'
				placeholder='Type search term'
				onChange={inputChangeHandler}
				value={searchQuery}
			/>
			<CloseIcon
				className='text-zinc-800 cursor-pointer'
				onClick={clearSearch}
			/>
		</div>
	)
}

export default SearchBar
