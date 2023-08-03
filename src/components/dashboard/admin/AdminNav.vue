<script setup>
import LogOut from '@/components/dashboard/admin/LogOut.vue'
</script>

<template>
    <nav class="">
        <RouterLink to="/admin">
            <h1>Dreakerz</h1>
        </RouterLink>
        <ul>
            <RouterLink to="/admin">Home</RouterLink>
            <RouterLink to="/admin/users">Users</RouterLink>
            <RouterLink to="/admin/product">Product</RouterLink>
            <RouterLink to="/admin/orders">Orders</RouterLink>
        </ul>
        <ul>
            <RouterLink to="/admin/profile">Profile</RouterLink>    
            <LogOut />
        </ul>
        
    </nav>
</template>

<style scoped>
nav {
    background-color: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.logo {
    height: 70px;
    width: 70px;
    border-radius: 50%;
}

a {
    color: #fff;
}
h1 {
    font-size: 35px;
}

</style>