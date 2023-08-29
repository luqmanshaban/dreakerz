<script setup>
import NavBar from '../components/NavBar.vue';
// import axios from 'axios';
import { ref } from 'vue';
import { useStore } from 'vuex';
import ProductDesc from '@/components/ProductDesc.vue';
import ProductImages from '@/components/ProductImages.vue';
import FooTer from '../components/FooTer.vue';

const count = ref(0)
const color = ref([true, false, false])
const clickedSize = ref(37)
const clickedColor = ref(null)
const colorPicked = ref('gray')
const activeStyle = ref(true)

const store = useStore()

const cartItems = ref({
    color: '',
    size: null,
    quantity: null,
    total: null,
    status: ''
})

const sizes = [37, 38, 39, 40, 41, 42, 43]

function sizeClicked(size) {
  clickedSize.value = size;
  if(clickedSize.value !== 0 ){
    activeStyle.value = true
  }
}

function colorClicked(color) {
    clickedColor.value = color;
    if(clickedColor.value === 0) {
        colorPicked.value = 'gray'
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
    console.log(total, colorPicked.value, count.value, clickedSize.value);
    cartItems.value = {
        color: colorPicked,
        size: clickedSize,
        quantity: count,
        total: total,
        status: 'processing'
    }
    store.commit('cart/updateCart', cartItems.value);
    store.commit('cart/addToCart', cartItems);
    // console.log(store.state.cart.cart);
}

// const makeOrder = async () => {
//     const token = localStorage.getItem('token')
//     try {
//         await axios.post('http://localhost:8000/api/orders',cartItems.value, {
//             headers: {
//                 Authorization: `Bearer ${token}`
//             }
//         } ).then(response => {
//             console.log(response);
//         })
//     } catch (error) {
//         console.error(error);
//     }
// }
</script>

<template>
    <div class="bg-dark md:p-20 p-0">
        <header class="md:px-20">
            <NavBar />
        </header>
        <main class="md:flex md:justify-between md:items-center md:flex-row md:gap-x-36 md:p-20 flex flex-col-reverse pt-20 p-5">
            <section>
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
            </section>
            <section>
                <ProductImages :color="color"/>
            </section>
        </main>
        <footer class="dark:bg-gray-900 mt-5">
            <FooTer />
        </footer>
    </div>
</template>