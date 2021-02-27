import Vue from 'vue'

const state = {
  tasks: {
    'ID1': {
      id: 1,
      name: 'Get bananas',
      completed: false,
      dueDate: '2019/05/12',
      dueTime: '18:39'
    },
    'ID2': {
      id: 2,
      name: 'Go to shop',
      completed: false,
      dueDate: '2019/05/13',
      dueTime: '20:39'
    },
    'ID3': {
      id: 3,
      name: 'Get red apples',
      completed: false,
      dueDate: '2019/05/15',
      dueTime: '22:39'
    },
  }
}

const mutations = {
  updateTask(state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates)
    // state.tasks[payload.id] = {...state.tasks[payload.id], ...payload.updates}
  },
  deleteTask(state, id) {
    Vue.delete(state.tasks, id)
  }
}

const actions = {
  updateTask({ commit }, payload) {
    commit('updateTask', payload)
  },
  deleteTask({ commit }, payload) {
    commit('deleteTask', payload)
  }
}

const getters = {
  tasks: (state) => {
    return state.tasks
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
