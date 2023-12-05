// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from "vite-svg-loader";
export default defineNuxtConfig({
  ssr: true,
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      script: [
        {
          hid: 'gtmHead',
          innerHTML: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TWVZJ2BT');`,
        },
      ],
      htmlAttrs: {
        lang: 'en'
      },
      title: 'BLOC-TEC | YOUR Online Showroom',
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
        { name: 'robots', content: 'index, follow' },
        { name: 'google-site-verification', content:'LGJ31nKVc7F-HO-8GAXcohRBzA7oziVHIYK55kCGsYQ' }
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
    '@pinia/nuxt'
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