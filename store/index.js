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

export const actions = {
  async FETCH_SPONSOR ({ commit }) {

    const stage = 'prod' // Please change to "prod" if deploying production
    const noCache = false  // Please change to "false" if deploying production
    const sponsorApi = process.env.sponsorApiEndpoint + `?stage=${stage}&noCache=${noCache}`

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