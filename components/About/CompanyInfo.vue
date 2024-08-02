<template>
   <div class="max-w-[1400px] w-full mx-auto mb-20">
      <div class="bg-background lg:rounded">
         <div class="flex items-center justify-between px-4 md:px-10 lg:px-20 flex-col lg:flex-row">
            <div class="lg:max-w-[400px] max-w-[350px] w-full flex items-stretch justify-center order-2 lg:order-1">
               <img src="/assets/images/transformer_green.webp" alt="" class="w-full h-full" />
            </div>
            <div class="flex flex-col max-w-[780px] w-full lg:flex-1 pt-4 md:pt-8 lg:py-12 order-1 lg:order-2">
               <h4 class="text-grey text-lg mb-4">{{ translations['main.about_title'] }}</h4>
               <h2 class="text-2xl md:text-3xl xl:text-4xl font-semibold mb-6">{{ translations['main.about_subtitle'] }}</h2>
               <p class="text-grey text-lg mb-6">{{ translations['main.about_text1'] }}</p>
               <p class="text-grey text-lg">{{ translations['main.about_text2'] }}</p>
            </div>
         </div>
      </div>
      <section class="px-4">
         <h2 class="text-2xl md:text-3xl xl:text-4xl font-semibold mb-4 mt-6">{{ translations['main.clients'] }}</h2>
         <Swiper
            :modules="[SwiperAutoplay, SwiperMousewheel]"
            :loop="true"
            :mousewheel="true"
            :autoplay="{
               delay: 100,
               disableOnInteraction: true
            }"
            :breakpoints="{
               1280: {
                  slidesPerView: 5,
                  spaceBetween: 30
               },
               1024: {
                  slidesPerView: 4,
                  spaceBetween: 16
               },
               476: {
                  slidesPerView: 2,
                  spaceBetween: 12
               },

               0: {
                  slidesPerView: 1,
                  spaceBetween: 8
               }
            }"
         >
            <SwiperSlide v-for="item in partners" :key="item">
               <a :href="item.link" target="_blank" class="block lg:hover:scale-105 transition-300 max-w-[220px] w-full mx-auto sm:mx-0">
                  <img :src="`${useRuntimeConfig().public.apiBaseUrl}/storage/${item.photo}`" alt="Heroku" loading="lazy" class="h-full w-full object-contain rounded-xl" />
               </a>
            </SwiperSlide>
         </Swiper>
      </section>
   </div>
</template>

<script setup>
defineProps(['partners']);

import { useTranslationStore } from '~/stores/translations';

const translationsStore = useTranslationStore();
const { translations } = storeToRefs(translationsStore);
</script>
