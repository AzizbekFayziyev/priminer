<template>
   <div class="relative mb-20">
      <Swiper
         @swiper="onSwiper"
         :modules="[SwiperAutoplay]"
         :loop="true"
         :autoplay="{
            delay: 4000,
            disableOnInteraction: true
         }"
         :breakpoints="{
            476: {
               slidesPerView: 1,
               spaceBetween: 0
            },

            0: {
               slidesPerView: 1,
               spaceBetween: 8
            }
         }"
      >
         <SwiperSlide v-for="(slide, i) in banners" :key="i">
            <img :src="`${useRuntimeConfig().public.apiBaseUrl}/storage/${slide.photo}`" alt="" class="h-full w-full object-cover" />
         </SwiperSlide>
      </Swiper>

      <div class="hidden md:block absolute top-1/2 -translate-y-1/2 z-50 w-full">
         <div class="container flex items-center justify-between w-full">
            <UIButton variant="outline" class="!px-0 !py-0 !w-14 !h-14 !rounded-full bg-white/20 border-white/60" @click="categorySwiper.slidePrev()">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="w-20" viewBox="0 0 24 24" fill="none">
                  <path d="M14 7L10 12L14 17" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
               </svg>
            </UIButton>
            <UIButton variant="outline" class="!px-0 !py-0 !w-14 !h-14 !rounded-full bg-white/20 border-white/60" @click="categorySwiper.slideNext()">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M10 7L14 12L10 17" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
               </svg>
            </UIButton>
         </div>
      </div>
   </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps(['banners']);

const categorySwiper = ref(null);

function onSwiper(swiper) {
   categorySwiper.value = swiper;
}
</script>
