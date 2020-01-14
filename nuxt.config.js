
module.exports = {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    // 项目里要用的 CSS 文件
    '@/assets/main.css',
    // 项目里要使用的 SCSS 文件
    '@/assets/css/styles.sass'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/vue-notifications',
    '@/plugins/add-debug-info',
    '@/plugins/sort-plugin',
    '@/plugins/all-inject-plugin'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },

  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/, 'vue-notifications'],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },

  // 配置中间键
  router: {
    middleware: 'auth'
  },
}
