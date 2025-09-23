/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // Standard screen resolution breakpoints
        'xs': '480px',      // Small phones
        'sm': '640px',      // Large phones
        'md': '768px',      // Tablets
        'lg': '1024px',     // Small laptops
        'xl': '1280px',     // Large laptops
        '2xl': '1536px',    // Desktop monitors
        '3xl': '1920px',    // Full HD monitors
        '4xl': '2560px',    // 2K monitors
        // Specific standard resolutions
        '1366': '1366px',   // Common laptop resolution
        '1440': '1440px',   // MacBook Air resolution
        '1536': '1536px',   // Surface Pro resolution
        '1920': '1920px',   // Full HD resolution
      },
      colors: {
        primary: "#1A237E", // Deep blue
        highlight: "#FF6F00", // Vibrant orange
        accent: "#F9A825", // Warm gold
        body: "#212121", // Charcoal gray
        soft: "#F5F5F5", // Soft gray
      },
      fontFamily: {
        heading: ["var(--font-heading)"], // Serif for headings
        body: ["var(--font-body)"], // Sans-serif for body
      },
      boxShadow: {
        subtle: "0 10px 30px rgba(26,35,126,0.08)",
      },
      maxWidth: {
        '8xl': '88rem',     // 1408px - optimal for 1440px screens
        '9xl': '96rem',     // 1536px - optimal for 1536px screens
        '10xl': '112rem',   // 1792px - optimal for 1920px screens
      },
    },
  },
  plugins: [],
};
