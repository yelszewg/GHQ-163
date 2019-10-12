import {
  GET_CATEGORY_DATA
} from '../mutation-type'

import {
  reqClassification
} from '../../api'

const state ={
  categoryData: {}
}

const mutations = {
  [GET_CATEGORY_DATA] (state, {categoryData}) {
    state.categoryData = categoryData
  }
}

const actions = {
  async getCategoryData ({commit}) {
    const result = await reqClassification()
    categoryData = result.data.currentCategory

    if(result.code === 0) {
      commit(GET_CATEGORY_DATA, {categoryData})
    }
  }
}

export default{
  state,
  mutations,
  actions
}