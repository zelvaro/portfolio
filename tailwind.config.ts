import type { Config } from "tailwindcss";

const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: token("bg"),
        surface: token("surface"),
        ink: token("ink"),
        muted: token("muted"),
        subtle: token("subtle"),
        line: token("line"),
        accent: {
          DEFAULT: token("accent"),
          soft: token("accent-soft"),
          deep: token("accent-deep"),
        },
        pink: token("pink"),
        "on-accent": token("on-accent"),
        signal: token("signal"),
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-body)", "sans-serif"],
      },
      keyframes: {
        blink: { "0%, 49%": { opacity: "1" }, "50%, 100%": { opacity: "0" } },
      },
      animation: {
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};
export default config;
