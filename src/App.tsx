import { useEffect, useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'

function App() {
	const [count, setCount] = useState(0)

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
		<div className='w-2/3 mx-auto'>
			<Navigation />
		</div>
	)
}

export default App
