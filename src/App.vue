<script setup>
import { RouterView } from 'vue-router'
import './assets/styles/App.scss'
import deleteToken from './components/DeleteToken';

deleteToken()
</script>

<template>
  <header>
    <div class="wrapper">
    </div>
  </header>

  <RouterView />
</template>
