export const state = () => ({
  locales: ['ja', 'en'],
  locale: 'ja',
  news_list: []
})

export const getters = {
  locale (state) { return state.locale}
}

export const actions = {
}

export const mutations = {
  SET_LANG (state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  },
}