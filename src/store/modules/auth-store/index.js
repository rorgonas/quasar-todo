import { showErrorMessage, showSuccessMessage } from 'src/helpers/show-message'
import { LocalStorage, Loading } from 'quasar'
import { firebaseAuth } from "boot/firebase";

const state = {
  loggedIn: false,
}

const mutations = {
  SET_LOGGED_IN(state, value) {
    state.loggedIn = value
  }
}

const actions = {
  registerUser({ commit }, payload) {
    Loading.show()
    firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        showSuccessMessage('You have been successfully registered.')
      })
      .catch(error => {
        showErrorMessage(error.message)
      })
  },
  loginUser({ commit }, payload) {
    Loading.show()
    firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        showSuccessMessage('You have been successfully logged in.')
      })
      .catch(error => {
        showErrorMessage(error.message)
      })
  },
  logoutUser({ commit }) {
    firebaseAuth.signOut()
      .then(response => {
        showSuccessMessage('Good bye.')
      })
      .catch(error => {
        showErrorMessage(error.message)
      })
  },
  handleAuthStateChange({ commit, dispatch }) {
    firebaseAuth.onAuthStateChanged((user) => {
      Loading.hide()

      if (user) {
        commit('SET_LOGGED_IN', true)
        LocalStorage.set('loggedIn', true)
        this.$router.push('/').catch(err => {})
        dispatch('storeTasks/fbReadData', null, { root: true })
      } else {
        commit('SET_LOGGED_IN', false)
        commit('storeTasks/CLEAR_TASKS', null, { root: true })
        commit('storeTasks/SET_TASKS_DOWNLOADED', false, { root: true })
        LocalStorage.set('loggedIn', false)
        this.$router.replace('/auth').catch(err => {})
      }
    });
  }
}

const getters = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
