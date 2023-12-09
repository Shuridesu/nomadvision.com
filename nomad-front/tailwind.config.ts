import type { Config } from 'tailwindcss'




const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      boxShadow: {
        'custom-blue': '0 4px 14px 0 rgba(0, 120, 220, 0.5)',
        'stronger-blue': '0 0 20px 6px rgba(0, 120, 220, 0.8)',
      },
    },
  },
  
  

  plugins: [
    require('daisyui'),
  ],
  
}


export default config
