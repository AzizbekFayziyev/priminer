<template>
   <section class="bg-background py-[80px]">
      <div class="container space-y-10">
         <h2 class="text-xl md:text-3xl xl:text-[40px] font-medium">
            {{ translations['main.what_we_did'] }}
         </h2>
         <Swiper
            :modules="[SwiperAutoplay]"
            :spaceBetween="24"
            :slidesPerView="4"
            :autoplay="{
               delay: 4000,
               disableOnInteraction: true
            }"
            :loop="true"
            :breakpoints="{
               1280: {
                  slidesPerView: 4,
                  spaceBetween: 16
               },
               1024: {
                  slidesPerView: 3,
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
            <SwiperSlide v-for="(item, i) in galeries" :key="i">
               <div class="flex flex-col gap-6">
                  <div class="relative md:h-[450px] xl:h-[530px]">
                     <img :src="`${useRuntimeConfig().public.apiBaseUrl}/storage/${item.photo}`" alt="Heroku" loading="lazy" class="h-full w-full object-cover rounded-[8px]" />
                  </div>

                  <div class="flex flex-col gap-2">
                     <h3 class="text-2xl font-semibold">
                        {{ item.title[$i18n.locale] }}
                     </h3>
                     <div class="text-base text-[#353437] font-medium" v-html="item.descriptions[$i18n.locale]"></div>
                  </div>
               </div>
            </SwiperSlide>
         </Swiper>
      </div>
   </section>
</template>

<script setup>
import { useTranslationStore } from '~/stores/translations';

defineProps(['galeries']);

const translationsStore = useTranslationStore();
const { translations } = storeToRefs(translationsStore);
</script>
