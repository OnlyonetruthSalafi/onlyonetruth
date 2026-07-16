/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // ===== BRAND / PRIMARY =====
        gold: {
          DEFAULT: '#C5A059',  // antique gold (primary accent)
          light: '#D4AF37',    // warm gold (hover)
          dark: '#B8860B',     // bronze (active/border)
        },
        // ===== NEUTRALS =====
        ink: {
          DEFAULT: '#3E2723',  // dark brown (main text / dark bg)
          soft: '#654321',     // leather (secondary bg)
          muted: '#8B7355',    // sepia (secondary text)
        },
        paper: {
          DEFAULT: '#F5E6D3',  // parchment (main light bg)
          light: '#FAF0E6',    // cream (card bg)
          white: '#FFFFF0',    // ivory (text on dark bg)
        },
      },
      fontFamily: {
        pridi: ['var(--font-pridi)', 'sans-serif'],
        cinzel: ['var(--font-cinzel)', 'serif'],
        'cinzel-deco': ['var(--font-cinzel-deco)', 'serif'],
        amiri: ['var(--font-amiri)', 'serif'],
      },
      fontSize: {
        'display': ['clamp(2.5rem, 6vw, 5.5rem)', { lineHeight: '1.1', letterSpacing: '0.01em' }],
        'display-sm': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.15' }],
        'h1': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.2' }],
        'h2': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.25' }],
        'h3': ['clamp(1.25rem, 2vw, 1.5rem)', { lineHeight: '1.3' }],
        'body-lg': ['1.25rem', { lineHeight: '1.7' }],
        'body': ['1rem', { lineHeight: '1.7' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
        'label': ['0.875rem', { lineHeight: '1.4', letterSpacing: '0.1em' }],
      },
      spacing: {
        'section': '5rem',
        'section-sm': '3rem',
        'gutter': '1.5rem',
        'card': '1.5rem',
        'stack': '1.5rem',
        'stack-sm': '0.75rem',
        'stack-lg': '3rem',
      },
      borderRadius: {
        'card': '0.75rem',
        'btn': '0.5rem',
      },
      boxShadow: {
        'card': '0 4px 20px rgba(62, 39, 35, 0.1)',
        'card-hover': '0 8px 30px rgba(62, 39, 35, 0.18)',
        'glow': '0 0 15px rgba(197, 160, 89, 0.5)',
        'glow-sm': '0 0 10px rgba(197, 160, 89, 0.3)',
      },
      transitionDuration: {
        'base': '300ms',
      },
    },
  },
  plugins: [],
}
