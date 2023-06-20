const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'topBgImg': "url('/imgs/top-bg-image.svg')",
        'mobileTopBgImg': "url('/imgs/mobile-top-bg-img.svg')",
        'mobileDownBgImg': "url('/imgs/mobile-down-bg-img.svg')",
        'downBgImg': "url('/imgs/down-bg-img.svg')",
        'footerBgImg': "url('/imgs/footer-bg-img.svg')",
        'mobileFooterBgImg': "url('/imgs/mobile-footer-bg-img.svg')",
        'roadmapHeroImg': "url('/imgs/hero-img.svg')",
        'roadmapBgImg': "url('/imgs/roadmap-bg-img.svg')",
        'teamImg1': "linear-gradient(139.87deg, rgba(171, 84, 253, 0) -2.71%, rgba(234, 110, 231, 0.25) 57.18%, #7D2AE7 94.74%), url('/imgs/liz.svg')",
      },
    },
  },
  plugins: [],
});

