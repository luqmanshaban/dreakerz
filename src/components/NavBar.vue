<template>
   <nav class="bg-dark hidden sm:flex justify-between items-center md:py-[50px] h-11 rounded-xl">
    <RouterLink to="/">
      <img src="@/assets/images/logo.png" class="h-[100px] w-[100px] rounded" alt="">
    </RouterLink>
    <ul class="flex gap-10 justify-between items-center font-sans">
        <RouterLink class="hover:text-orange-700 text-txt font-bold ease-in-out duration-300" to="/">Home</RouterLink>
        <RouterLink class="hover:text-orange-700 text-txt font-bold ease-in-out duration-300" to="/product">Product</RouterLink>
        <RouterLink class="hover:text-orange-700 text-txt font-bold ease-in-out duration-300" to="/about">About</RouterLink>
        <RouterLink class="hover:text-orange-700 text-txt font-bold ease-in-out duration-300" to="/contact">Contact</RouterLink>
    </ul>
    <ul class="flex gap-10 items-center">
      <button @click="toggleCart">
        <span class="text-orange-700 font-sans font-bold relative top-[-15px] right-[-30px]">{{ store.state.cart.cart.quantity }}</span>
        <v-icon size="large" color="white" icon="mdi-cart" style="cursor: pointer;"></v-icon>
      </button>
      <RouterLink class="hover:text-orange-700 text-txt font-bold ease-in-out duration-300" to="/login">Login</RouterLink>
      <RouterLink class="hover:text-orange-700 text-txt font-bold ease-in-out duration-300" to="/signup">Signup</RouterLink>
    </ul>
    
    </nav>

    <section v-if="cartActive" class="fixed z-[101] right-[20px] bg-txt p-3 w-[90%] md:top-40 md:w-[400px] top-20">
      <CartView/>
    </section>


    <nav class="sm:hidden bg-dark fixed w-full p-3 h-20 z-[101]">
      <div
      class="fixed block sm:hidden pt-8 left-0 top-0 w-[100%] z-[105] h-full border-r bg-txt border-r-gray-900 transition-transform shadow-md"
      :class="{ 'ease-in-out duration-500': !nav, 'ease-out duration-500': nav }"
      :style="{ transform: nav ? 'translateX(0)' : 'translateX(-100%)' }"
    >
      <RouterLink to="/">
          <h1 class="text-3xl px-5 w-full font-semibold text-orange-700 hover:text-white ease-in-out duration-300" @click="unToggle">Dreakerz</h1>
      </RouterLink>
      <ul class="uppercase p-4 flex flex-col">
        <RouterLink @click="unToggle" class="hover:text-orange-700 text-dark font-bold ease-in-out duration-300 inline" to="/">Home</RouterLink>
        <RouterLink @click="unToggle" class="hover:text-orange-700 text-dark font-bold ease-in-out duration-300" to="/product">Product</RouterLink>
        <RouterLink @click="unToggle" class="hover:text-orange-700 text-dark font-bold ease-in-out duration-300" to="/about">About</RouterLink>
        <RouterLink @click="unToggle" class="hover:text-orange-700 text-dark font-bold ease-in-out duration-300" to="/contact">Contact</RouterLink>
        <RouterLink @click="unToggle" class="bg-orange-700 text-txt text-center font-bold ease-in-out duration-300 p-10 rounded" to="/login">Login</RouterLink>
        <RouterLink @click="unToggle" class="bg-dark text-txt text-center font-bold my-5 rounded ease-in-out duration-300" to="/signup">Signup</RouterLink>
      </ul>
     </div>
     <RouterLink to="/">
        <img src="@/assets/images/logo.png" class="h-[70px] w-[70px] rounded fixed left-2 top-0 md:hidden" alt="">
     </RouterLink>
  
      <button v-if="!nav" @click="handleNav" class="fixed right-2 md:hidden my-3">
          <v-icon size="large" color="white" icon="mdi-menu" style="cursor: pointer;"></v-icon>
      </button>
      <button v-if="nav" @click="unToggle" class="fixed right-2 md:hidden my-3 z-[106]">
          <v-icon size="large" color="black" icon="mdi-close" style="cursor: pointer;"></v-icon>
      </button>
      <button @click="toggleCart" class="fixed right-14 top-6">
        <span class="text-orange-700 font-sans font-bold relative top-[-15px] right-[-30px]">{{ store.state.cart.cart.quantity }}</span>
        <v-icon size="large" color="white" icon="mdi-cart" style="cursor: pointer;"></v-icon>
      </button>
    </nav>

  </template>
  

<script setup>
  import { RouterLink } from 'vue-router';
  import { ref } from 'vue';
  import CartView from '../views/dashboard/user/CartView.vue';
import { useStore } from 'vuex';

  const nav = ref(false)
  const cartActive = ref(false)
  const store = useStore()

  const toggleCart = () => cartActive.value = !cartActive.value
  const handleNav = () => nav.value = !nav.value;
  const unToggle = () => nav.value = false;
  
  
</script>