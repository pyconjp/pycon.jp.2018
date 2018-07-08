export const state = () => ({
  locales: ['ja', 'en'],
  locale: 'ja',
  news_list: [],
  sponsor_array:[]
})

export const getters = {
  locale (state) { return state.locale},
  sponsor_array (state) { return state.sponsor_array }
}

const stage = 'dummy'
  , noCache = true
  , sponsorApi = `https://script.google.com/macros/s/AKfycbyKmE6Ew9aWmOnj3VSwn435T8cx8kF0SkJb9fN7_PdE_ME2QpqP/exec?stage=${stage}&noCache=${noCache}`
  ;

export const actions = {
  async FETCH_SPONSOR ({ commit }) {
    const response = await fetch(sponsorApi)
    const json = await response.json()
    const data = json.data;
    commit('FETCH_SPONSOR', data)
  }
}

export const mutations = {
  SET_LANG (state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  },
  FETCH_SPONSOR(state, data) {
    state.sponsor_array = data
  }
}