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
      colors: {
        brand: "#8e2de2", // example premium purple brand color
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
      },
      boxShadow: {
        glow: "0 0 20px rgba(147, 51, 234, 0.5)",
      },
      blur: {
        xs: "2px",
      },
    },
  },

  plugins: [
    // You can add official plugins like forms/typography here
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
};
