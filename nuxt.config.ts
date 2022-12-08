// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from "vite-svg-loader"
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Paver Picker | YOUR Online Showroom',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: 'My amazing site.' }
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
