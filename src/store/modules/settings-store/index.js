import Vue from 'vue'

const state = {
  settings: {
    show12HourTimeFormat: false
  }
}

const mutations = {
  SET_12_HOUR_TIME_FORMAT(state, value) {
    state.settings.show12HourTimeFormat = value
  }
}

const actions = {
  setShow12HourTimeFormat({ commit }, value) {
    commit('SET_12_HOUR_TIME_FORMAT', value)
  }
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
