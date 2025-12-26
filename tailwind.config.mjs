/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}", "*.{js,ts,jsx,tsx,mdx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'ntc-primary': '#057ac0',
        'ntc-dark': '#094671', 
        'ntc-accent': '#24a644',
        'ntc-light': '#f0f4f8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(5, 122, 192, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(5, 122, 192, 0.6)' },
        },
      },
      dropShadow: {
        'text': '0 2px 4px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}
