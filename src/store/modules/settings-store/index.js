import Vue from 'vue'

const state = {
  settings: {
    show12HourTimeFormat: false
  }
}

const mutations = {

}

const actions = {

}

const getters = {
  settings: state => {
    return state.settings
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
