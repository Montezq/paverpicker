// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from "vite-svg-loader"
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Paver Picker | YOUR Online Showroom',
      script: [
        { 
          src: 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js',
          defer: true,
          async: true,
          body: true,
        },
        { 
          src: 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/animation.gsap.min.js',
          defer: true,
          async: true,
          body: true,
        },
        // { 
        //   src: 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js',
        //   defer: true,
        //   async: true,
        //   body: true,
        // },
      ],
    }
  },
  css: [
    '~/assets/styles/app.scss'
  ],
  vite: {
    plugins: [svgLoader()]
  },
})