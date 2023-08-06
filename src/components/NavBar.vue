<template>
    <nav class="h-24 bg-slate-50 flex justify-between items-center fixed w-[100%] px-[100px] drop-shadow-md z-40">

      <RouterLink to="/">
        <img src="@/assets/images/logo.png" class="h-[80px] rounded-full" alt="Logo" id="logo"/>
      </RouterLink>

      <ul :class="[{ active: active }, 'flex justify-between items-center gap-10']">
        <li @click="unToggle">
          <RouterLink class="cursor-pointer hover:text-orange-600 hover:font-bold font-sans ease-in-out duration-300" to="/">Home</RouterLink>
        </li>
        <li @click="unToggle">
          <RouterLink class="cursor-pointer hover:text-orange-600 hover:font-bold font-sans ease-in-out duration-300" to="/about">About</RouterLink>
        </li>
        <li @click="unToggle">
          <RouterLink to="/contact" class="cursor-pointer hover:text-orange-600 hover:font-bold font-sans ease-in-out duration-300">Contact</RouterLink>
        </li>
      </ul>

      <ul :class="[{active: active}, 'flex gap-10']">
        <li @click="unToggle">
        <RouterLink
          to="/signup"
          class=" hover:text-orange-600 hover:font-bold bg-black p-3 text-white rounded font-sans ease-in-out duration-300"
        >
          Signup
        </RouterLink>
      </li>
      <li @click="unToggle" class="btn2">
        <RouterLink
          to="/login"
          class="hover:bg-white hover:text-orange-600 hover:font-bold bg-orange p-3 text-black rounded font-sans ease-in-out duration-300"
        >
          Login
        </RouterLink>
      </li>
      </ul>
      <div :class="['hidden',{active: active }]" @click="toggle">
        <span class="w-6 h-1 bg-black m-1 block md:hidden"></span>
        <span class="w-6 h-1 bg-black m-1 block md:hidden"></span>
        <span class="w-6 h-1 bg-black m-1 block md:hidden"></span>
      </div>
   </nav>
   <section class="hr"> <hr></section>
  </template>
  
  <script>
  import { RouterLink } from 'vue-router';
  // import '../assets/styles/Navbar.scss'
  
  
  export default {
    name: 'NavBar',
    components: {
      RouterLink,
    },
  
    data() {
      return {
        active: false,
      };
    },
  
    methods: {
      toggle() {
        this.active = !this.active; //
      },
      unToggle() {
        this.active = false;
      }
    },
  };
  </script>