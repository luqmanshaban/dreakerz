<script setup>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/FooTer.vue';
</script>

<template>
    <header>
        <NavBar />
    </header>
    <main class="px-[40px]">
        <section class="flex gap-10 items-center bg-[#f3d89f]">
          <div class="py-8 mt-10 shadow-sm lg:py-16 w-[600px] px-4 mx-auto max-w-screen-md border rounded-lg border-black flex flex-col justify-center items-center bg-[#fff]">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-black">Contact Us</h2>
              <p class="mb-8 lg:mb-16 font-light text-start text-gray-500 dark:text-gray-400 sm:text-xl ">Got a technical issue?  Let us know.</p>
              <form action="#" class="space-y-8 flex flex-col justify-center">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Your email</label>
                      <input type="email" id="email" class="shadow-sm bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-[100%] p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required>
                  </div>
                  <div>
                      <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Subject</label>
                      <input type="text" id="subject" class="block p-3 w-[100%] text-sm text-gray-900 bg-gray-300 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required>
                  </div>
                  <div class="sm:col-span-2">
                      <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Your message</label>
                      <textarea id="message" rows="6" class="block p-2.5 w-[400px] text-sm text-gray-900 bg-gray-300 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-whi-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                  </div>
                  <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-black sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
              </form>
          </div>
        </section>
    </main>

    <Footer />
</template>

<style scoped>
main{
    padding-top: 90px;
}
</style>