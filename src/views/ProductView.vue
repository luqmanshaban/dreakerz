<template>
  <header>
    <NavBar />
  </header>
  <div class="about">
    <ProductView />
    <ProductImages />
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue';
import ProductView from '../components/ProductDesc.vue';
import ProductImages from '../components/ProductImages.vue';
</script>

<style scoped>
.about {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
}

@media screen and (max-width: 600px) {
  .about {
    padding: 20px;
    flex-direction: column-reverse;
    align-items: flex-start;
  }
}
</style>
