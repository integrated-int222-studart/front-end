module.exports = {
  purge: {
    content: ["./public/**/*.html", "./src/**/*.vue"],
  },
  theme: {
    extend: {
      padding: {
        "1/3": "33.3333%",
        "2/3": "66.6667%",
      },
    },
  },
  variants: {
    extend: {},
  },
  daisyui: {
    styled: true,
    themes: false,
    rtl: false,
  },

  plugins: [require("daisyui"), require("@tailwindcss/aspect-ratio")],
  daisyui: {
    themes: [
      {
        mytheme: {
          /* your theme name */
          primary: "#e779c0" /* Primary color */,
          "primary-focus": "#e04dac" /* Primary color - focused */,
          "primary-content":
            "#ffffff" /* Foreground content color to use on primary color */,

          secondary: "#FFE459" /* Secondary color */,
          "secondary-focus": "#ffc74f" /* Secondary color - focused */,
          "secondary-content":
            "#ffffff" /* Foreground content color to use on secondary color */,

          accent: "#f3cc30" /* Accent color */,
          "accent-focus": "#f6d860" /* Accent color - focused */,
          "accent-content":
            "#ffffff" /* Foreground content color to use on accent color */,

          neutral: "#20134e" /* Neutral color */,
          "neutral-focus": "#140a2e" /* Neutral color - focused */,
          "neutral-content":
            "#ffffff" /* Foreground content color to use on neutral color */,

          "base-100":
            "#f9f7fd" /* Base color of page, used for blank backgrounds */,
          "base-200": "#ffd4f4" /* Base color, a little darker */,
          "base-300": "#efd6ff" /* Base color, even more darker */,
          "base-content":
            "#000000" /* Foreground content color to use on base color */,

          info: "#2094f3" /* Info */,
          success: "#a7f3d0" /* Success */,
          warning: "#ff9900" /* Warning */,
          error: "#ff5724" /* Error */,

          "--rounded-box":
            "1rem" /* border-radius for cards and other big elements */,
          "--rounded-btn":
            "0.5rem" /* border-radius for buttons and similar elements */,
          "--rounded-badge":
            "1.9rem" /* border-radius for badge and other small elements */,

          "--animation-btn": "0.25s" /* bounce animation time for button */,
          "--animation-input":
            ".2s" /* bounce animation time for checkbox, toggle, etc */,

          "--padding-card": "2rem" /* default card-body padding */,

          "--btn-text-case": "uppercase" /* default text case for buttons */,
          "--navbar-padding": ".25rem" /* default padding for navbar */,
          "--border-btn": "1px" /* default border size for button */,
          "--focus-ring": "2px" /* focus ring size for button and inputs */,
          "--focus-ring-offset":
            "2px" /* focus ring offset size for button and inputs */,
        },
      },
    ],
  },
};
