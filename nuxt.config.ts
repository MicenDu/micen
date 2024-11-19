// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxtjs/strapi',
    '@nuxtjs/algolia',
    '@nuxt/image',
    '@nuxtjs/color-mode'
  ],
  alias: {
    assets: '/<rootDir>/assets',
  },
  image: {
    format:['avif', 'webp'],
  },
  strapi: {
    // Options
      url: process.env.STRAPI_URL || 'http://localhost:1337',
      prefix: '/api',
      admin: '/admin',
      version: 'v4',
      cookie: {},
      cookieName: 'strapi_jwt'
  }
})