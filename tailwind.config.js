/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                // Asegúrate de que el nombre coincida con tu archivo en public
                'tropical-hero': "url('/bg.jpg')",
            }
        },
    },
    plugins: [],
}