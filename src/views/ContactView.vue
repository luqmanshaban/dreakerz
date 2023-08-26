<script setup>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/FooTer.vue';
</script>

<template>
    <div class="bg-dark md:p-20">
        <header class="md:px-20">
            <NavBar />
        </header>
        <main class="px-0 md:px-[40px] b-dark">
            <section class="flex justify-center items-center bg-dark mt-0">
              <div class="flex flex-col justify-center items-center md:mt-[-70px]">
                  <h2 class="text-4xl tracking-tight font-extrabold text-center text-btn">Contact Us</h2>
                  <p class="mb-8 lg:mb-16 font-light text-start text-gray-500 dark:text-gray-400 sm:text-xl ">Got a technical issue?  Let us know.</p>
                  
                  <form action="#" class="space-y-8 flex md:w-[450px] w-[300px] flex-col justify-center border-2 p-5 rounded border-txt">
                      <div>
                          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Your email</label>
                          <input type="email" id="email" class="shadow-sm bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required>
                      </div>
                      <div>
                          <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Subject</label>
                          <input type="text" id="subject" class="block p-3 w-[100%] text-sm text-gray-900 bg-gray-300 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required>
                      </div>
                      <div class="sm:col-span-2">
                          <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Your message</label>
                          <textarea id="message" rows="6" class="block p-2.5 md:w-[410px] w-full text-sm text-gray-900 bg-gray-300 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-whi-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                      </div>
                      <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-black sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                  </form>
              </div>
            </section>
        </main>
        <footer>
            <Footer />
        </footer>
    </div>

</template>

<style scoped>
main{
    padding-top: 90px;
}
</style>