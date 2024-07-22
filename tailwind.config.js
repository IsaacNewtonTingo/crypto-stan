/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e6eaff",
          100: "#b3c2ff",
          200: "#80a2ff",
          300: "#4d82ff",
          400: "#1a66ff",
          500: "#3366ff" /* This is #3366ff */,
          600: "#2a59e6",
          700: "#1f4db3",
          800: "#163d99",
          900: "#0d2d80",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
