export const state = () => ({
  locales: ['ja', 'en'],
  locale: 'ja',
  news_list: [],
  sponsor_array:[],
  top_sponsor_array:[],
  top_sponsor_loading: 'enable'
})

export const getters = {
  locale (state) { return state.locale},
  sponsor_array (state) { return state.sponsor_array },
  top_sponsor_array (state) { return state.top_sponsor_array },
  top_sponsor_loading (state) { return state.top_sponsor_loading}
}

export const actions = {
  async FETCH_SPONSOR ({ commit }) {
    const stage = 'prod' // Please change to "prod" if deploying production
    const noCache = false  // Please change to "false" if deploying production
    const sponsorApi = process.env.sponsorApiEndpoint + `?stage=${stage}&noCache=${noCache}`
    const response = await fetch(sponsorApi)
    const json = await response.json()
    const data = json.data

    commit('FETCH_SPONSOR', data)
  },
  async FETCH_TOP_SPONSOR ({ commit }) {
    const stage = 'prod' // Please change to "prod" if deploying production
    const noCache = false  // Please change to "false" if deploying production
    const sponsorApi = process.env.sponsorApiEndpoint + `?stage=${stage}&noCache=${noCache}`
    const response = await fetch(sponsorApi)
    const json = await response.json()
    const data = json.data

    // 重複の削除
    let _data = [], names = []
    data.forEach( function ( item ) {
      if ( names.indexOf( item.idName ) === -1 && item.package) {
         _data.push(item)
       }
      names.push( item.idName )
    } )

    commit('FETCH_TOP_SPONSOR', _data)

    // ローディング表示解除
    commit('SET_TOP_SPONSOR_LOADING', 'disable')
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
  },
  FETCH_TOP_SPONSOR(state, data) {
    state.top_sponsor_array = data
  },
  SET_TOP_SPONSOR_LOADING(state, doLoading) {
    state.top_sponsor_loading = doLoading
  }
}
