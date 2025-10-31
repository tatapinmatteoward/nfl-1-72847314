/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F59E0B',
        accent: '#10B981',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
