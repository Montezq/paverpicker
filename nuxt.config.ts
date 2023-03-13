// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from "vite-svg-loader";
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Paver Picker | YOUR Online Showroom',
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#0d0d0d' },
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
      ],
      meta: [
        { name: 'msapplication-TileColor', content: '#0d0d0d' },
        { name: 'theme-color', content: '#0d0d0d' },
      ],
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
    ['@funken-studio/sitemap-nuxt-3', { hostname: 'http://paverpicker.com/'}],
  ],
  plugins: [
    '~/plugins/transition.js',
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