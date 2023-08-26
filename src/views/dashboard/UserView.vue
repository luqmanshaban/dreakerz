<script setup>
import UserNav from '../../components/dashboard/user/UserNav.vue';

</script>

<template>
    <div class="user-dashboard">
      <header>
        <UserNav />
      </header>
        <h1>User Dashboard</h1>
        <button class="bg-red-700 p-2 rounded-lg text-white font-sans font-bold" @click="incrementCount">Increment</button>
    </div>
</template>