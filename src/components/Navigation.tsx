import React from 'react'
import HamburgerMenu from './HamburgerMenu'
import ListItem from './ListItem'

import ThemeChanger from './ThemeChanger'

const Navigation = () => {
	const mainMenuItems = [
		{ name: 'MenuLink1', id: '1', href: '/' },
		{ name: 'MenuLink2', id: '2', href: '/' },
		{ name: 'MenuLink3', id: '3', href: '/' },
		{ name: 'MenuLink4', id: '4', href: '/' },
		{ name: 'MenuLink5', id: '5', href: '/' },
		{ name: 'MenuLink6', id: '6', href: '/' },
		{ name: 'MenuLink7', id: '7', href: '/' },
		{ name: 'MenuLink8', id: '8', href: '/' },
	]

	return (
		<React.Fragment>
			<div className='flex justify-between items-center mb-10'>
				<img src='../../Logo.png' />
				<nav>
					<ul className='text-lg hidden lg:flex justify-end'>
						<ThemeChanger />
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
					<div className='lg:hidden flex flex-row'>
						<ThemeChanger />
						<HamburgerMenu items={mainMenuItems} />
					</div>
				</nav>
			</div>
			<nav>
				<ul className='hidden ml-auto text-xl lg:flex w-fit justify-end items-center border-blue-300 border-2 border-b-0 max-w-full'>
					{mainMenuItems.map(item => (
						<ListItem key={item.id}>
							<a href={item.href}>{item.name}</a>
						</ListItem>
					))}
				</ul>
			</nav>
		</React.Fragment>
	)
}

export default Navigation
