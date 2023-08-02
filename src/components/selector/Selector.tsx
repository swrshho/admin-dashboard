import { SelectorProps } from 'types'
import { Listbox } from '@headlessui/react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const Selector = ({
	state,
	setState,
	stateItems,
	icon,
	title,
	color,
}: SelectorProps) => {
	return (
		<div className='p-2 w-fit relative'>
			<Listbox value={state} onChange={setState}>
				<div
					className={`flex flex-nowrap gap-2 justify-between items-center ${
						color === 'secondry' ? 'text-zinc-600' : 'text-white'
					}`}>
					{icon && icon}
					{title && title}
					<Listbox.Button>
						<div className={`text-white`}>
							{state.name}
							<ExpandMoreIcon />
						</div>
					</Listbox.Button>
				</div>
				<div className='absolute right-0 w-full'>
					<Listbox.Options className='p-2 bg-zinc-800 rounded-md'>
						{stateItems.map((item) => (
							<Listbox.Option
								key={item.id}
								value={item}
								className='cursor-pointer p-1 transition-all rounded-sm hover:bg-zinc-700'>
								{item.name}
							</Listbox.Option>
						))}
					</Listbox.Options>
				</div>
			</Listbox>
		</div>
	)
}

export default Selector
