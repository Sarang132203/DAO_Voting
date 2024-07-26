import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // Custom utilities for 3D transforms and perspective
      perspective: {
        '3d': '1000px',
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      rotate: {
        '3d': 'rotateX(15deg) rotateY(15deg)',
      },
    },
  },
  plugins: [
    // Add this plugin to enable perspective and transform style utilities
    function ({ addUtilities }) {
      addUtilities({
        '.perspective': {
          perspective: '1000px',
        },
        '.transform-style': {
          transformStyle: 'preserve-3d',
        },
        '.rotate-3d': {
          transform: 'rotateX(15deg) rotateY(15deg)',
        },
      });
    },
  ],
};

export default config;
