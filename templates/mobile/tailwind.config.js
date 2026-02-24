// tailwind.config.js
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0f172a",
        surface: "#1e293b",
        primary: {
          DEFAULT: "#2563eb",
          hover: "#1d4ed8",
        },
        secondary: "#64748b",
        accent: "#38bdf8",
        success: "#22c55e",
        danger: "#ef4444",
        border: "#334155",
      },
    },
  },
  plugins: [],
};
