<script setup>
import axios from 'axios';
import { ref } from 'vue';
import '@/assets/styles/Login.scss'
import router from '../router';
import LoadingAnimation from '../components/LoadingAnimation.vue';
import { useStore } from 'vuex';

let loggedIn = ref(false);
let invalidCredentials = ref(false)

const store = useStore()

const user = ref({
  username: '',
  password: ''
});

const submitForm = async () => {
  loggedIn.value = true; 
  try {
    const response = await axios.post('http://localhost:8000/api/login', user.value);
    localStorage.setItem('token', response.data.token)
    loggedIn.value = true
    invalidCredentials.value = false

    if (response.data.role[0] === 'admin') { 
      store.commit('SET_IS_ADMIN', true);
      store.commit('SET_IS_USER', false); 
    } else {
      store.commit('SET_IS_ADMIN', false);
      store.commit('SET_IS_USER', true); 
    }
    
    store.commit('SET_IS_LOGGED_IN', true);

    if (response.data.role[0] === 'admin') {
      router.push('/admin');
    } else {
      router.push('/user');
    }
  } catch (error) {
    if(error.response.status === 401) {
      invalidCredentials.value = true
    }
    console.log(error);
  } finally {
    loggedIn.value = false;
  }
};

</script>

<template>

  <div class="login-form">
    <RouterLink to="/">
      <img src="@/assets/images/logo.png" alt="logo">
    </RouterLink>
    <form @submit.prevent="submitForm">
      <fieldset>
        <legend>Login</legend>
        <div>
          <input type="text" name="" placeholder="username" v-model="user.username" required>
        </div>
        <div>
          <input type="password" name="" placeholder="password" v-model="user.password" required>
        </div>
        <p v-if="invalidCredentials" style="color: red; font-weight: bold;">Invalid Username or password</p>
        <button type="submit">Login</button>
        <div v-if="loggedIn">
          <LoadingAnimation />
        </div>
      </fieldset>
    </form>
    <section style="display: flex; justify-content: space-between; align-items: center;">
      <p>Already have an account?</p>
      <RouterLink to="/signup">Sign Up</RouterLink>
    </section>
  </div>
</template>

<style scoped>
img {
  height: 70px;
  border-radius: 50%;
}
input {
  background-color: aliceblue;
}
</style>
