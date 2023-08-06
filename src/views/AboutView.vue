<script setup>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/FooTer.vue';

</script>

<template>
    <header>
        <NavBar />
    </header>
    <main class="md:p-10 ">
        <h1 class="text-3xl text-start font-bold font-mono pl-5">About Us</h1>
        <p class="font-sans px-5 md:px-[100px] mb-20 mt-5 text-start font-small">At Sneaker Emporium, we are passionate about providing you with the latest and most stylish sneakers to elevate your footwear game. We understand that sneakers are not just shoes; they are an expression of your unique style and personality. That's why we curate an extensive collection of premium sneakers from the world's top brands, ensuring you have access to the finest designs and highest quality. Our mission is simple - to become your go-to destination for all things sneaker-related. Whether you're a sneakerhead looking for    limited editions and exclusive releases or someone who simply loves comfortable and trendy footwear, we've got you covered.</p>

        <section class="dark:text-gray-100 flex flex-col justify-center items-center px-5 md:px-[100px]">
		    <div class="container flex flex-col justify-center px-2 py-8 mx-10 md:p-8">
		    	<h2 class="text-2xl text-black font-semibold sm:text-2xl">Frequently Asked Questions</h2>
		    	<p class="mt-4 mb-8 dark:text-gray-600"> Here's what sets Sneaker Emporium apart:</p>
                <div class="flex flex-col md:flex-row justify-start items-start gap-10">
                    <div class="space-y-4">
                        <details class="w-[320px] md:w-[500px] border rounded-lg">
                            <summary class="text-black px-4 py-6 focus:outline-none focus-visible:ri">How can I place an order?</summary>
                            <p class="px-4 py-6 pt-0 ml-4 -mt-4 text-black">To place an order, simply browse through our collection of premium sneakers and select the ones you like. Click on the "Add to Cart" button, and once you're ready to checkout, go to your cart and proceed to the payment page. Follow the instructions, and your order will be confirmed. </p>
                        </details>
                        <details class="w-[320px] md:w-[500px] border rounded-lg">
                            <summary class="text-black px-4 py-6 focus:outline-none focus-visible:ri">What Payment method do you accept?</summary>
                            <p class="px-4 py-6 pt-0 ml-4 -mt-4 text-black">We accept a variety of payment methods, including major credit cards (Visa, Mastercard, American Express), PayPal, and Apple Pay. Rest assured that all transactions are secure and your information will be kept safe.</p>
                        </details>
                        <details class="w-[320px] md:w-[500px] border rounded-lg">
                            <summary class="text-black px-4 py-6 focus:outline-none focus-visible:ri">Do you offer International shipping?</summary>
                            <p class="px-4 py-6 pt-0 ml-4 -mt-4 text-black">Yes, we offer international shipping to most countries. During the checkout process, you will be able to see the available shipping options and costs for your location.</p>
                        </details>
                        <details class="w-[320px] md:w-[500px] border rounded-lg">
                            <summary class="text-black px-4 py-6 focus:outline-none focus-visible:ri">How can I contact customer support?</summary>
                            <p class="px-4 py-6 pt-0 ml-4 -mt-4 text-black">For any questions, concerns, or assistance, you can reach out to our dedicated customer support team through our contact page or via email. We aim to respond promptly and provide the best possible assistance.</p>
                        </details>
                    </div>
                    <div class="space-y-4 hidden md:block">
                        <details class="w-[320px] md:w-[500px] border rounded-lg">
                            <summary class="text-black px-4 py-6 focus:outline-none focus-visible:ri">What is your return and exchange Policy?</summary>
                            <p class="px-4 py-6 pt-0 ml-4 -mt-4 text-black">We want you to be completely satisfied with your purchase. If for any reason you are not happy with your order, you may return it within 30 days of delivery for a [500px] refund or exchange. Please ensure the sneakers are in their original condition and packaging.</p>
                        </details>
                        <details class="w-[320px] md:w-[500px] border rounded-lg">
                            <summary class="text-black px-4 py-6 focus:outline-none focus-visible:ri">How can i track my order?</summary>
                            <p class="px-4 py-6 pt-0 ml-4 -mt-4 text-black">Once your order is shipped, you will receive a confirmation email with a tracking number. You can use this tracking number to monitor the status of your shipment and know when it will arrive.</p>
                        </details>
                        <details class="w-[320px] md:w-[500px] border rounded-lg">
                            <summary class="text-black px-4 py-6 focus:outline-none focus-visible:ri">Do you offer discounts?</summary>
                            <p class="px-4 py-6 pt-0 ml-4 -mt-4 text-black">Yes, we frequently run special promotions and discounts. Keep an eye on our website and subscribe to our newsletter to stay updated on the latest deals and offers.</p>
                        </details>
                        <details class="w-[320px] md:w-[500px] border rounded-lg">
                            <summary class="text-black px-4 py-6 focus:outline-none focus-visible:ri">Can I cancel my order after it's been placed?</summary>
                            <p class="px-4 py-6 pt-0 ml-4 -mt-4 text-black">If you wish to cancel your order, please contact our customer support team as soon as possible. We will do our best to accommodate your request, but please note that if the order has already been shipped, we may not be able to cancel it.</p>        
                        </details>
                    </div>
                </div>
		    </div>
	    </section>
    </main>
    <Footer />
</template>

<style scoped>
h1 {
    padding-top: 100px;
}
</style>