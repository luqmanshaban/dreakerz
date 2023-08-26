
<template>
    <section class="text-txt px-3">
        <h5 class="text-btn font-sans">on Sale Product</h5>
        <h2 class="font-sans md:text-[80px] text-[50px] font-light m-0">Nike Shoes</h2>
        <h1 class="font-mono md:text-[60px] text-[50px] font-extrabold tracking-tighter m-0">Just Do It.</h1>
        <p class="font-sans font-thin mb-5 text-sm">Stand out from the crowd with our comfy sneakers</p>
        <RouterLink to="/product" class="bg-btn mt-10 px-10 py-3 rounded-xl text-txt">Shop Now</RouterLink>
    </section>
</template>

<script>
import '@/assets/styles/HeaderText.scss'
export default {
    name: 'HeaderText'
}
</script>