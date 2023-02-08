import ListItem from './ListItem'

const Navigation = () => {
	const mainMenuItems: string[] = Array(8).fill('lorem ipsum')

	return (
		<header className='mt-7 p-2'>
			<nav className='mb-9'>
				<ul className='text-lg flex justify-end items-center'>
					<ListItem tailwind='mr-auto hover:bg-white'>
						<img src='../../public/Logo.png' alt='LOGO' />
					</ListItem>
					<ListItem>
						<a href='#1'>Lorem ipsum</a>
					</ListItem>
					<ListItem>
						<a href='#2'>Lorem ipsum</a>
					</ListItem>
					<ListItem>
						<a href='#3'>Lorem ipsum</a>
					</ListItem>
					<ListItem>
						<a href='#4'>Lorem ipsum</a>
					</ListItem>
				</ul>
			</nav>
			<nav>
				<ul className=' ml-auto text-sm 2xl:text-xl flex w-fit justify-end items-center border-blue-300 border-2'>
					{mainMenuItems.map(item => (
						<ListItem>
							<a href='#'>Lorem ipsum</a>
						</ListItem>
					))}
				</ul>
			</nav>
		</header>
	)
}

export default Navigation
