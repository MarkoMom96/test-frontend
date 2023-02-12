import { ThemeContext } from '../context/ThemeContext'
import { useContext } from 'react'
import { BsFillMoonFill } from 'react-icons/bs'
import { BsFillSunFill } from 'react-icons/bs'

const ThemeChanger: React.FC = () => {
	const theme = useContext(ThemeContext)

	return (
		<button
			className='mr-4 border-2 text-lg border-black rounded px-3 dark:text-white dark:border-white'
			onClick={theme.changeTheme}
		>
			{theme.currentTheme === 'light' ? <BsFillMoonFill /> : <BsFillSunFill />}
		</button>
	)
}

export default ThemeChanger
