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
  <section class="bg-[#f3d89f]">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <RouterLink to="/" class="flex items-center mb-6">
            <img class="w-8 h-8 mr-2 md:w-[100px] md:h-[100px] rounded-full" src="@/assets/images/logo.png" alt="logo">
        </RouterLink>

        <div class="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Create an account
                </h1>
                <form @submit.prevent="submitForm" class="space-y-4 md:space-y-6" action="#">
                    <div>
                        <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                        <input type="text" name="username" v-model="user.username" id="text" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  placeholder="johnden" required="">
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" name="password" v-model="user.password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                    </div>
                    <p v-if="invalidCredentials" class="text-red text-center">Invalid username or password</p>
                    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login</button>
                    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                        Don't have an account? <RouterLink to="/signup" class="font-medium text-cyan-700 hover:underline dark:text-primary-500">Get Started </RouterLink>
                    </p>
                </form>
            </div>
            <section v-if="loggedIn">
              <LoadingAnimation /> 
            </section>
        </div>
    </div>
  </section>
</template>