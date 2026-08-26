/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          deep: '#234D3C',
          DEFAULT: '#315F46',
        },
        sage: '#7A9B78',
        cream: '#F5EFE2',
        'warm-cream': '#FFF9ED',
        beige: '#DCCDB8',
        gold: '#C6A15B',
        'brown-dark': '#3B3025',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        '3d-sm': '0 2px 4px rgba(59,48,37,0.06), 0 8px 16px rgba(59,48,37,0.08)',
        '3d-md': '0 4px 8px rgba(59,48,37,0.08), 0 12px 28px rgba(59,48,37,0.12)',
        '3d-lg': '0 8px 16px rgba(59,48,37,0.1), 0 24px 48px rgba(59,48,37,0.14)',
        '3d-hover': '0 12px 24px rgba(59,48,37,0.12), 0 32px 64px rgba(59,48,37,0.16)',
        'gold-glow': '0 4px 20px rgba(198,161,91,0.25)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 2s infinite',
        'fade-up': 'fadeUp 0.7s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(3deg)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
