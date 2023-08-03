<script setup>
import LogOut from '@/components/dashboard/user/LogOut.vue'
import { ref } from 'vue';
const active = ref(false)

const toggle = () => active.value = !active.value;
const unToggle = () => active.value = false;
</script>

<template>
    <nav class="bg-black flex gap-10 justify-between items-center py-10 px-20">

        <RouterLink to="/user">
            <h1 class="text-3xl text-white">Dreakerz</h1>
        </RouterLink>

        <ul :class="['flex gap-20',{active:active}]">
            <RouterLink class="text-white hover:text-[#A73B38] cursor-pointer ease-in-out duration-500" @click="unToggle" to="/user">Home</RouterLink>
            <RouterLink class="text-white hover:text-[#A73B38] cursor-pointer ease-in-out duration-500" @click="unToggle" to="/user/product">Product</RouterLink>
            <RouterLink class="text-white hover:text-[#A73B38] cursor-pointer ease-in-out duration-500" @click="unToggle" to="/user/orders">Orders</RouterLink>
        </ul>

        <ul :class="{navRight: true, active:active}">
            <RouterLink @click="unToggle" to="/user/profile">Profile</RouterLink> 
            <LogOut />
        </ul>

        <div :class="['hamburger','hidden flex-col', {active: active},]" @click="toggle">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
    </nav>
    
</template>