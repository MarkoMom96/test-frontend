import { useEffect, useState } from 'react'
import './App.css'
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
		<div className='min-w-fit w-full 2xl:w-2/3 mx-auto'>
			<header className='p-2 lg:pt-10'>
				<Navigation />
			</header>
		</div>
	)
}

export default App
