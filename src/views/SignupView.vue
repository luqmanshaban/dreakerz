<script setup>
import '@/assets/styles/Signup.scss'
import { ref } from 'vue';
import axios from 'axios';
import { RouterLink } from 'vue-router';
import router from '../router';
import LoadingAnimation from '../components/LoadingAnimation.vue';

const signedUpSuccess = ref(false)
const invalidCredentials = ref(false)
const delayAnimation = ref(false)

const user = ref({
  username: '',
  email: '',
  password: ''
})

const submitForm = async () => {
  delayAnimation.value = true
  try {
    const response = await axios.post('http://localhost:8000/api/signup', user.value);
    invalidCredentials.value = false
    signedUpSuccess.value = true

    if(response) {
      setTimeout(() => {
        signedUpSuccess.value = true
        router.push('/login')
      }, 2000)
    }
  } catch (error) {
    console.log(error);
    invalidCredentials.value = true
  } finally {
    delayAnimation.value = false
  }
}
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
                <section class="bg-green-600 text-white border rounded-md p-3 w-[100%]" v-if="signedUpSuccess">
                  <p>Successfully signed Up</p>
                </section>
                <form @submit.prevent="submitForm" class="space-y-4 md:space-y-6" action="#">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                        <input type="text" name="username" v-model="user.username" id="text" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="johnden" required="">
                    </div>
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" v-model="user.email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="">
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" name="password" v-model="user.password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                    </div>
                    <div class="flex items-start">
                        <div class="flex items-center h-5">
                          <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="">
                        </div>
                        <div class="ml-3 text-sm">
                          <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                        </div>
                    </div>
                    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                        Already have an account? <RouterLink to="/login" class="font-medium text-cyan-700 hover:underline dark:text-primary-500">Login here</RouterLink>
                    </p>
                </form>
            </div>
            <section v-if="delayAnimation === true">
              <LoadingAnimation/>
            </section>
        </div>
    </div>
  </section>
</template>

