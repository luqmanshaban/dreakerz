<script setup>
import AdminNav from '../../components/dashboard/admin/AdminNav.vue';
import router from '../../router';

function CheckIfLoggedIn() {
  const token = localStorage.getItem('token') || ''
  if(token === '') {
    router.push('/')
  }
}
CheckIfLoggedIn()

</script>

<template>
    <header>
      <AdminNav />
    </header>
    <div class="admin-view">
      <h1>Admin Dashboard</h1>
    </div>
</template>