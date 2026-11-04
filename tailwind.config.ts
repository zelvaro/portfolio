import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          base: "#0A0A0B",
          surface: "#111113",
          "surface-2": "#18181B",
        },
        border: {
          hairline: "#26262B",
          hover: "#3F3F46",
        },
        text: {
          primary: "#F5F5F7",
          secondary: "#A1A1AA",
          muted: "#6B6B72",
        },
        accent: {
          primary: "#6C5CE7",
          secondary: "#22D3EE",
          success: "#34D399",
          warning: "#FBBF24",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-geist)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "accent-gradient": "linear-gradient(135deg, #6C5CE7 0%, #22D3EE 100%)",
        "radial-glow": "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(108, 92, 231, 0.12), transparent 40%)",
      },
      animation: {
        "pulse-subtle": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "mesh-spin": "meshSpin 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        meshSpin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
