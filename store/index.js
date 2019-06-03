import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// let sid = window.sessionStorage.getItem('sessionId')

const store = () => new Vuex.Store({
  state: {
    counter: 0,
    signedIn: false,
    session: 'sid',
    languages: ['en', 'zh-CN'],
    locale: 'zh-CN',
    i18n: {
      language: 'zh-CN'
    }
  },
  mutations: {
    setLanguage(state, locale) {
      if (state.languages.indexOf(locale) !== -1) {
        state.i18n.language = locale
      }
    },
    increment (state) {
      state.counter++
    },
    _setSignedIn (state, isSigned) {
      state.signedIn = isSigned
    },
    _setSession (state, session) {
      state.session = session
    }
  }
})

export default store
