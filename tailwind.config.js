/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
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
    },
  },
  plugins: [],
};
