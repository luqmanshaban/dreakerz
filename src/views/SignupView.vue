<script setup>
import '@/assets/styles/Signup.scss'
import { ref } from 'vue';
import axios from 'axios';
import router from '../router';
const signedUpSuccess = ref(false)

const user = ref({
  username: '',
  email: '',
  password: ''
})

const submitForm = async () => {
  try {
    const response = await axios.post('http://localhost:8000/api/signup', user.value);
    console.log(response);
    console.log(user.value);
    if(response) {
      setTimeout(() => {
        signedUpSuccess.value = true
        router.push('/login')
      },2000)
    }
  } catch (error) {
    console.log(error);
  }
}
</script>

<template>
  <div class="signup-form">
    <RouterLink to="/">
      <img src="@/assets/images/logo.png" alt="logo">
    </RouterLink>
    <form @submit.prevent="submitForm">
      <fieldset>
        <legend>Sign Up</legend>
        <div>
          <label for="username">Username:</label><br>
          <input type="text" id="username" v-model="user.username">
        </div>
        <div>
          <label for="email">Email:</label><br>
          <input type="email"  id="email" v-model="user.email">
        </div>
        <div>
          <label for="password">Password:</label><br>
          <input type="password"  id="password" v-model="user.password">
        </div>
        <button type="submit">Sign Up</button>
      </fieldset>
    </form>
    <section style="display: flex; justify-content: space-between; align-items: center;">
      <p>Don't have an account?</p>
      <RouterLink to="/login">Login</RouterLink>
    </section>
  </div>
  <section class="confirm" v-if="signedUpSuccess">
    <p>Successfully signed Up</p>
  </section>
</template>

<style scoped>
img {
  height: 70px;
  border-radius: 50%;
}

input {
  background-color: aliceblue;
}
.confirm {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.confirm p {
  padding: 10px;
  background-color: green;
  border-radius: 10px;
  text-align: center;
  color: #fff;
}
</style>