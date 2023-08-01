import { createStore } from 'vuex'

export default createStore({
  state: {
    isLoggedIn: false  
  },
  mutations: {
    setIsLoggedIn(state){
      const token = localStorage.getItem('token')
      if(token){
        state.isLoggedIn = true
      }
    }
  },
  actions: {
  },
  modules: {
  }
})