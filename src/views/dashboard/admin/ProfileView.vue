<template>
    <header>
        <AdminNav />
    </header>
    <main>
        <section class="profile-image">
            <ProfilePic />
        </section>
        <section>
            <h1>Profile</h1>
            <article>
                <p> Username: {{ userDetails.username }}</p>
                <p> email: {{ userDetails.email }}</p>
                <p> account Type: {{ userDetails.role }}</p>
            </article>
        </section>
    </main>
</template>

<script setup>
import AdminNav from '../../../components/dashboard/admin/AdminNav.vue';
import ProfilePic from '@/components/ProfilePic.vue'
import axios from 'axios';
import { ref } from 'vue';

const userDetails = ref({
    username: '',
    email: '',
    role: ''
})

const getUserDetails = async () => {
    const token = localStorage.getItem('token')
    await axios.get('http://localhost:8000/api/admin-details', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(repsonse => {
        userDetails.value.username = repsonse.data.username;
        userDetails.value.email = repsonse.data.email;
        userDetails.value.role = repsonse.data.role[0];
        console.log(repsonse);
    })
}

getUserDetails()
</script>
