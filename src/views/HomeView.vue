<script setup>
import '../assets/styles/Home.scss'
import HeroText from '../components/HeroText.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/FooTer.vue'
</script>

<template>
  <div class="bg-dark md:p-20">
    <header class="md:px-20">
      <NavBar/>
      <hr class="border-btn md:mt-10 md:px-20 hidden">
    </header>
    <main>
      <section class="md:flex md:justify-between md:items-center md:flex-row md:gap-x-15 md:p-20 flex flex-col-reverse pt-20">
        <HeroText />
        <img src="@/assets/images/sneaker1.png" class="sm:h-[50px] h-auto" alt="Sneaker" id="headerImg">
      </section>
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<style scoped>
.home {
  padding-top: 100px;
}
</style>
