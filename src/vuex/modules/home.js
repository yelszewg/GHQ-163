import {
  GET_HOME_DATA
} from '../mutation-type'

import {reqHome} from '../../api'

const state = {
  homeData: {}
}

const mutations = {
  [GET_HOME_DATA](state, homeData) {
    state.homeData = homeData
  }
}

const actions = {
  async getHomeData ({commit, state}) {
    const result = await reqHome()

    if (result.code === 0) {
      
      const homeData = result.data
      commit(GET_HOME_DATA, {
        homeData
      })
    }
  }
}
const getters ={}


export default {
  state,
  mutations,
  actions,
  getters
}