<template>
    <footer class="bg-gray-300 rounded-sm mx-0 mt-10 shadow dark:bg-gray-900">
        <div class="w-full max-w-screen-xl px-0 md:py-8">
            <div class="sm:flex sm:items-center sm:justify-between">
                <RouterLink to="/" class="md:flex items-center mb-4 sm:mb-0 hidden">
                    <img src="@/assets/images/logo.png" class="h-[40px] rounded-full md:h-[70px] mr-3" alt="Dreakerz Logo" />
                </RouterLink>

                <div class="m-3 py-3 px-3 w-[300px] md:w-[350px] bg-gray-800 rounded inline-block">
                    <p class="text-white font-bold text-sm text-start">Subscribe to news letters</p>
                    <form class="flex justify-between flex-col md:flex-row gap-2 mb-3">
                        <input class="mr-3 shadow-inner text-white rounded px-3 py-2 text-sm bg-gray-900 border-b border-gray-700" placeholder="Enter your email" type="text">
                        <button class="shadow-lg bg-blue-900 text-white font-bold text-sm rounded px-3 py-2">Subscribe</button>
                    </form>
                </div>

                <div class="flex flex-col gap-1 mt-5">
                    <ul class="flex flex-col flex-wrap items-start gap-3 md:flex-row mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <RouterLink to="/about" class="mr-4 hover:text-orange-500 md:mr-6 ">About</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/contact" class="mr-4 hover:text-orange-500 md:mr-6 ">contact</RouterLink>
                        </li>
                        <!-- <li>
                            <RouterLink to="/privacy" class="hover:text-orange-500">Privacy & Policy</RouterLink>
                        </li> -->
                    </ul>
                    <ul class="flex flex-wrap items-center gap-3">
                        <li>
                            <a href="https://twitter.com/luqmanshaban01" target="_blank">
                                <v-icon size="large" color="white" icon="mdi-twitter" style="cursor: pointer;"></v-icon>
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com/luqmanshaban" target="_blank">
                                <v-icon size="large" color="white" icon="mdi-instagram" style="cursor: pointer;"></v-icon>
                            </a>
                        </li>
                        <li>
                            <v-icon size="large" color="white" icon="mdi-facebook" style="cursor: pointer;"></v-icon>
                        </li>
                    </ul>
                </div>

            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://linkedin.com/in/luqman-shaban" target="_blank" class="hover:text-orange-500">Luqman Shaban</a> <br class="md:hidden"> All Rights Reserved.</span>
        </div>
    </footer>
</template>