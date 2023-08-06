<template>
    <section class="bg-white shadow-sm rounded-xl p-10 h-auto w-auto flex flex-col gap-y-10">

        <article>
            <ul class="flex justify-between gap-20 items-center">
                <h1 class="text-black text-2xl font-bold font-mono">Zapatillas 82</h1>
                <span class="text-gray-500 font-light">F872345G</span>
            </ul>
            <p class="text-orange-600 font-sans font-bold my-5">$200</p>
        </article>

        <article class="flex justify-between items-center">
            <ul class="flex items-center gap-2">
                <p class="text-gray-500 font-bold">COLOUR</p>
                <div v-if="color[0]" class="h-[10px] w-[10px] rounded-full bg-orange-600 p-1"></div>
                <div v-if="color[1]" class="h-[10px] w-[10px] rounded-full bg-black p-1"></div>
                <div v-if="color[2]" class="h-[10px] w-[10px] rounded-full bg-gray-400 p-1"></div>
            </ul>
            
             <ul class="flex items-center gap-x-5">                
                <button @click="clickedColorFunction(0)" class="h-10 w-10 focus:border-black rounded-full bg-orange-700"></button>
                <button @click="clickedColorFunction(1)" class="h-10 w-10 focus:border-black rounded-full bg-black"></button>            
                <button @click="clickedColorFunction(2)" class="h-10 w-10 focus:border-black rounded-full bg-gray-300"></button>
             </ul>
        </article>

        <article class="flex flex-col gap-y-3">
            <p class="text-gray-500 font-bold underline">Sizes:</p>
            <ul class="flex gap-x-5">
                <button
                   v-for="size in sizes"
                   :key="size"
                   class="text-black p-3 font-sans font-semibold rounded-lg border-solid border-2"
                   :style="active && clickedSize === size  ? {'border': '2px solid black'} : {}"
                   @click="clickedSizeBtn(size)"
                   >
                   {{ size }}
               </button>
            </ul>
        </article>
        
        <article class="flex items-center gap-x-10 justify-center mt-10">
            <button @click="increment" class="bg-orange-500 p-2 rounded-full">
                <v-icon size="large" color="white" icon="mdi-plus" style="cursor: pointer;"></v-icon>
            </button>
            <p>{{ count }}</p>
            <button @click="decrement" class="bg-orange-500 p-2 rounded-full">
                <v-icon size="large" color="white" icon="mdi-minus" style="cursor: pointer;"></v-icon>
            </button>
        </article>

        <button class="bg-black text-white font-mono font-bold rounded-xl p-5" @click="addToCart()" :disabled="count<1" :class="{'bg-gray-500': count<1 }">ADD TO CART</button>
    </section>
</template>

<script setup>
defineProps({
    addToCart: {
        type: Function,
        required: true
    },
    toggle: {
        type: Function,
        required: true
    },
    increment: {
        type: Function,
        required: true
    },
    decrement: {
        type: Function,
        required: true
    },
    color: {
        type: Array,
        required: true
    },
    sizes: {
        type: Array,
        required: true
    },
    clickedSizeBtn: {
        type: Function,
        required: true
    },
    clickedColorFunction: {
        type: Function,
        required: true
    },
    count: {
        type: Number,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    },
    clickedSize: {
        type: Number,
        required: true
    },
})


</script>
