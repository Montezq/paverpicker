// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from "vite-svg-loader"
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
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
  modules: [
    '@pinia/nuxt',
  ],
  vite: {
    plugins: [svgLoader()],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/helpers.scss";'
        }
      }
    }
  },
})