import axios from 'axios'

export default {
    namespaced: true,
    state: {
        isLoggedIn: false,
        isAdmin: false,
        isUser: false,
    },
    mutations: {
        setIsLoggedIn(state, isLoggedIn) {
            state.isLoggedIn = isLoggedIn;
            if (isLoggedIn) {
              localStorage.setItem('isLoggedIn', 'true');
            } else {
              localStorage.removeItem('isLoggedIn');
            }
          },
        setIsAdmin(state, isAdmin) {
            state.isAdmin = isAdmin;
        },
        setIsUser(state, isUser) {
            state.isUser = isUser;
        },
    },
    actions: {
        async checkTokenAndRetrieveRole({ commit }) {
            const token = localStorage.getItem('token');
            if(token) {
                commit('setIsLoggedIn', true)

                try {
                    await axios.get('http://localhost:8000/api/admin-details', {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }).then(response => {
                        if(response.data.role[0] === 'admin') {
                            commit('setIsAdmin', true);
                            commit('setIsUser', false);
                        }else {
                            commit('setIsUser', true)
                            commit('setIsAdmin', false)
                        }
                    })
                } catch (error) {
                    console.log(error);
                }
            }else {
                commit('setIsLoggedIn', false)
            }
        }
    }
}