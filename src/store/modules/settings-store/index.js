import Vue from 'vue'

const state = {
  settings: {
    show12HourTimeFormat: true,
    showTaskInOneList: false
  }
}

const mutations = {
  SET_12_HOUR_TIME_FORMAT(state, value) {
    state.settings.show12HourTimeFormat = value
  },
  SET_SHOW_TASK_IN_ONE_LIST(state, value) {
    state.settings.showTaskInOneList = value
  }
}

const actions = {
  setShow12HourTimeFormat({ commit }, value) {
    commit('SET_12_HOUR_TIME_FORMAT', value)
  },
  setShowTaskInOneList({ commit }, value) {
    commit('SET_SHOW_TASK_IN_ONE_LIST', value)
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
