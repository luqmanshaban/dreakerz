<script setup>
import axios from 'axios';
import router from '../../../router';

const Logout = async () => {
  const token = localStorage.getItem('token');
  try {
     await axios.post(
      'http://localhost:8000/api/user/logout',
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      );
    localStorage.removeItem('token')
    router.push('/')
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
    <button @click="Logout" class="cursor-pointer border-cyan-300">
      <v-icon size="large" color="white" icon="mdi-logout" style="cursor: pointer;"></v-icon>
    </button>
</template>
