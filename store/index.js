export const state = () => ({
  locales: ['ja', 'en'],
  locale: 'ja',
  news_list: [],
  top_sponsor_array:[],
  top_sponsor_loading: 'enable'
})

export const getters = {
  locale (state) { return state.locale},
  top_sponsor_array (state) { return state.top_sponsor_array },
  top_sponsor_loading (state) { return state.top_sponsor_loading}
}

export const actions = {
  async FETCH_TOP_SPONSOR ({ commit }) {
    //const response = await fetch('https://script.googleusercontent.com/a/macros/cmscom.jp/echo?user_content_key=Ip4PR2S34_eXS2J6wkT3r3mmTnEPGfP5UP4wtSVYiOIR95CXDoSmN0RUTK8hkoP9eKL9L04Ww8oKB6UYsEFaQtPBIJ8yVA7eOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKAOS2ctISRtt04b7AZrhA6iGTDAmifRRVBskNLutP5jlgn-PR-edKTO6VoW9CB2MtvYXzNY1Dtnb0MAnEIWOiYnmvUhOlQ3tzqihfAzKqf3gqpZXdcdfBnajfg3bfnXXK8z5TaeAifuuQ&lib=M1V_WDW-oPJ7W7S1ncrump9VJGv4Fseyb')
    const response = await fetch('https://script.google.com/macros/s/AKfycbyKmE6Ew9aWmOnj3VSwn435T8cx8kF0SkJb9fN7_PdE_ME2QpqP/exec?stage=prod')
    const json = await response.json()
    const data = json.data;

    // Diamond/Platinum/Gold/Sprint/Silverのみ
    // or 正確性がとれるなら、全パッケージ出力の上、重複は削除

    commit('FETCH_TOP_SPONSOR', data)

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
  FETCH_TOP_SPONSOR(state, data) {
    state.top_sponsor_array = data
  },
  SET_TOP_SPONSOR_LOADING(state, doLoading) {
    state.top_sponsor_loading = doLoading
  }
}
