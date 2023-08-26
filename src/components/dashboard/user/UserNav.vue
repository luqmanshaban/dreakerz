<script setup>
import LogOut from '@/components/dashboard/user/LogOut.vue'
import { useStore } from 'vuex';
import CartView from '../../../views/dashboard/user/CartView.vue';
import defaultImg from '@/assets/images/default-profile.png';
import { ref } from 'vue';

const cart = ref(false)
const nav = ref(false)

const store = useStore()
store.dispatch('profile/fetchUserProfilePicture');
const profile = store.state.profile.profilePicture;

const toggleCart = () => {
    cart.value = !cart.value;
}
const handleNav = () => nav.value = !nav.value;
const unToggle = () => nav.value = false;

</script>

<template>
    <nav class="bg-black hidden p-3 sm:flex justify-between items-center md:px-20 md:py-10 m-10 h-11 rounded-xl">
        <RouterLink to="/user">
            <h1 class="text-3xl font-semibold hover:text-orange-700 ease-in-out duration-300">Dreakerz</h1>
        </RouterLink>
        <ul class="flex gap-10 justify-between items-center font-sans">
            <RouterLink class="hover:text-orange-700 hover:font-semibold ease-in-out duration-300" to="/user">Home</RouterLink>
            <RouterLink class="hover:text-orange-700 hover:font-semibold ease-in-out duration-300" to="/user/product">Product</RouterLink>
            <RouterLink class="hover:text-orange-700 hover:font-semibold ease-in-out duration-300" to="/user/orders">Orders</RouterLink>
        </ul>
        <ul class="flex gap-10 items-center">
            <button @click="toggleCart">
                <v-icon size="large" color="white" icon="mdi-cart" style="cursor: pointer;"></v-icon>
            </button>
            <RouterLink to="/user/profile">
                <img class="rounded-full h-[50px]" :src="profile || defaultImg" alt="profile pic"> 
            </RouterLink>    
            <LogOut />
        </ul>
    </nav>
    <!-- <nav class="bg-black block p-3 sm:hidden ">
        <RouterLink to="/user">
            <h1 class="text-3xl font-semibold hover:text-orange-700 ease-in-out duration-300">Dreakerz</h1>
        </RouterLink>
        <ul class="flex gap-10 justify-between items-center font-sans">
            <RouterLink class="hover:text-orange-700 hover:font-semibold ease-in-out duration-300" to="/user">Home</RouterLink>
            <RouterLink class="hover:text-orange-700 hover:font-semibold ease-in-out duration-300" to="/user/product">Product</RouterLink>
            <RouterLink class="hover:text-orange-700 hover:font-semibold ease-in-out duration-300" to="/user/orders">Orders</RouterLink>
        </ul>
        <ul class="flex gap-10 items-center">
            <button @click="toggleCart">
                <v-icon size="large" color="white" icon="mdi-cart" style="cursor: pointer;"></v-icon>
            </button>
            <RouterLink to="/user/profile">
                <img class="rounded-full h-[50px]" v-if="profile" :src="profile" alt="profile pic"> 
                <img class="rounded-full h-[50px]" v-else-if="!profile" src="@/assets/images/default-profile.png" alt="default profile image">
            </RouterLink>    
            <LogOut />
        </ul>
    </nav> -->
    <div
    class="fixed block sm:hidden pt-8 left-0 top-0 w-[80%] h-full border-r z-[100] bg-[#000300] border-r-gray-900 transition-transform"
    :class="{ 'ease-in-out duration-500': !nav, 'ease-out duration-500': nav }"
    :style="{ transform: nav ? 'translateX(0)' : 'translateX(-100%)' }"
  >
    <RouterLink to="/user">
        <h1 class="text-3xl px-5 w-full font-semibold text-orange-700 hover:text-white ease-in-out duration-300">Dreakerz</h1>
    </RouterLink>
    <ul class="uppercase p-4">
      <li @click="unToggle" class="p-4 text-white border-b border-b-gray-600">
        <RouterLink class="hover:text-orange-700 text-white hover:font-semibold ease-in-out duration-300" to="/user">Home</RouterLink>
      </li>
      <li @click="unToggle" class="p-4 text-white border-b border-b-gray-600">
        <RouterLink class="hover:text-orange-700 text-white hover:font-semibold ease-in-out duration-300" to="/user/product">Product</RouterLink>
      </li>
      <li @click="unToggle" class="p-4 text-white border-b border-b-gray-600">
        <RouterLink class="hover:text-orange-700 text-white hover:font-semibold ease-in-out duration-300" to="/user/orders">Orders</RouterLink>
      </li>
      <li @click="unToggle" class="p-4 text-white border-b border-b-gray-600">
        <RouterLink to="/user/profile">
          <img class="rounded-full h-[70px]" :src="profile || defaultImg" alt="profile pic"> 
        </RouterLink> 
      </li>
      <li @click="unToggle" class="p-4 text-white border-b border-b-gray-600">
        <LogOut />
      </li>
      
    </ul>
</div>
    <button @click="handleNav" class="fixed right-2 md:hidden">
        <v-icon size="large" color="black" icon="mdi-menu" style="cursor: pointer;"></v-icon>
    </button>
    <div>
        <CartView v-if="cart" color=""/>
    </div>
</template>
