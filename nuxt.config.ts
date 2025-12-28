// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxt/ui'],
  css: ['~/assets/main.css'],
  app: {
    head: {
      title: 'ZephyOps — AI Automation & Workflow Engineering',
      meta: [
        { name: 'description', content: 'ZephyOps — AI automation, workflow engineering, monitoring, scraping, social posting, reporting and more.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        {rel: 'icon', href: '/logo.png'}
      ]
    }
  },
  ui:{
    colorMode: false
  }
})