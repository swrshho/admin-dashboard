import SearchTermSelector from './SearchTermSelector'
import SearchBar from './SearchBar'
import Button from 'components/button/Button'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'

const SearchPanel = () => {
	return (
		<div className='border flex gap-1 justify-between max-w-3xl items-center bg-neutral-900 border-solid border-neutral-800 rounded-xl p-2'>
			<SearchTermSelector />
			<SearchBar />
			<Button>
				<>
					Search
					<ArrowRightAltIcon />
				</>
			</Button>
		</div>
	)
}

export default SearchPanel
