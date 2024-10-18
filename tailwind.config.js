/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-100": "#4691F2",
        "secondary-100": "#1A1313",
        "gray-100": "#333333",
        "gray-200": "#5B5B5B",
        "gray-300": "#828282",
        "gray-400": "#C4C4C4",
        "gray-500": "#E0E0E0",
      },
      },
      fontFamily: {
        SpaceGrotesk: ["Space Grotesk", "sans-serif"],
        Mulish: [ "Mulish", "sans-serif"],
        Grypen: [ "Qwitcher Grypen", "cursive"],
      },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
}

