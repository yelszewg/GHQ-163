import Vue from 'vue'
import Vuex from 'vuex'


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