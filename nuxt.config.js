// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    baseURL: '/nuxt-github-pages/',
    buildAssetsDir: 'assets',
  },
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  modules: ['@vueuse/motion/nuxt'],
  site: {
    url: 'https://kuang-long.vercel.app',
    indexable: true
  },
  runtimeConfig: {
    public: {
      motion: {
        directives: {
          'pop-bottom': {
            initial: {
              scale: 0,
              opacity: 0,
              y: 100,
            },
            visible: {
              scale: 1,
              opacity: 1,
              y: 0,
            }
          }
        }
      }
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  //target: 'static',
  // router: {
  //   base: '/kuanglongtw.github.io/'
  // }
  //modules: ['@nuxtjs/tailwindcss'],
  // typescript: {
  //   typeCheck: true
  // }
  //,'@nuxtjs/sitemap'
  // sitemap: {
  //   path: '/sitemap.xml',
  //   hostname: 'https://kuang-long.vercel.app',
  //   gzip: true,
  //   generate: true, 
  //   routes: [
  //     '/#second',
  //     '/#third',
  //     '/#fourth'
  //   ]
  // },
})
