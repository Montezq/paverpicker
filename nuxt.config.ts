// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from "vite-svg-loader";
export default defineNuxtConfig({
  ssr: false,
  app: {
    layoutTransition: { name: 'page', mode: 'out-in' },
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Paver Picker | YOUR Online Showroom',
      link: [
        {
          rel: 'preload',
          href: '/fonts/SegoeUI.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: 'anonymous'
        },
        {
          rel: 'preload',
          href: '/fonts/SegoeUI-SemiBold.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: 'anonymous'
        },
        {
          rel: 'preload',
          href: '/fonts/SegoeUI-Bold.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: 'anonymous'
        },
        {
          rel: 'preload',
          href: '/fonts/FabricExternalMDL2Assets.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: 'anonymous'
        },
        {
          rel: 'preload',
          href: '/fonts/SegoeUI-Light.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: 'anonymous'
        }
      ]
    }
  },
  css: [
    'element-plus/theme-chalk/el-collapse.css',
    'element-plus/theme-chalk/el-collapse-item.css',
    'element-plus/theme-chalk/el-collapse-transition.css',
    '~/assets/styles/app.scss'
  ],
  modules: [
    '@pinia/nuxt',
  ],
  plugins: [
    '~/plugins/transition.js'
  ],
  vite: {
    plugins: [
      svgLoader()
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/helpers.scss";'
        }
      }
    }
  },
})