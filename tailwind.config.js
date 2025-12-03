module.exports = {
  content: ["./pages/*.{html,js,tsx,ts}", "./components/**/*.{tsx,ts}"],
  theme: {
    extend: {
      colors: {
        space: {
          dark: '#0B0B15',
          light: '#1F2937',
          accent: '#6366F1',
          cyan: '#06B6D4',
          pink: '#F472B6',
        },
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.2s ease-in-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
