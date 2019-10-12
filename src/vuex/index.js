import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutaions'
import actions from './actions'
import getters from './getters'
import store from './store'
import category from './modules/category'
import home from './modules/home.js'
import things from './modules/things'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    things,
    category
    
  }
})