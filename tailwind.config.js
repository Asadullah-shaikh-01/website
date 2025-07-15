/** @type {import('tailwindcss').Config} */
module.exports = {
  // Enables dark mode using a class (e.g., 'class="dark"')
  darkMode: "class",

  // Paths to all template files
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      // Optional: Extend colors, fonts, etc. here
    },
  },

  plugins: [
    // Add any Tailwind plugins here (forms, typography, etc.)
  ],
};
