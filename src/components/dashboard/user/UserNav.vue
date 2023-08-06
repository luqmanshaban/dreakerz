<script setup>
import LogOut from '@/components/dashboard/user/LogOut.vue'
import { useStore } from 'vuex';

const store = useStore()
store.dispatch('profile/fetchUserProfilePicture');

const profile = store.state.profile.profilePicture;

</script>

<template>
    <nav class="bg-black p-3 flex justify-between items-center md:px-20 md:py-10 m-10 h-11 rounded-xl">
        <RouterLink to="/admin">
            <h1 class="text-3xl font-semibold hover:text-orange-700 ease-in-out duration-300">Dreakerz</h1>
        </RouterLink>
        <ul class="flex gap-10 justify-between items-center font-sans">
            <RouterLink class="hover:text-orange-700 hover:font-semibold ease-in-out duration-300" to="/user">Home</RouterLink>
            <RouterLink class="hover:text-orange-700 hover:font-semibold ease-in-out duration-300" to="/user/product">Product</RouterLink>
            <RouterLink class="hover:text-orange-700 hover:font-semibold ease-in-out duration-300" to="/user/orders">Orders</RouterLink>
        </ul>
        <ul class="flex gap-10 items-center">
            <RouterLink to="/user/profile">
                <img class="rounded-full h-[50px]" v-if="profile" :src="profile" alt="profile pic"> 
                <img class="rounded-full h-[50px]" v-else-if="!profile" src="@/assets/images/default-profile.png" alt="default profile image">
            </RouterLink>    
            <LogOut />
        </ul>
        
    </nav>
</template>
