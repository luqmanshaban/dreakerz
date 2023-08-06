import { createStore } from 'vuex'
import axios from 'axios';
import Profile from './Profile';
import Cart from './Cart';

export default createStore({
  state: {
    isLoggedIn: false,
    isAdmin: false,
    isUser: false
  },
  mutations: {
    SET_IS_LOGGED_IN(state, isLoggedIn) {
      state.isLoggedIn = isLoggedIn;
    },
    SET_IS_ADMIN(state, isAdmin) {
      state.isAdmin = isAdmin;
    },
    SET_IS_USER(state, isUser) {
      state.isUser = isUser;
    }
  },
  actions: {
    async checkTokenAndRetrieveRole({ commit }) {
      const token = localStorage.getItem('token');
      if(token) {
        commit('SET_IS_LOGGED_IN', true);
        try {
          await axios.get('http://localhost:8000/admin-details', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }).then(response => {
            if(response.data.role[0] === 'admin') {
              commit('SET_IS_ADMIN', true);
              commit('SET_IS_USER', false);
            }else {
              commit('SET_IS_ADMIN', false);
              commit('SET_IS_USER', true);
            }
          })
        } catch (error) {
          console.log('Error retrieving user role', error);
        }
      } else {
        commit('SET_IS_LOGGED_IN', false);
      }
    }
  },
  modules: {
    profile: Profile,
    cart: Cart
  }
})
