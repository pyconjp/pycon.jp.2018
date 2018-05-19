import { FETCH_PYCON_JP_BLOG_ATOM } from './mutation-types'

export const state = () => ({
  locales: ['ja', 'en'],
  locale: 'ja',
  news_list: []
})

export const getters = {
  locale (state) { return state.locale}
}



export const actions = {
  // async [FETCH_PYCON_JP_BLOG_ATOM]({ commit }){
  //   try{
  //     const blog_atom = await fetch('http://pyconjp.blogspot.com/rss.xml')
  //     console.log(blog_atom)
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }
}

export const mutations = {
  SET_LANG (state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  },
  // [FETCH_PYCON_JP_BLOG_ATOM](state){
  //
  // }
}