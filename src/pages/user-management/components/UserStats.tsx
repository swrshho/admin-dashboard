const UserStats = () => {
	return (
		<div className='flex flex-wrap gap-4 py-6'>
			<div className='users-stat__container'>
				<span className='users-stat__title'>Total number of users:</span>
				<span className='users-stat__number'>183, 629</span>
			</div>
			<div className='users-stat__container'>
				<span className='users-stat__title'>Online users:</span>
				<span className='bg-green-500 h-2 w-2 rounded-full'></span>
				<span className='users-stat__number'>47, 021</span>
			</div>
			<div className='users-stat__container'>
				<span className='users-stat__title'>Active users:</span>
				<span className='users-stat__number'>183, 590</span>
			</div>
			<div className='users-stat__container'>
				<span className='users-stat__title'>Bonded users:</span>
				<span className='users-stat__number'>39</span>
			</div>
		</div>
	)
}

export default UserStats
