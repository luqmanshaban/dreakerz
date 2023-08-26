<template>
    <section class="images">
        <article class="main-images">
            <img v-if="color[0] === true" :src="image1" alt="" class="md:h-[700px] rotate-[5deg]">
            <img v-if="color[1] === true" :src="image2" alt="" class="md:h-[700px] rotate-[5deg]">
            <img v-if="color[2] === true" :src="image3" alt="" class="md:h-[700px] rotate-[5deg]">
        </article>
    </section>
</template>

<script setup>
import '@/assets/styles/ProductImages.scss';
import image3 from '@/assets/images/sneaker1.png';
import image1 from '@/assets/images/sneaker2.png';
import image2  from '@/assets/images/sneaker3.png';

defineProps({
   color: {
    type: Array,
    required: true
   }
})
</script>
