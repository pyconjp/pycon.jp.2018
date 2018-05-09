module.exports = {
  head: {
    titleTemplate: '%s - PyCon JP 2018',
  },
  build: {
    vendor: ['uikit']
  },
  css: [
    'uikit/dist/css/uikit.min.css',
  ],
  router: {
    middleware: 'i18n'
  },
  plugins: ['~/plugins/i18n.js'],
  generate: {
    routes: ['/','/en']
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: 'Meta description' }
  ]
}