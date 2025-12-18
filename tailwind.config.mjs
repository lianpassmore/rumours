/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'rumours-sage': '#bbc2ac',       // New Main
				'rumours-highlight': '#fdedd5',  // New Second (Apricot)
				'rumours-cream': '#fefbf1',      // New Background
				'rumours-dark': '#2D3032',       // Charcoal (Keep for Text)
				'rumours-rust': '#C87946',       // Rust (Keep for Buttons/Links)
			},
			fontFamily: {
				serif: ['"Italiana"', 'serif'],
				sans: ['"Inter"', 'sans-serif'],
			},
		},
	},
	plugins: [],
}