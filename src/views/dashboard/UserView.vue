<script setup>
import UserNav from '../../components/dashboard/user/UserNav.vue';

</script>

<template>
    <div class="user-dashboard">
      <header>
        <UserNav />
      </header>
        <h1>User Dashboard</h1>
    </div>
</template>

<style scoped>
button {
    background-color: red;
    padding: 10px 15px;
    font-size: 16px;
    border: none;
    border-radius: 15px;
    color: #fff;
    cursor: pointer;
    transition: 0.5s ease-in-out;
}
button:hover {
    background-color: #fff;
    color: red;
    border: 1px solid red;
}
</style>