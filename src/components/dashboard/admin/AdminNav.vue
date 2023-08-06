<script setup>
import LogOut from '@/components/dashboard/admin/LogOut.vue'
import { useStore } from 'vuex';

const store = useStore()
store.dispatch('profile/fetchProfilePicture');

const profile = store.state.profile.profilePicture;

</script>

<template>
    <nav class="bg-black p-3 flex justify-between items-center md:px-20 md:py-5 rounded-xl m-10">
        <RouterLink to="/admin">
            <h1 class="text-3xl font-sans font-semibold hover:text-orange-700 ease-in-out duration-300">Dreakerz</h1>
        </RouterLink>
        <ul class="flex gap-10 justify-between items-center font-sans">
            <RouterLink to="/admin">Home</RouterLink>
            <RouterLink to="/admin/users">Users</RouterLink>
            <RouterLink to="/admin/product">Product</RouterLink>
            <RouterLink to="/admin/orders">Orders</RouterLink>
        </ul>
        <ul class="flex gap-10 items-center">
            <LogOut />
            <RouterLink to="/admin/profile">
                <img class="rounded-full h-[70px]" v-if="profile" :src="profile" alt="profile pic"> 
                <img class="rounded-full h-[70px]" v-else-if="!profile" src="@/assets/images/default-profile.png" alt="default profile image">
            </RouterLink>    
        </ul>
        
    </nav>
</template>
