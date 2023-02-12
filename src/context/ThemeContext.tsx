import { createContext, createFactory, useState } from 'react'

interface ThemeContextType {
	currentTheme: 'light' | 'dark'
	changeTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType>({
	currentTheme: 'light',
	changeTheme: () => {},
})

const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = props => {
	const [theme, setTheme] = useState<'light' | 'dark'>('light')
	const themeChangeHandler = () => {
		if (theme === 'light') {
			setTheme('dark')
			document.documentElement.classList.add('dark')
		} else {
			setTheme('light')
			document.documentElement.classList.remove('dark')
		}
	}
	const contextValue: ThemeContextType = {
		currentTheme: theme,
		changeTheme: themeChangeHandler,
	}

	return (
		<ThemeContext.Provider value={contextValue}>
			{props.children}
		</ThemeContext.Provider>
	)
}
export default ThemeContextProvider
