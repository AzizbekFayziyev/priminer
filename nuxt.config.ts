export default defineNuxtConfig({
   ssr: true,
   devtools: { enabled: true },
   app: {
      head: {
         link: [
            {
               rel: 'icon',
               type: 'image/svg',
               href: '/favicon.svg'
            }
         ]
      },
      pageTransition: { name: 'page', mode: 'out-in' },
      layoutTransition: { name: 'layout', mode: 'out-in' }
   },
   css: ['@/assets/styles/main.css'],

   modules: ['@nuxtjs/tailwindcss', '@nuxt/image', 'nuxt-swiper', '@nuxtjs/i18n', '@pinia/nuxt', 'nuxt-aos'],

   i18n: {
      locales: ['en', 'ru'],
      defaultLocale: 'en',
      vueI18n: './i18n.config.ts'
   },

   runtimeConfig: {
      public: {
         apiBaseUrl: 'https://admin.priminer.uz'
      }
   },

   build: {
      transpile: ['vue-toastification']
   },
   aos: {
      once: true
   }
});
