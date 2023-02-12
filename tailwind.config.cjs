/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			backgroundImage: {
				bgImage: "url('/Background.png')",
			},
			dropShadow: {
				custom: [
					'1px 1px rgb(96 165 250)',
					'2px 2px rgb(96 165 250)',
					'3px 3px rgb(96 165 250)',
				],
			},
			keyframes: {
				load: {
					'0%': { transform: 'scale(0)' },
					'100%': { transform: 'scale(1)' },
				},
			},
			animation: {
				load: 'load 250ms ease-out',
			},
		},
		plugins: [],
	},
}
