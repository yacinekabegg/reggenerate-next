module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F7F4EB",
        ink: "#1B1F1E",
        "body-ink": "#4D5453",
        muted: "#8A8F8D",
        teal: {
          DEFAULT: "#2EB2A4",
          deep: "#1F8E83",
          dark: "#23867B",
        },
        orange: {
          DEFAULT: "#F19A2A",
          deep: "#D17A0E",
        },
        yellow: {
          DEFAULT: "#F2C94C",
        },
        gold: "#E1C23C",
        line: "#E8E2D2",
      },
      fontFamily: {
        display: ["var(--font-display)", "Trebuchet MS", "Segoe UI", "sans-serif"],
        body: ["var(--font-body)", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        pill: "999px",
      },
      boxShadow: {
        card: "0 2px 8px rgba(40, 30, 10, .06)",
        raise: "0 8px 24px rgba(40, 30, 10, .10)",
      },
      maxWidth: {
        page: "1200px",
        lede: "42em",
      },
      backgroundImage: {
        highlighter:
          "linear-gradient(transparent 56%, #F2C94C 56%, #F2C94C 92%, transparent 92%)",
      },
      transitionTimingFunction: {
        egg: "cubic-bezier(.22,.61,.36,1)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
