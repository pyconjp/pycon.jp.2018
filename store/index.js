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
    const response = await fetch('https://script.googleusercontent.com/a/macros/cmscom.jp/echo?user_content_key=Ip4PR2S34_eXS2J6wkT3r3mmTnEPGfP5UP4wtSVYiOIR95CXDoSmN0RUTK8hkoP9eKL9L04Ww8oKB6UYsEFaQtPBIJ8yVA7eOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKAOS2ctISRtt04b7AZrhA6iGTDAmifRRVBskNLutP5jlgn-PR-edKTO6VoW9CB2MtvYXzNY1Dtnb0MAnEIWOiYnmvUhOlQ3tzqihfAzKqf3gqpZXdcdfBnajfg3bfnXXK8z5TaeAifuuQ&lib=M1V_WDW-oPJ7W7S1ncrump9VJGv4Fseyb')
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
    console.log(data)
    state.sponsor_array = data
  }
}