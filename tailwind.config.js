/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*{html,js}"],
    theme: {
    extend: {
        animation: {
            fadeIn: "fadeIn 2s ease-in forwards"
        },
        keyframes: {
            fadeIn: {
                "0%": { opacity: 0 },
                "100%": { opacity: 1 }
            }
        }
    },
    },
    plugins: [],
    variants: {
        animation: ["motion-safe"]
    }
    
}

