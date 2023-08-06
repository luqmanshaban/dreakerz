<script setup>
import UserNav from '../../components/dashboard/user/UserNav.vue';
import { useStore } from 'vuex';


const store = useStore()
const count = store.state.cart.count


const incrementCount = () => {
  store.commit['cart/increment']
}

</script>

<template>
    <div class="user-dashboard">
      <header>
        <UserNav />
      </header>
        <h1>User Dashboard</h1>
        <p>count: {{ count }}</p>
        <button class="bg-red-700 p-2 rounded-lg text-white font-sans font-bold" @click="incrementCount">Increment</button>
    </div>
</template>