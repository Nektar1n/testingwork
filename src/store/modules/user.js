export default {
  actions: {
    async fetchUsers({ commit, getters, dispatch }) {
      const res = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      )
      const users = await res.json()

      dispatch('sayHello')

      commit('updateUsers', users)
    },
    sayHello() {}
  },
  mutations: {
    updateUsers(state, users) {
      state.users = users
    },
    createUser(state, newUser) {
      state.users.unshift(newUser)
    }
  },
  state: {
    users: []
  },
  getters: {
    validUsers(state) {
      return state.users.filter(p => {
        return p.name && p.email
      })
    },
    allUsers(state) {
      return state.users
    },
    postsCount(state, getters) {
      return getters.validUsers.length
    }
  }
}
