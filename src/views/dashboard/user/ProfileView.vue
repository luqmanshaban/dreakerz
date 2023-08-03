<template>
  <header>
    <UserNav />
  </header>
  <main>
      <h1>User Profile</h1>

      <ProfilePic />
    </main>
</template>

<script setup>
import UserNav from '../../../components/dashboard/user/UserNav.vue';
import ProfilePic from '../../../components/dashboard/user/ProfilePic.vue';
</script>