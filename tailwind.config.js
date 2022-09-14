module.exports = {
  mode: 'jit',
  content: ['./index.php', './app/**/*.php', './resources/**/*.{php,vue,js}'],
  theme: {
    extend: {
      colors: {},
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        DEFAULT: '4px',
        'md': '5px',
        'lg': '0.5rem',
        'full': '9999px',
        'large': '12px',
      },
      marginLeft: {
        '5%': '5%',
      }
    },
    
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
