/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
      fontFamily: {
        lora: ["Lora", "sans-serif"],
        body: "Noto Sans Osage",
      },
    },
    extend: {
      colors: {
        black: "#000000",
        dark: "#1D2027",
        "dark-secondary": "#022b6d",
        "dark-optional": "#3e00a7",
        white: "#ffffff",
        primary: "#DF0A0A",
        secondary: "#0b57e3",
        optional: "#57B33E",
        heading: "#0e0e0e",
        paragraph: "#666666",
        bgGray: "#F7F7F7",
      },
      boxShadow: {
        primary: "-1px 3px 10px 0 rgba(0, 0, 0, 0.6)",
        secondary: "0 10px 30px 0 rgba(44, 130, 237, 0.4)",
        regular: "0px 2px 12px 0px #e7e7e7",
      },
      backgroundImage: {
        gradient:
          "linear-gradient(90deg, var(--color-secondary) 0%, var(--color-primary) 100%)",
        "gradient-secondary":
          "linear-gradient(90deg, var(--color-secondary) 40%, var(--dark-secondary) 100%)",
        "gradient-reverse":
          "linear-gradient(90deg, var(--color-primary) 0%, var(--color-secondary) 100%)",
        "gradient-bg": "linear-gradient(90deg, #DF0A0A 0%, #930707 100%)",
        "gradient-optional":
          "linear-gradient(90deg, #57B33E 50%, #b59f11 100%)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "spin-slow": "spin 5s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
