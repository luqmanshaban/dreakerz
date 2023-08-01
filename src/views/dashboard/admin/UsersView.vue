<script setup>
import AdminNav from '../../../components/dashboard/AdminNav.vue';
import { ref } from 'vue';
import axios from 'axios';

const users = ref([]);

const getUsers = async () => {
    const token = localStorage.getItem('token')
    await axios.get('http://localhost:8000/api/get-users', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(repsonse => {
        users.value = repsonse.data.users;
        console.log(repsonse);
    })
}
getUsers()
</script>

<template>
    <header>
        <AdminNav />
    </header>
    <h1>ALL USERS</h1>
    <section >
       <p v-for="user in users" :key="user.email">
        {{ user.username }}
    </p>
    </section>
</template>