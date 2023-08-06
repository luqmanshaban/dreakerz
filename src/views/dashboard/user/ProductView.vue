<script setup>
import UserNav from '../../../components/dashboard/user/UserNav.vue';
import ProductImages from '@/components/ProductImages.vue';
import ProductDesc from '@/components/ProductDesc.vue';
import { ref } from 'vue';
import FooTer from '../../../components/FooTer.vue';
import axios from 'axios';

const count = ref(0)
const color = ref([true, false, false])
const clickedSize = ref(37)
const clickedColor = ref(null)
const colorPicked = ref('brown')
const activeStyle = ref(true)

const cartItems = ref({
    color: color,
    size: clickedSize,
    total: count.value * 200,
    status: 'processisng'
})

const sizes = [37, 38, 39, 40, 41, 42, 43]

function sizeClicked(size) {
  clickedSize.value = size;
  if(clickedSize.value !== 0 ){
    activeStyle.value = true
  }
  console.log(activeStyle.value);
}
console.log(activeStyle.value);

function colorClicked(color) {
    clickedColor.value = color;
    if(clickedColor.value === 0) {
        colorPicked.value = 'brown'
    }else if(clickedColor.value === 1) {
        colorPicked.value = 'black'
    }else {
        colorPicked.value = 'white'
    }
}
const toggle = index => {
    color.value = color.value.map((value,i) => i === index)
}
const ColorFunction = (index) => {
    toggle(index);
    colorClicked(index)
}
const increment = () => {
    if(count.value < 5) {
        count.value ++;
    }
}
const decrement = () => {
    if(count.value > 0) {
        count.value --;
    }
}

const addToCart = () => {
    const total = count.value * 200;
    console.log(total, colorPicked.value, clickedSize.value);
}

const makeOrder = async () => {
    console.log(cartItems.value);
    const token = localStorage.getItem('token')
    try {
        await axios.post('http://localhost:8000/api/orders',cartItems.value, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        } ).then(response => {
            console.log(response);
        })
    } catch (error) {
        console.error(error);
    }
}

</script>

<template>
    <header>
        <UserNav />
    </header>
    <button class="bg-green p-2 rounded-lg text-white" @click="makeOrder">Checkout</button>
    <main class="flex px-20 items-center justify-between">
        <ProductDesc
        :color="color"
        :sizes="sizes"
        :clickedColorFunction="ColorFunction"     
        :clickedSizeBtn="sizeClicked"     
        :toggle="toggle"
        :count="count" 
        :increment="increment" 
        :decrement="decrement"
        :addToCart="addToCart"
        :active="activeStyle"
        :clickedSize="clickedSize"
        />
        <ProductImages :color="color"/>
    </main>
    <FooTer />
</template>
