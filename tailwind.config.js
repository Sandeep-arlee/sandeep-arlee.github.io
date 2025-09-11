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
        // Make Wakanda the default sans font
        sans: ['Wakanda', 'sans-serif'],
        wakanda: ['Wakanda', 'sans-serif'],
        sans: ['wakanda', 'sans-serif'],  
        wakanda: ['wakanda', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
