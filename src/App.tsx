import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import Navigation from './components/Navigation'

function App() {
	useEffect(() => {
		fetch(
			'https://dknhmgstb7daepfpievifqg7te0vaknw.lambda-url.eu-central-1.on.aws?' +
				new URLSearchParams({
					limit: '20',
					from: '10',
				})
		)
			.then(response => response.json())
			.then(data => console.log(data))
	}, [])
	return (
		<div className='lg:w-[1080px] mx-auto'>
			<header className='px-5 pt-5 lg:px-0 lg:pt-8'>
				<Navigation />
			</header>
			<main>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-0 mx-auto max-w-fit'>
					<Card
						imagePath='../Picture1.png'
						tag='hash-tag'
						title='Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum'
						desc='Gorem ipsum dolor sit amet, consectetur adipiscing elit. Gorem ipsum dolor sit amet, consectetur adipiscing elit.'
						linkHref='/'
					/>
					<Card
						imagePath='../Picture1.png'
						tag='hash-tag'
						title='Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum'
						desc='Gorem ipsum dolor sit amet, consectetur adipiscing elit. Gorem ipsum dolor sit amet, consectetur adipiscing elit.'
						linkHref='/'
					/>
					<Card
						imagePath='../Picture1.png'
						tag='hash-tag'
						title='Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum'
						desc='Gorem ipsum dolor sit amet, consectetur adipiscing elit. Gorem ipsum dolor sit amet, consectetur adipiscing elit.'
						linkHref='/'
					/>
					<Card
						imagePath='../Picture1.png'
						tag='hash-tag'
						title='Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum'
						desc='Gorem ipsum dolor sit amet, consectetur adipiscing elit. Gorem ipsum dolor sit amet, consectetur adipiscing elit.'
						linkHref='/'
					/>
					<Card
						imagePath='../Picture1.png'
						tag='hash-tag'
						title='Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum'
						desc='Gorem ipsum dolor sit amet, consectetur adipiscing elit. Gorem ipsum dolor sit amet, consectetur adipiscing elit.'
						linkHref='/'
					/>
					<Card
						imagePath='../Picture1.png'
						tag='hash-tag'
						title='Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum'
						desc='Gorem ipsum dolor sit amet, consectetur adipiscing elit. Gorem ipsum dolor sit amet, consectetur adipiscing elit.'
						linkHref='/'
					/>
					<Card
						imagePath='../Picture1.png'
						tag='hash-tag'
						title='Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum'
						desc='Gorem ipsum dolor sit amet, consectetur adipiscing elit. Gorem ipsum dolor sit amet, consectetur adipiscing elit.'
						linkHref='/'
					/>
					<Card
						imagePath='../Picture1.png'
						tag='hash-tag'
						title='Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum'
						desc='Gorem ipsum dolor sit amet, consectetur adipiscing elit. Gorem ipsum dolor sit amet, consectetur adipiscing elit.'
						linkHref='/'
					/>
				</div>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-0 mx-auto max-w-fit'>
					<Card
						small
						imagePath='../Picture2small.png'
						tag='hash-tag'
						title='Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum'
						desc='Gorem ipsum dolor sit amet, consectetur adipiscing elit. Gorem ipsum dolor sit amet, consectetur adipiscing elit.'
						linkHref='/'
					/>
					<Card
						small
						imagePath='../Picture2small.png'
						tag='hash-tag'
						title='Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum'
						desc='Gorem ipsum dolor sit amet, consectetur adipiscing elit. Gorem ipsum dolor sit amet, consectetur adipiscing elit.'
						linkHref='/'
					/>
				</div>
			</main>
			<footer className='bg-slate-200 p-7 text-center dark:bg-gray-800 dark:text-white'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, ducimus
				repellendus. Sit numquam repudiandae, eum porro qui repellat commodi
				ipsam earum incidunt sequi itaque est quibusdam odit culpa magni animi.
			</footer>
		</div>
	)
}

export default App
