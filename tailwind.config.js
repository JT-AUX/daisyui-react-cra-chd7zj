module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        savvy: {
          primary: '#FFB155',

          secondary: '#4E2745',

          'secondary-content': '#D0BFCC',

          accent: '#4DE7C1',

          neutral: '#22111E',

          'base-100': '#44223C',
          'base-200': '#331A2D',
          'base-300': '#22111E',
          'base-content': '#D0BFCC',

          info: '#4DE2EA',

          success: '#6D3660',

          warning: '#FFA06A',

          error: '#FF8179',
          cream: '#FEF7EA',
        },
      },
    ],
  },
  theme: {
    extend: {
      dropShadow: {
        xl: '0 15px 15px rgba(0, 0, 0, 0.15)',
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.75)',
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.75)',
          '0 45px 65px rgba(0, 0, 0, 0.75)',
        ],
      },
      colors: {
        cream: '#FEF7EA',
      },
    },
  },
};
