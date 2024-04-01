/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      gray50: '#F9FAFB',
      gray100: '#F3F4F6',
      gray200: '#E5E7EB',
      gray400: '#9CA3AF',
      gray500: '#6B7280',
      gray700: '#374151',
      gray900: '#111827',
      gray950: '#030712',
      blue500: '#6366F1',
      blue600: '#4F46E5',
      red: '#FF2525',
    },

    extend: {
      width: {
        formWidth: '640px',
      },

      minHeight: {
        formHeight: '782px',
      },
    },
    backgroundImage: {
      unchecked: "url('../public/unchecked.svg')",
      checked: "url('../public/checked.svg')",
      addfile: "url('../public/plus.svg')",
    },
  },
  plugins: [],
};
