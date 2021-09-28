import fs from "fs";
import path from "path";

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head() {
    return {
      title: 'app',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/app.scss'
  ],

  styleResources: {
    scss: [
      '~/assets/scss/base/*.scss',
      '~/assets/scss/elements/*.scss',
      '~/assets/scss/blocks/*.scss',
      '~/assets/scss/global/*.scss',
      '~/assets/scss/pages/*.scss',
    ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/i18n',
  ],

  i18n: {
    defaultLocale: 'en',
    fallbackLocale: 'en',
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.json'
      },
      {
        code: 'fr',
        name: 'Français',
        file: 'fr.json'
      }
    ],
    langDir: 'locales/',
    strategy: 'prefix_except_default'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  server: {
    port: 8000, // default: 3000
    // host: '0.0.0.0', // default: localhost,
    timing: false,
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'manoj.key')),
      cert: fs.readFileSync(path.resolve(__dirname, 'manoj.pem'))
    }
  },

  router: {
    base: '/milka-app/',
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'landing',
        path: '/',
        component: resolve(__dirname, 'pages/index.vue')
      })
      routes.push({
        name: 'tutorial',
        path: '/tutorial',
        component: resolve(__dirname, 'pages/tutorial.vue')
      })
      routes.push({
        name: 'congrats',
        path: '/congrats',
        component: resolve(__dirname, 'pages/congrats.vue')
      })
      routes.push({
        name: 'spin',
        path: '/spin',
        component: resolve(__dirname, 'pages/spin-the-wheel.vue')
      })
      // routes.push({
      //   name: 'leaderboard',
      //   path: '/leaderboard',
      //   component: resolve(__dirname, 'pages/leaderboard.vue')
      // })
      routes.push({
        name: 'sign-in',
        path: '/sign-in',
        component: resolve(__dirname, 'pages/sign-in.vue')
      })
      routes.push({
        name: 'profile',
        path: '/profile',
        component: resolve(__dirname, 'pages/profile.vue')
      })
      routes.push({
        name: 'loading',
        path: '/loading',
        component: resolve(__dirname, 'pages/loading.vue')
      })
      routes.push({
        name: 'share',
        path: '/share',
        component: resolve(__dirname, 'pages/share.vue')
      })
      routes.push({
        name: 'map',
        path: '/map',
        component: resolve(__dirname, 'pages/map.vue')
      })
    }
  }
}
