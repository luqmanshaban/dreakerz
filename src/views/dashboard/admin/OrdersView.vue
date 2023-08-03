<script setup>
import AdminNav from '@/components/dashboard/admin/AdminNav.vue';
import { ref } from 'vue';
import axios from 'axios';

const orders = ref([])

const getAllOrders = async () => {
    const token = localStorage.getItem('token')

    try {
        await axios.get('http://localhost:8000/api/orders', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            orders.value = response.data.orders;
            console.log(response.data.orders);
        })
    } catch (error) {
        console.error(error);
    }
}
</script>

<template>
    <header>
        <AdminNav />
    </header>
    <div>Orders</div>
    <section v-for="order in orders" :key="order.id">
        <h1>{{ order.name }}</h1>
        <img :src="order.img" :alt="order.name" >
        <p>Total: {{ order.total }}</p>
    </section>
</template>