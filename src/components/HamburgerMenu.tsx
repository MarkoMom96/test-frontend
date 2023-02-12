import { useState } from 'react'
import { GiCancel, GiHamburgerMenu } from 'react-icons/gi'
import ListItem from './ListItem'

interface HamburgerMenuProps {
	items: {
		id: string
		name: string
		href: string
	}[]
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = props => {
	const [showMenu, setShowMenu] = useState(false)
	const showMenuClickHandler = () => {
		setShowMenu(last => !last)
	}

	return (
		<div className='relative'>
			<button
				className=' text-lg font-bold dark:text-white'
				onClick={showMenuClickHandler}
			>
				{showMenu ? (
					<GiCancel className='text-3xl' />
				) : (
					<GiHamburgerMenu className='text-3xl dark:text-white' />
				)}
			</button>
			{showMenu ? (
				<ul
					className='lg:hidden absolute flex flex-col items-end right-2 top-16 p-3 w-fit rounded
           bg-slate-200 dark:bg-slate-700 dark:text-white border-2 border-blue-400 animate-load origin-top'
				>
					{props.items.map(item => (
						<ListItem key={item.id}>
							<a href={item.href}>{item.name}</a>
						</ListItem>
					))}
				</ul>
			) : null}
		</div>
	)
}

export default HamburgerMenu
