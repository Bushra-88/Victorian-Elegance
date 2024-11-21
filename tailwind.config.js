/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // include your source paths
  ],
  theme: {
    extend: {
      colors: {
        pastelPink: "#FFD1DC", // Example pastel pink
        pastelBlue: "#A7C6ED", // Example pastel blue
        pastelGreen: "#B2E2B1", // Example pastel green
        pastelYellow: "#FDFD96", // Example pastel yellow
        pastelPurple: "#D6C5E9", // Example pastel purple
      },
    },
  },
  plugins: [],
};
