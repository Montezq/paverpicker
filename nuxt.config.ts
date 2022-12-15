// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from "vite-svg-loader"
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Paver Picker | YOUR Online Showroom',
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/docslider@3.0.1/docSlider.css'
        }
      ],
      script: [
        { 
          hid: 'docslider',
          src: 'https://cdn.jsdelivr.net/npm/docslider@3.0.1/docSlider.min.js',
          defer: true,
          body: true,
        },
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