
import * as types from '@/store/mutation-types'

const state = {
  isLogin: false,
  info: null
}

const mutations = {
  [types.LOGIN] (state, user) {
    state.isLogin = true
    state.info = Object.assign({}, user)
  },
  [types.LOGOUT] () {
    state.isLogin = false
    state.info = null
  }
}

export default {
  state,
  mutations
}
