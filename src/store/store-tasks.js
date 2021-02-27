const state = {
  tasks: [
    {
      id: 1,
      name: 'Get bananas',
      completed: false,
      dueDate: '2019/05/12',
      dueTime: '18:39'
    },
    {
      id: 2,
      name: 'Go to shop',
      completed: false,
      dueDate: '2019/05/13',
      dueTime: '20:39'
    },
    {
      id: 3,
      name: 'Get red apples',
      completed: false,
      dueDate: '2019/05/15',
      dueTime: '22:39'
    }
  ]
}

const mutation = {

}

const actions = {

}

const getters = {
  tasks: (state) => {
    return state.tasks
  }
}

export default {
  namespaced: true,
  state,
  mutation,
  actions,
  getters
}
