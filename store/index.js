export const state = () => ({
  locales: ['ja', 'en'],
  locale: 'ja',
  news_list: [],
  sponsor_array:[],
  top_sponsor_array:[],
  top_sponsor_loading: 'enable',
  talk_array: [],
  poster_array: [],
  lt_array: []
})

export const getters = {
  locale (state) { return state.locale},
  sponsor_array (state) { return state.sponsor_array },
  top_sponsor_array (state) { return state.top_sponsor_array },
  top_sponsor_loading (state) { return state.top_sponsor_loading},
  talk_array (state) { return state.talk_array},
  poster_array (state) { return state.poster_array},
  lt_array (state) {return state.lt_array},
  news_list (state) { return state.news_list }
}

const sponsorSheetName = 'prod_20180903'// Please change to "prod" if deploying production
const sponsorNoCache = false  // Please change to "false" if deploying production
const sponsorApiUri = process.env.sponsorApiEndpoint + `?stage=${sponsorSheetName}&noCache=${sponsorNoCache}`

/* for Session API's URI */
let getSessinsAPIUri = (category) => {
  let apiUri
  let sheetName
  const noCache = false

  if(category === 'talk'){
    sheetName = 'prod_20180907'
    apiUri = process.env.talkApiEndpoint + `?stage=${sheetName}&noCache=${noCache}`
  }else if( category === 'poster'){
    sheetName = 'prod'
    apiUri = process.env.posterApiEndpoint + `?stage=${sheetName}&noCache=${noCache}`
  }else if( category === 'lt'){
    sheetName = 'prod_20180911'
    apiUri = process.env.ltApiEndpoint + `?stage=${sheetName}&noCache=${noCache}`
  }

  return apiUri
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
    const uri = getSessinsAPIUri('talk')
    const response = await fetch(uri)
    const json = await response.json()
    const data = json.data
    commit('FETCH_TALK', data)
  },
  async FETCH_POSTER ({ commit }) {
    const uri = getSessinsAPIUri('poster')
    const response = await fetch(uri)
    const json = await response.json()
    const data = json.data
    commit('FETCH_POSTER', data)
  },
  async FETCH_LT ({ commit }) {
    const uri = getSessinsAPIUri('lt')
    const response = await fetch(uri)
    const json = await response.json()
    const data = json.data
    data.sort((a, b) => {
        if (a.day < b.day) return -1
        if (a.day > b.day) return 1
        if (a.no < b.no) return -1
        if (a.no > b.no) return 1
        return 0
    })
    commit('FETCH_LT', data)
  },
  async FETCH_NEWS ({ commit }) {
    console.log(process.env.newsApiEndpoint)
    const response = await fetch(process.env.newsApiEndpoint)
    const json = await response.json()
    const data = json.item
    commit('FETCH_NEWS', data)
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
  FETCH_POSTER(state, data) {
    state.poster_array = data
  },
  FETCH_LT(state, data) {
    state.lt_array = data
  },
  FETCH_NEWS(state, data) {
    state.news_list = data
  }
}
