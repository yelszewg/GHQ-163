import GET_THINGS_DATA from '../mutation-type'

import {
  reqGeneral
} from '../../api/index'

export const state = {
  getTab: []
}

export const actions = {
  [GET_THINGS_DATA](state, getTab) {
    state.getTab = getTab
  }
}

export const mutations = {
  async getTabData({commit}) {
    const result = await reqGeneral

    if (result.code === 0) {
      const getTab = result.data
      commit(GET_THINGS_DATA, {
        getTab
      })
    }
  }
}

const getters= {}

export default {
  state,
  mutations,
  actions,
  getters
}