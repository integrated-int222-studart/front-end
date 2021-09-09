module.exports = {
  purge: {
    content: ["./public/**/*.html", "./src/**/*.vue"]
  },
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  daisyui: {
    styled: true,
    themes: false,
    rtl: false,
  },

  plugins: [require("daisyui")],
  daisyui: {
    themes: [{
      mytheme: {
        /* your theme name */
        primary: "#e779c0" /* Primary color */ ,
        "primary-focus": "#e04dac" /* Primary color - focused */ ,
        "primary-content": "#ffffff" /* Foreground content color to use on primary color */ ,

        secondary: "#58c7f3" /* Secondary color */ ,
        "secondary-focus": "#88d8f7" /* Secondary color - focused */ ,
        "secondary-content": "#ffffff" /* Foreground content color to use on secondary color */ ,

        accent: "#f3cc30" /* Accent color */ ,
        "accent-focus": "#f6d860" /* Accent color - focused */ ,
        "accent-content": "#ffffff" /* Foreground content color to use on accent color */ ,

        neutral: "#20134e" /* Neutral color */ ,
        "neutral-focus": "#140a2e" /* Neutral color - focused */ ,
        "neutral-content": "#ffffff" /* Foreground content color to use on neutral color */ ,

        "base-100": "#f9f7fd" /* Base color of page, used for blank backgrounds */ ,
        "base-200": "#F6C6EA" /* Base color, a little darker */ ,
        "base-300": "#C490E4" /* Base color, even more darker */ ,
        "base-content": "#000000" /* Foreground content color to use on base color */ ,

        info: "#2094f3" /* Info */ ,
        success: "#009485" /* Success */ ,
        warning: "#ff9900" /* Warning */ ,
        error: "#ff5724" /* Error */ ,

        "--rounded-box": "1rem" /* border-radius for cards and other big elements */ ,
        "--rounded-btn": "0.5rem" /* border-radius for buttons and similar elements */ ,
        "--rounded-badge": "1.9rem" /* border-radius for badge and other small elements */ ,

        "--animation-btn": "0.25s" /* bounce animation time for button */ ,
        "--animation-input": ".2s" /* bounce animation time for checkbox, toggle, etc */ ,

        "--padding-card": "2rem" /* default card-body padding */ ,

        "--btn-text-case": "uppercase" /* default text case for buttons */ ,
        "--navbar-padding": ".25rem" /* default padding for navbar */ ,
        "--border-btn": "1px" /* default border size for button */ ,
        "--focus-ring": "2px" /* focus ring size for button and inputs */ ,
        "--focus-ring-offset": "2px" /* focus ring offset size for button and inputs */ ,
      }
    }, ],
  }
};