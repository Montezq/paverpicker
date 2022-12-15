// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from "vite-svg-loader"
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Paver Picker | YOUR Online Showroom',
    }
  },
  css: [
    '~/assets/styles/app.scss'
  ],
  vite: {
    plugins: [svgLoader()]
  },
})
