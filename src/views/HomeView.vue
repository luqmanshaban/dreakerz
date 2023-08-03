<script setup>
import '../assets/styles/Home.scss'
import HeaderText from '../components/HeaderText.vue'
import HomeProduct from '../components/HomeProduct.vue';
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/FooTer.vue'
</script>

<template>
  <header>
    <NavBar />
  </header>
  <main>
    <section class="home">
      <HeaderText />
      <img src="@/assets/images/landing.png" alt="Sneaker" id="headerImg">
    </section>
    <section class="products">
      <HomeProduct />
    </section>
  </main>
  <Footer />
</template>

<style scoped>
.home {
  padding-top: 100px;
}
</style>
