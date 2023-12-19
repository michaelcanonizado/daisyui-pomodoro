/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			screens: {
				lg: '900px',
				xl: '960px',
				'2xl': '1280px',
			},
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['retro'],
	},
};
