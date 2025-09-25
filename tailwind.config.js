module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js", "./components/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2D5A27", // deep forest green
          50: "#F0F9F0", // very light green
          100: "#D4F1D4", // light green
          200: "#A8E6A8", // medium light green
          300: "#7DD87D", // medium green
          400: "#52C952", // medium dark green
          500: "#2D5A27", // deep forest green
          600: "#245020", // darker forest green
          700: "#1B3C18", // very dark green
          800: "#122810", // extremely dark green
          900: "#091408", // near black green
        },
        secondary: {
          DEFAULT: "#4A7C59", // balanced sage green
          50: "#F2F7F4", // very light sage
          100: "#E0EDE4", // light sage
          200: "#C1DBC9", // medium light sage
          300: "#A2C9AE", // medium sage
          400: "#83B793", // medium dark sage
          500: "#4A7C59", // balanced sage green
          600: "#3E6847", // darker sage
          700: "#325435", // very dark sage
          800: "#264023", // extremely dark sage
          900: "#1A2C11", // near black sage
        },
        accent: {
          DEFAULT: "#8FBC8F", // lighter green
          50: "#F7FBF7", // very light accent
          100: "#EBF5EB", // light accent
          200: "#D7EBD7", // medium light accent
          300: "#C3E1C3", // medium accent
          400: "#AFCEAF", // medium dark accent
          500: "#8FBC8F", // lighter green
          600: "#769C76", // darker accent
          700: "#5D7C5D", // very dark accent
          800: "#445C44", // extremely dark accent
          900: "#2B3C2B", // near black accent
        },
        background: "#FAFBFA", // warm white
        surface: "#FFFFFF", // pure white
        text: {
          primary: "#1A1A1A", // near-black
          secondary: "#6B7280", // medium gray
        },
        success: {
          DEFAULT: "#059669", // vibrant green
          50: "#ECFDF5", // very light success
          100: "#D1FAE5", // light success
          200: "#A7F3D0", // medium light success
          300: "#6EE7B7", // medium success
          400: "#34D399", // medium dark success
          500: "#059669", // vibrant green
          600: "#047857", // darker success
          700: "#065F46", // very dark success
          800: "#064E3B", // extremely dark success
          900: "#022C22", // near black success
        },
        warning: {
          DEFAULT: "#D97706", // earth-tone orange
          50: "#FFFBEB", // very light warning
          100: "#FEF3C7", // light warning
          200: "#FDE68A", // medium light warning
          300: "#FCD34D", // medium warning
          400: "#FBBF24", // medium dark warning
          500: "#D97706", // earth-tone orange
          600: "#B45309", // darker warning
          700: "#92400E", // very dark warning
          800: "#78350F", // extremely dark warning
          900: "#451A03", // near black warning
        },
        error: {
          DEFAULT: "#DC2626", // clear red
          50: "#FEF2F2", // very light error
          100: "#FEE2E2", // light error
          200: "#FECACA", // medium light error
          300: "#FCA5A5", // medium error
          400: "#F87171", // medium dark error
          500: "#DC2626", // clear red
          600: "#B91C1C", // darker error
          700: "#991B1B", // very dark error
          800: "#7F1D1D", // extremely dark error
          900: "#450A0A", // near black error
        },
        border: {
          DEFAULT: "#E5E7EB", // light gray border
          light: "#F3F4F6", // very light border
          dark: "#D1D5DB", // medium border
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        caption: ['Source Sans Pro', 'sans-serif'],
        data: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
      },
      borderRadius: {
        'sm': '3px',
        DEFAULT: '6px',
        'md': '6px',
        'lg': '8px',
        'xl': '12px',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'modal': '0 4px 12px rgba(0, 0, 0, 0.15)',
        'tooltip': '0 2px 8px rgba(0, 0, 0, 0.12)',
        'elevation': '0 2px 8px rgba(0, 0, 0, 0.1)',
      },
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 150ms ease-out',
        'slide-in': 'slideIn 300ms ease-out',
        'tooltip': 'tooltip 200ms ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        tooltip: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}