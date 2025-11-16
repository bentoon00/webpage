
// tailwind.config.cjs

module.exports = {
    // Tells Tailwind where to scan for utility classes
    content: [
        './src/**/*.{astro,html,js,jsx,ts,tsx,md}',
    ],
    
    theme: {
        extend: {

            fontFamily: {
                sans: ['IBM Plex Sans', 'sans-serif'],
                mono: ['IBM Plex Mono', 'monospace'],
            },
            colors: {
                'xp-gray': 'var(--colour-xp-gray)',
                'xp-blue': 'var(--colour-xp-blue)',
            },
        },
    },

    plugins: [],
}