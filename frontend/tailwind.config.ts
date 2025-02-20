import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-inter), sans-serif",
      },
      colors: {
        brandDark: "#000000CC",
        brandRed: "#EC4899",
        brandPurple: "#8B5CF6",
        brandBorder: "#1F2937",
        brandBorder1: "#E5E7EB",
        brandWhite: "#D1D5DB",
        brandBtnBorder: "#374151",
        brandBtnBgDark: "#1F293780",
        brandLabelText: "#9CA3AF",
        brandDarkWhite: "#ADAEBC",
        brandFormBg: "#11182780",
        brandGreenLight: "#10B98133",
        brandBorderGreen: "#10B981",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      width: {
        "576px": "576px",
        "510px": "510px",
        "48.02px": "48.02px",
        "181.88px": "181.88px",
      },
      height: {
        "58px": "58px",
        "50px": "50px",
      },
      borderWidth: {
        "1": "1px",
      },
      lineHeight: {
        "29.05": "29.05px",
        "16.94": "16.94px",
        "14": "14px",
        "14.52px": "14.52px",
        "19.36": "19.36px",
      },
      animation: {
        "scale-in-center":
          "scale-in-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
      },
    },
  },
  plugins: [],
} satisfies Config;
