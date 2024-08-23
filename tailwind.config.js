module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  important: true,
  theme: {
    extend: {
      colors: {
        white: '#fff',
        'primary-color': '#fcc45c',
        'secondary-color': 'white',
        'error-color': '#e21034',
        'warning-color': '#e23f10',
        'color-dark-blue': '#1D263B',
        'color-gray': '#9D9D9D',
        'color-gray-blur': 'rgba(255, 255, 255, 0.64)',
        'info-color': '#5487f5',
        'success-color': '#28a745',
        'slate-normal': '#6f7172',
        'slate-border': '#e4e0e0',
        'asset-card': 'rgba(255, 255, 255, 0.1)',
        header: 'rgba(255, 255, 255, 0.2)',
        'gradient-primary':
          'linear-gradient(95.76deg, #E2104C 13.68%, #E23F10 98.08%)',
        'btn-gradient':
          'linear-gradient(93.26deg, #f91b5a 1.8%, #712bff 98.01%)',
        'color-white-blur': 'rgba(255, 255, 255, 0.1)',
        'color-yellow-blur': 'rgba(244, 207, 82, 0.31)',
        'color-purple-blur': 'rgba(103, 48, 255, 0.31)',
        'color-green-blur': 'rgba(108, 255, 123, 0.31)',
        'color-red-blur': 'rgba(250, 0, 40, 0.3)',
        'color-blue-blur': 'rgba(84, 135, 245, 0.31)',
        'color-orange-blur': 'rgba(226, 63, 16, 0.31)',
        lemon: '#ffb929',
        violet: '#e1d6ff',
        leaf: '#8eff9c',
        blood: '#f85972',
      },
      // backgroundImage: {
      //   main: "url('/src/assets/images/background.png')",
      // },
      maxWidth: {
        container: '1320px',
        '2xl-container': '1140px',
        'xl-container': '960px',
        'md-container': '720px',
        'sm-container': '540px',
        'ss-container': '100%',
      },
    },
    screens: {
      '2xl': { max: '1600px' },
      xl: { max: '1200px' },
      xlg: { max: '1000px' },
      lg: { max: '992px' },
      xmd: { max: '960px' },
      md: { max: '768px' },
      sm: { max: '576px' },
      ss: { max: '480px' },
      xs: { max: '370px' },
    },
  },
  plugins: [],
};
