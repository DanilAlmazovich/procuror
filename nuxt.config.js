export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'prokuror',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: ''},
            {name: 'format-detection', content: 'telephone=no'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@/assets/css/main.css',
        '@/assets/fonts/fonts.css',
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: '~/plugins/flickity.js', ssr: false }
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: [
        '~/components',
        {
            path: '~/components/layout',
            pathPrefix: false
        }
    ],

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: ['@nuxtjs/tailwindcss'],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    ssr: false,
}