export const state = () => ({
    locales: ['ja', 'en'],
    locale: 'ja'
})

export const getters = {
  locale(state) { return state.locale}
}

export const mutations = {
    SET_LANG(state, locale) {
        if (state.locales.indexOf(locale) !== -1) {
            state.locale = locale
        }
    }
}