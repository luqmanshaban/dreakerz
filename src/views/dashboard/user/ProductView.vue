<script setup>
import UserNav from '../../../components/dashboard/user/UserNav.vue';
import ProductImages from '@/components/ProductImages.vue';
import ProductDesc from '@/components/ProductDesc.vue';


</script>

<template>
    <header>
        <UserNav />
    </header>
    <main>
        <ProductDesc />
       <ProductImages />
    </main>
</template>

<style scoped>
main {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

@media screen and (max-width: 600px) {
    main {
        flex-direction: column-reverse;
    }
}
</style>