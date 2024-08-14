/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary-white': '#ebebeb',
				'primary-dark': '#141414',
				'secondary-purple': '#9882AC',
				'secondary-pink': '#B95772',
				'secondary-red': '#CA4255',
				'secondary-green': '#09BC8A',
			},
		},
	},
	plugins: [require('daisyui')],
};
