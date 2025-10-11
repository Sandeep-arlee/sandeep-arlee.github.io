/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        panther: {
          black: "#000000",
          dark: "#0f0f0f",
          purple: "#540c3e",
          cyan: "#00ffff",
          gray: "#e0e0e0",
        },
      },

      fontFamily: {
        // Set Wakanda as the primary sans font family
        sans: ["Wakanda", "sans-serif"],
        wakanda: ["Wakanda", "sans-serif"],
      },

      lineHeight: {
        // Custom line-heights to prevent text clipping
        snugger: "1.18",
        loosehero: "1.25",
      },

      padding: {
        // Slight top padding utility to lift clipped text
        headingfix: "0.12em",
      },
    },
  },
  plugins: [],
};
