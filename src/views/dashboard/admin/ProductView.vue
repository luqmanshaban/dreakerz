<script setup>
import ProductDesc from '@/components/ProductDesc.vue';
import ProductImages from '@/components/ProductImages.vue'
import AdminNav from '@/components/dashboard/AdminNav.vue'

</script>
<template>
    <header>
        <AdminNav />
    </header>
    <div class="product">
        <ProductDesc />
        <ProductImages />
    </div>
</template>

<style scoped>
.product {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
}

@media screen and (max-width: 600px) {
  .product {
    padding: 20px;
    flex-direction: column-reverse;
    align-items: flex-start;
  }
}
</style>