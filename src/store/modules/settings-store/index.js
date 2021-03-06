import { LocalStorage, Dark } from 'quasar'

const state = {
  settings: {
    show12HourTimeFormat: false,
    showTaskInOneList: false,
    showTaskInDarkMode: Dark.mode,  // get configured status. default is set to "auto"
    localStorage: false
  },
}

const mutations = {
  SET_SETTINGS(state, options) {
    state.settings = { ...state.settings, ...options }
  },
}

const actions = {
  setSettings({ commit, dispatch }, options) {
    commit('SET_SETTINGS', options)
    dispatch('saveSettings')
  },
  loadSettings({ commit }) {
    const settings = LocalStorage.getItem('settings')
    if (settings) {
      commit('SET_SETTINGS', settings)
    }
  },
  saveSettings({ state }) {
    if (state.settings.localStorage) {
      LocalStorage.set('settings', state.settings)
    }
  },
}

const getters = {
  settings: state => {
    return state.settings
  },
  storage: state => {
    return state.storage
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
