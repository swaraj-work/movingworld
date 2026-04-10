/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '1366': '1366px',
        '1440': '1440px',
        '1920': '1920px',
      },
      colors: {
        primary: "#A4306D",   // Moving World burgundy
        highlight: "#FFB800", // Moving World golden yellow
        accent: "#FFCA28",    // Lighter gold
        plum: "#7E1B4B",      // Deeper burgundy
        body: "#0F172A",      // Dark slate for text
        muted: "#475569",     // Muted slate
        surface: "#FFFFFF",
        "surface-2": "#F8FAFC",
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
      },
      boxShadow: {
        subtle: "0 10px 30px rgba(164, 48, 109, 0.08)",
        soft: "0 4px 6px -1px rgb(0 0 0 / 0.05)",
        premium: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
        '10xl': '112rem',
      },
    },
  },
  plugins: [],
};
