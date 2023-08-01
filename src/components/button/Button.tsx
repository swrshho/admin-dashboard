import { ButtonProps } from 'types'

const Button = ({ children }: ButtonProps) => {
	return (
		<button className='bg-purple-800 text-white font-semibold text-sm p-3 rounded-xl'>
			{children}
		</button>
	)
}

export default Button
