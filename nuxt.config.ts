// https://nuxt.com/docs/api/configuration/nuxt-config
import { promises as fs } from 'node:fs'
// loader helpers
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
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
    '@nuxtjs/color-mode',
    '@nuxt/content',
    'unplugin-icons/nuxt',
    // ['unplugin-icons/nuxt',
    //   {
    //   autoInstall: true,
    //   customCollections: {
    //     icons: FileSystemIconLoader("./assets/icons"),
    //   },
    //  }
    // ],
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
  },
  vite: {
    plugins: [
      // ViteComponents({
      //   resolvers: [
      //     IconsResolver({/* options */}),
      //   ],
      // }),
      Icons({
        autoInstall: true,
        customCollections: {
          inline: {
           close: '<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.5 12L18.49 12M12.5 12L12.49 12M6.5 12L6.49 12M17.5 12C17.5 11.7348 17.6054 11.4804 17.7929 11.2929C17.9804 11.1054 18.2348 11 18.5 11C18.7652 11 19.0196 11.1054 19.2071 11.2929C19.3946 11.4804 19.5 11.7348 19.5 12C19.5 12.2652 19.3946 12.5196 19.2071 12.7071C19.0196 12.8946 18.7652 13 18.5 13C18.2348 13 17.9804 12.8946 17.7929 12.7071C17.6054 12.5196 17.5 12.2652 17.5 12ZM11.5 12C11.5 11.7348 11.6054 11.4804 11.7929 11.2929C11.9804 11.1054 12.2348 11 12.5 11C12.7652 11 13.0196 11.1054 13.2071 11.2929C13.3946 11.4804 13.5 11.7348 13.5 12C13.5 12.2652 13.3946 12.5196 13.2071 12.7071C13.0196 12.8946 12.7652 13 12.5 13C12.2348 13 11.9804 12.8946 11.7929 12.7071C11.6054 12.5196 11.5 12.2652 11.5 12ZM5.5 12C5.5 11.7348 5.60536 11.4804 5.79289 11.2929C5.98043 11.1054 6.23478 11 6.5 11C6.76522 11 7.01957 11.1054 7.20711 11.2929C7.39464 11.4804 7.5 11.7348 7.5 12C7.5 12.2652 7.39464 12.5196 7.20711 12.7071C7.01957 12.8946 6.76522 13 6.5 13C6.23478 13 5.98043 12.8946 5.79289 12.7071C5.60536 12.5196 5.5 12.2652 5.5 12Z" stroke="#82818A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
           settings: () => fs.readFile('assets/icons/Menu.svg', 'utf-8'),
      /* ... */
                },
           'custom': FileSystemIconLoader(
      'assets/icons',
      svg => svg.replace(/^<svg /, '<svg fill="currentColor" '),
    ),
        }
      }),
      Components({
        dts: true,
        resolvers: [
          IconsResolver({
            alias: {
              park: 'icon-park',
            },
            customCollections: [
              'custom',
              'inline',
              // custom external packages
              'plain-color-icons',
              'test-color-icons',
            ],
          }),
        ],
      }),
    ],
  },
})