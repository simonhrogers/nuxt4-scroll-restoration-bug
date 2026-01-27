export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page-fade', mode: 'out-in' },
    layoutTransition: { name: 'layout-fade', mode: 'out-in' },
  },
  css: ['~/app.css'],
})
