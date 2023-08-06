import axios from 'axios';

export default {
    namespaced: true,
  state: {
    profilePicture: null,
  },
  mutations: {
    SET_PROFILE_PICTURE(state, profilePic) {
      state.profilePicture = profilePic;
    },
  },
  actions: {
    async fetchProfilePicture({ commit }) {
      const token = localStorage.getItem('token');
      if (!token) {
        return;
      }

      try {
        const response = await axios.get('http://localhost:8000/api/profiles', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const profilePic = response.data.profilePic;
        commit('SET_PROFILE_PICTURE', profilePic);
      } catch (error) {
        console.error('Error fetching profile picture:', error);
      }
    },
    async fetchUserProfilePicture({ commit }) {
      const token = localStorage.getItem('token');
      if (!token) {
        return;
      }

      try {
        const response = await axios.get('http://localhost:8000/api/pictures/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const profilePic = response.data.profilePic;
        commit('SET_PROFILE_PICTURE', profilePic);
      } catch (error) {
        console.error('Error fetching profile picture:', error);
      }
    },
  },
};

// export default profile;
