import { HamburgerBtnProps } from 'types'
import { useState } from 'react'

const HamburgerBtn = ({ onClick }: HamburgerBtnProps) => {
	const [isOpen, setIsOpen] = useState(false)
	const clickHandler = () => {
		onClick()
		setIsOpen(!isOpen)
	}
	return (
		<div
			className='w-8 h-6 flex flex-col justify-between items-center gap-1 relative cursor-pointer'
			onClick={clickHandler}>
			<span
				className={`absolute top-0 bg-white rounded h-1 w-full transition-all ${
					isOpen ? 'rotate-45 top-1/2' : ''
				}`}></span>
			<span
				className={`absolute top-[10px] bg-white rounded h-1 w-full transition-all ${
					isOpen ? 'opacity-0' : 'opacity-100'
				}`}></span>
			<span
				className={`absolute bottom-0 bg-white rounded h-1 w-full transition-all ${
					isOpen ? '-rotate-45 top-1/2' : ''
				}`}></span>
		</div>
	)
}

export default HamburgerBtn
