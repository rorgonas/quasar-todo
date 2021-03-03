import Vue from 'vue'
import { uid } from 'quasar'
import { firebaseDB, firebaseAuth } from 'boot/firebase'
import { showErrorMessage, showSuccessMessage } from 'src/helpers/show-message'

const state = {
  showAddTaskModal: false,
  tasks: {
    // 'ID1': {
    //   id: 1,
    //   name: 'Get bananas',
    //   completed: false,
    //   dueDate: '2019/05/12',
    //   dueTime: '18:39'
    // },
    // 'ID2': {
    //   id: 2,
    //   name: 'Go citrons',
    //   completed: true,
    //   dueDate: '2019/05/13',
    //   dueTime: '20:39'
    // },
    // 'ID3': {
    //   id: 3,
    //   name: 'Get apples',
    //   completed: false,
    //   dueDate: '2019/05/15',
    //   dueTime: '22:39'
    // }
  },
  search: '',
  sort: 'name',
  taskDownloaded: false
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
  CLEAR_TASKS(state) {
    state.tasks = {}
  },
  SET_SEARCH(state, value) {
    state.search = value
  },
  SET_SORT(state, value) {
    state.sort = value
  },
  SET_TASKS_DOWNLOADED(state, value) {
    state.taskDownloaded = value
  },
}

const actions = {
  updateTask({ dispatch }, payload) {
    dispatch('fbUpdateTask', payload)
  },
  deleteTask({ dispatch }, id) {
    dispatch('fbDeleteTask', id)
  },
  createTask({ dispatch }, task) {
    let taskId = uid()
    let payload = {
      id: taskId,
      task: task
    }
    dispatch('fbAddTask', payload)
  },
  setSearch({ commit }, value) {
    commit('SET_SEARCH', value)
  },
  setSort({ commit }, value) {
    commit('SET_SORT', value)
  },
  fbReadData({ commit }) {
    const userId = firebaseAuth.currentUser.uid
    const userTasks = firebaseDB.ref(`tasks/${userId}`)

    // Initial check for data
    userTasks.once('value', dataSnapshot => {
      commit('SET_TASKS_DOWNLOADED', true)
    }, error => {
      showErrorMessage(error.message)
      this.$router.replace('/auth')
    })

    // Child added
    userTasks.on('child_added', dataSnapshot => {
      let task = dataSnapshot.val()
      let payload = {
        id: dataSnapshot.key,
        task: task
      }
      commit('CREATE_TASK', payload)
    })

    // Child changes
    userTasks.on('child_changed', dataSnapshot => {
      let task = dataSnapshot.val()
      let payload = {
        id: dataSnapshot.key,
        updates: task
      }
      commit('UPDATE_TASK', payload)
    })

    // Child removed
    userTasks.on('child_removed', dataSnapshot => {
      let taskId = dataSnapshot.key
      commit('DELETE_TASK', taskId)
    })
  },

  /*
  * Add a new Task
  * */
  fbAddTask({}, payload) {
    const userId = firebaseAuth.currentUser.uid
    const taskRef = firebaseDB.ref(`tasks/${userId}/${payload.id}`)

    taskRef.set(payload.task, error => {
      if (error) {
        showErrorMessage(error.message)
      } else {
        showSuccessMessage('Task added!')
      }
    })
  },

  /*
  * Update a Task
  * */
  fbUpdateTask({}, payload) {
    const userId = firebaseAuth.currentUser.uid
    const taskRef = firebaseDB.ref(`tasks/${userId}/${payload.id}`)

    taskRef.update(payload.updates, error => {
      if (error) {
        showErrorMessage(error.message)
      } else {
        let keys = Object.keys(payload.updates)
        if (keys.includes('completed') && keys.length !== 1) {
          showSuccessMessage('Task updated!')
        }
      }
    })
  },

  /*
  * Delete a Task
  * */
  fbDeleteTask({}, id) {
    const userId = firebaseAuth.currentUser.uid
    const taskRef = firebaseDB.ref(`tasks/${userId}/${id}`)

    taskRef.remove(error => {
      if (error) {
        showErrorMessage(error.message)
      } else {
        showSuccessMessage('Task deleted!')
      }
    })
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
