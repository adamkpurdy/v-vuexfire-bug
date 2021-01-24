import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations } from 'vuexfire'

import users from './users'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'


export default new Vuex.Store({
  modules: {
    users
  },
  mutations: {
    ...vuexfireMutations
  },

  // enable strict mode (adds overhead!)
  // for dev mode only
  strict: debug
})


