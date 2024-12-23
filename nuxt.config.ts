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
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    // ['unplugin-icons/nuxt',
    //   {
    //   autoInstall: true,
    //   customCollections: {
    //     icons: FileSystemIconLoader("./assets/icons"),
    //   },
    //  }
    // ],
    'unplugin-icons/nuxt',
  ],
  alias: {
    assets: '/<rootDir>/assets',
  },
  image: {
    format:['avif', 'webp'],
    domains: ['www.micen.com', 'micen.com'],
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
           'custom': FileSystemIconLoader(
           'assets/icons',
      svg => svg.replace(/^<svg /, '<svg fill="currentColor" '),
    ),
          'tools': FileSystemIconLoader(
      'assets/images/tools',
      svg => svg.replace(/^<svg /, '<svg fill="currentColor" '),
    ),
          'bg': FileSystemIconLoader(
           'assets/images/bg',
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
              'tools',
              'bg',
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