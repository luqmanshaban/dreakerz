<script setup>
import { useStore } from 'vuex';
import white from '@/assets/images/sneaker1.png'
import gray from '@/assets/images/sneaker2.png'
import black from '@/assets/images/sneaker3.png'

const store = useStore()
</script>

<template>
    <div class="">
        <h1 class="text-center">Cart</h1>
        <hr class="my-5 border-gray-600">
        <section v-for="(cartItem, index) in store.state.cart.cart.cartItems" :key="index">
            <article class="flex items-center gap-x-5 shadow-lg p-2">
                <img v-if="store.state.cart.cart.color === 'white'" :src="white" class="h-14" alt="white sneakers">
                <img v-if="store.state.cart.cart.color === 'gray'" :src="gray" class="h-14" alt="gray sneakers">
                <img v-if="store.state.cart.cart.color === 'black'" :src="black" class="h-14" alt="black sneakers">
                <p>{{ cartItem.value.color }}</p>
                <p>size: {{ cartItem.value.size }}</p>
                <p>x {{ cartItem.value.quantity }}</p>
                <button>
                    <v-icon size="large" color="orange" icon="mdi-delete" style="cursor: pointer;"></v-icon>
                </button>
            </article>
          <hr class="my-3">
        </section>
        <section>
            <h4 class="text-lg">Total: {{ store.state.cart.cart.total }}</h4>
            <button class="text-dark bg-green border-none px-10 py-2 font-bold font-sans rounded w-full">Checkout</button>
        </section>
    </div>
</template>
