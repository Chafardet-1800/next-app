import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './shared/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary-orange': '#FF5722',
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#7e22ce",
                    
          "secondary": "#22c55e",
                    
          "accent": "#fcd34d",
                    
          "neutral": "#374151",
                    
          "base-100": "#1f2937",
                    
          "info": "#4338ca",
                    
          "success": "#22c55e",
                    
          "warning": "#fcd34d",
                    
          "error": "#f43f5e",
        },
      },
    ],
  },
  plugins: [
    require('daisyui')
  ],
}
export default config
