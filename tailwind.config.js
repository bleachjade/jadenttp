/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html"], // Tells Tailwind where your HTML is
    theme: {
        extend: {
            colors: {
                background: '#0a0a0a',
                surface: '#171717',
                surfaceHighlight: '#262626',
                primary: '#3b82f6',
                secondary: '#a855f7',
                textMain: '#ededed',
                textMuted: '#a3a3a3',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            animation: {
                'marquee': 'marquee 25s linear infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                }
            }
        },
    },
    plugins: [],
}