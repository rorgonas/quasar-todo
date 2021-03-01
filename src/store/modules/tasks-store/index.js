import Vue from 'vue'
import { uid } from 'quasar'

const state = {
  showAddTaskModal: false,
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
      completed: true,
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
  },
  search: ''
}

const mutations = {
  updateTask(state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates)
    // state.tasks[payload.id] = {...state.tasks[payload.id], ...payload.updates}
  },
  deleteTask(state, id) {
    Vue.delete(state.tasks, id)
  },
  createTask(state, payload) {
    Vue.set(state.tasks, payload.id, payload.task)
  },
  setSearch(state, value) {
    state.search = value
  }
}

const actions = {
  updateTask({ commit }, payload) {
    commit('updateTask', payload)
  },
  deleteTask({ commit }, id) {
    commit('deleteTask', id)
  },
  createTask({ commit }, task) {
    let taskId = uid()
    let payload = {
      id: taskId,
      task: task
    }
    commit('createTask', payload)
  },
  setSearch({ commit }, value) {
    commit('setSearch', value)
  }
}

const getters = {
  tasksFiltered: (state) => {
    let tasksFiltered = {}
    if (state.search) {
      Object.keys(state.tasks).forEach(function(key) {
        const task = state.tasks[key]
        if (task.name.toLowerCase().includes(state.search)) {
          tasksFiltered[key] = task
        }
      })
      return tasksFiltered
    } else {
      return state.tasks
    }
  },
  tasksTodo: (state, getters) => {
    let tasks = {}
    let tasksFiltered = getters.tasksFiltered

    Object.keys(tasksFiltered).forEach(function(key) {
      const task = tasksFiltered[key]
      if (!task.completed) {
        tasks[key] = task
      }
    });
    return tasks
  },
  tasksCompleted: (state, getters) => {
    let tasks = {}
    let tasksFiltered = getters.tasksFiltered

    Object.keys(tasksFiltered).forEach(function(key) {
      const task = tasksFiltered[key]
      if (task.completed) {
        tasks[key] = task
      }
    });
    return tasks
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
