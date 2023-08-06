import SearchTermSelector from './SearchTermSelector'
import SearchBar from './SearchBar'
import Button from 'components/button/Button'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'

const SearchPanel = () => {
	return (
		<div className='flex flex-wrap gap-1 justify-center lg:justify-between max-w-3xl items-center p-2 container-dark-bordered'>
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
