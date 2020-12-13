import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import user from './user'
import eh from "./eh";

const storeOpt = {
  modules: {
    user,
    eh
  }
}

export default new Vuex.Store(storeOpt)