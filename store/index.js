export const state = () => ({
  locales: ['ja', 'en'],
  locale: 'ja',
  news_list: [],
  sponsor_array:[],
  top_sponsor_array:[],
  top_sponsor_loading: 'enable',
  talk_array: []
})

export const getters = {
  locale (state) { return state.locale},
  sponsor_array (state) { return state.sponsor_array },
  top_sponsor_array (state) { return state.top_sponsor_array },
  top_sponsor_loading (state) { return state.top_sponsor_loading},
  talk_array (state) { return state.talk_array}
}

const sponsorSheetName = 'prod_20180818'// Please change to "prod" if deploying production
const sponsorNoCache = false  // Please change to "false" if deploying production
const sponsorApiUri = process.env.sponsorApiEndpoint + `?stage=${sponsorSheetName}&noCache=${sponsorNoCache}`

/* for Session API's URI */
let getSessinsAPIUri = () => {
  const talkSheetName = 'dev_new'// Please change to "prod_yyyymmdd" if deploying production
  const talkNoCache = false  // Please change to "false" if deploying production
  let talkApiUri
  // chose endpoint
  talkApiUri = process.env.talkApiEndpoint + `?stage=${talkSheetName}&noCache=${talkNoCache}`

  return talkApiUri
}


export const actions = {

  async FETCH_SPONSOR ({ commit }) {
    const response = await fetch(sponsorApiUri)
    const json = await response.json()
    const data = json.data

    commit('FETCH_SPONSOR', data)
  },
  async FETCH_TOP_SPONSOR ({ commit }) {
    const response = await fetch(sponsorApiUri)
    const json = await response.json()
    const data = json.data

    // 重複の削除
    let _data = [], names = []
    data.forEach( function ( item ) {
      if ( names.indexOf( item.distinctName ) === -1 && item.package) {
         _data.push(item)
       }
      names.push( item.distinctName )
    } )

    commit('FETCH_TOP_SPONSOR', _data)

    // ローディング表示解除
    commit('SET_TOP_SPONSOR_LOADING', 'disable')
  },
  async FETCH_TALK ({ commit }) {
    const uri = getSessinsAPIUri()
    const response = await fetch(uri)
    const json = await response.json()
    const data = json.data
    commit('FETCH_TALK', data)
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
  },
  FETCH_TALK(state, data) {
    state.talk_array = data
  },
}
