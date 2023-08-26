<script setup>
import { useStore } from 'vuex';
const store = useStore()
</script>

<template>
    <div class="">
        <button>
           Cart
        </button>
        <h1>total: {{ store.state.cart.cart.total }}</h1>
    </div>
</template>