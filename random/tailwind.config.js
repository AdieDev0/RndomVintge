/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Sedgwick: ["'Sedgwick Ave'", "sans-serif"],
        Ubuntu: ["Ubuntu"],
        Poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
}
