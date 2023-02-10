import React, { useState } from 'react'
import ListItem from './ListItem'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GiCancel } from 'react-icons/gi'

const Navigation = () => {
	const mainMenuItems = [
		{ name: 'MenuLink1', id: 1, link: '/' },
		{ name: 'MenuLink2', id: 2, link: '/' },
		{ name: 'MenuLink3', id: 3, link: '/' },
		{ name: 'MenuLink4', id: 4, link: '/' },
		{ name: 'MenuLink5', id: 5, link: '/' },
		{ name: 'MenuLink6', id: 6, link: '/' },
		{ name: 'MenuLink7', id: 7, link: '/' },
		{ name: 'MenuLink8', id: 8, link: '/' },
	]

	const [showMenu, setShowMenu] = useState(false)
	const showMenuClickHandler = () => {
		setShowMenu(last => !last)
	}

	return (
		<React.Fragment>
			<div className='flex justify-between items-center mb-10'>
				<img src='../../Logo.png' />
				<nav className=''>
					<ul className='text-lg hidden lg:flex justify-end'>
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
					<button
						className='lg:hidden text-lg font-bold'
						onClick={showMenuClickHandler}
					>
						{showMenu ? (
							<GiCancel className='text-3xl' />
						) : (
							<GiHamburgerMenu className='text-3xl' />
						)}
					</button>
					{showMenu ? (
						<ul
							className='lg:hidden absolute flex flex-col items-end right-2 top-15 p-3 w-fit rounded
							 bg-slate-200 border-2 border-blue-400 animate-load origin-top'
						>
							{mainMenuItems.map(item => (
								<ListItem key={item.id}>
									<a href={item.link}>{item.name}</a>
								</ListItem>
							))}
						</ul>
					) : null}
				</nav>
			</div>
			<nav>
				<ul className='hidden ml-auto text-xl lg:flex w-fit justify-end items-center border-blue-300 border-2 border-b-0 max-w-full'>
					{mainMenuItems.map(item => (
						<ListItem key={item.id}>
							<a href={item.link}>{item.name}</a>
						</ListItem>
					))}
				</ul>
			</nav>
		</React.Fragment>
	)
}

export default Navigation
