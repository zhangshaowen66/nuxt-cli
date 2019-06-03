const pkg = require('./package')
const env = require('./env')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
  mode: 'universal',
  env: {
    baseUrl: env[process.env.MODE].ENV_API
  },
  router: {
   //  middleware: 'i18n'
  /*  extendRoutes (routes, resolve) {
      routes.push({
        name: 'commodity',
        path: '/Order/commodit',
        meta: {title: '基本信息', isShow: true},
        component: resolve(__dirname, 'pages/user/UserCenter/Order/commodity')
      })
    }*/
  },
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {name:'renderer', content:'webkit'},
      {'http-equiv': 'X-UA-Compatible', content: "IE=edge,Chrome=1"},
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type:"image/x-icon", href: '/favicon.ico'},
      { rel: 'shortcut icon', type:"image/x-icon", href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading:  '~/components/public/loading.vue',

  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/global.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src:'~plugins/plugins', ssr: false }
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'bootstrap-vue/nuxt',
    ['nuxt-i18n-module', {
      languages: ['en', 'zh-CN']
    }]
  ],
  bootstrapVue: {
  bootstrapCSS: true, // or `css`
    bootstrapVueCSS: false // or `bvCSS`
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
    plugins: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            warnings: false,
            drop_console: process.env.NODE_ENV === 'development'
          },
          mangle: {
            safari10: true
          }
        },
        sourceMap: true,
        cache: true,
        parallel: true
      })
    ]
  }
}
