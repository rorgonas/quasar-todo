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
      name: 'Go citrons',
      completed: true,
      dueDate: '2019/05/13',
      dueTime: '20:39'
    },
    'ID3': {
      id: 3,
      name: 'Get apples',
      completed: false,
      dueDate: '2019/05/15',
      dueTime: '22:39'
    },
    'ID4': {
      id: 1,
      name: 'Get bananas',
      completed: false,
      dueDate: '2019/05/12',
      dueTime: '18:39'
    },
    'ID5': {
      id: 2,
      name: 'Go citrons',
      completed: true,
      dueDate: '2019/05/13',
      dueTime: '20:39'
    },
    'ID6': {
      id: 3,
      name: 'Get apples',
      completed: false,
      dueDate: '2019/05/15',
      dueTime: '22:39'
    },
    'ID7': {
      id: 1,
      name: 'Get bananas',
      completed: false,
      dueDate: '2019/05/12',
      dueTime: '18:39'
    },
    'ID8': {
      id: 2,
      name: 'Go citrons',
      completed: true,
      dueDate: '2019/05/13',
      dueTime: '20:39'
    },
    'ID9': {
      id: 3,
      name: 'Get apples',
      completed: false,
      dueDate: '2019/05/15',
      dueTime: '22:39'
    },
    'ID10': {
      id: 1,
      name: 'Get bananas',
      completed: false,
      dueDate: '2019/05/12',
      dueTime: '18:39'
    },
    'ID11': {
      id: 2,
      name: 'Go citrons',
      completed: true,
      dueDate: '2019/05/13',
      dueTime: '20:39'
    },
    'ID12': {
      id: 3,
      name: 'Get apples',
      completed: false,
      dueDate: '2019/05/15',
      dueTime: '22:39'
    },
    'ID13': {
      id: 1,
      name: 'Get bananas',
      completed: false,
      dueDate: '2019/05/12',
      dueTime: '18:39'
    },
    'ID14': {
      id: 2,
      name: 'Go citrons',
      completed: true,
      dueDate: '2019/05/13',
      dueTime: '20:39'
    },
    'ID15': {
      id: 3,
      name: 'Get apples',
      completed: false,
      dueDate: '2019/05/15',
      dueTime: '22:39'
    },
  },
  search: '',
  sort: 'name'
}

const mutations = {
  UPDATE_TASK(state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates)
    // state.tasks[payload.id] = {...state.tasks[payload.id], ...payload.updates}
  },
  DELETE_TASK(state, id) {
    Vue.delete(state.tasks, id)
  },
  CREATE_TASK(state, payload) {
    Vue.set(state.tasks, payload.id, payload.task)
  },
  SET_SEARCH(state, value) {
    state.search = value
  },
  SET_SORT(state, value) {
    state.sort = value
  }
}

const actions = {
  updateTask({ commit }, payload) {
    commit('UPDATE_TASK', payload)
  },
  deleteTask({ commit }, id) {
    commit('DELETE_TASK', id)
  },
  createTask({ commit }, task) {
    let taskId = uid()
    let payload = {
      id: taskId,
      task: task
    }
    commit('CREATE_TASK', payload)
  },
  setSearch({ commit }, value) {
    commit('SET_SEARCH', value)
  },
  setSort({ commit }, value) {
    commit('SET_SORT', value)
  }
}

const getters = {
  tasksSorted: (state) => {
   let tasksSorted = {},
       keysOrdered = Object.keys(state.tasks)

    keysOrdered.sort((a,b) => {
      let taskAProp = state.tasks[a][state.sort].toLowerCase(),
          taskBProp = state.tasks[b][state.sort].toLowerCase()

      if (taskAProp > taskBProp) return 1
      else if (taskAProp < taskBProp) return -1
      else return 0
    })

    keysOrdered.forEach((key) => {
      tasksSorted[key] = state.tasks[key]
    })

   return tasksSorted
  },
  tasksFiltered: (state, getters) => {
    let tasksFiltered = {},
        tasksSorted = getters.tasksSorted

    if (state.search) {
      Object.keys(tasksSorted).forEach(function(key) {
        const task = tasksSorted[key]
        if (task.name.toLowerCase().includes(state.search)) {
          tasksFiltered[key] = task
        }
      })
      return tasksFiltered
    } else {
      return tasksSorted
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
