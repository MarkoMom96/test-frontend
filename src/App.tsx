import { useEffect, useState } from 'react'
import './App.css'
import ArticlePages from './components/Articles/ArticlePages'
import Navigation from './components/Navigation/Navigation'

function App() {
	return (
		<div className='flex flex-col min-h-screen'>
			<div className='lg:w-[1080px] mx-auto'>
				<header className='px-5 pt-5 lg:px-0 lg:pt-8 w-screen lg:w-full'>
					<Navigation />
				</header>
				<main>
					<ArticlePages />
				</main>
			</div>
			<footer className='bg-slate-200 p-7 text-center dark:bg-gray-800 dark:text-white mt-auto w-screen'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, ducimus
				repellendus. Sit numquam repudiandae, eum porro qui repellat commodi
				ipsam earum incidunt sequi itaque est quibusdam odit culpa magni animi.
			</footer>
		</div>
	)
}

export default App
