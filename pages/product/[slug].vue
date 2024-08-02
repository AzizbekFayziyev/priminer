<template>
   <!-- Seo -->
   <Head>
      <Title>{{ product?.title[$i18n.locale] + " | Priminer" || "PRODUCT | Priminer" }}</Title>
      <Meta name="description" :content="translations['products.description'] || 'Product description'">
      </Meta>
      <Meta name="og:image" :content="`${useRuntimeConfig().public.apiBaseUrl}/site/images/products/${image}`">
      </Meta>
   </Head>

   <div>
      <div class="container">
         <section class="grid grid-cols-1 xl:grid-cols-9 gap-10 mt-20">
            <div class="xl:col-span-4">
               <div class="sticky top-32 flex flex-col gap-y-6">
                  <div class="border rounded">
                     <Swiper effect="fade" :fade-effect="{ crossFade: true }" :thumbs="{
                        swiper: thumbsSwiper
                     }" :modules="[SwiperEffectFade, SwiperThumbs, SwiperAutoplay]" loop="true" :autoplay="{
                        delay: 3000,
                        disableOnInteraction: true
                     }" class="overflow-hidden sm:h-[600px]" @swiper="setMainSwiper" @slideChange="onSlideChange">
                        <SwiperSlide v-for="(image, index) in product?.photo" :key="index"
                           class="p-4 sm:p-[20px_25px] lg:p-[45px_50px] xl:p-[80px_100px]">
                           <img :src="`${useRuntimeConfig().public.apiBaseUrl}/site/images/products/${image}`" alt=""
                              class="w-full h-full object-contain" />
                        </SwiperSlide>
                     </Swiper>
                  </div>
                  <Swiper :space-between="10" :slides-per-view="4" :modules="[SwiperThumbs, SwiperAutoplay]" loop="true"
                     :autoplay="{
                        delay: 3000,
                        disableOnInteraction: false
                     }" :breakpoints="{
                        0: {
                           slidesPerView: 3
                        },
                        476: {
                           slidesPerView: 4
                        }
                     }" class="w-full" @swiper="setThumbsSwiper">
                     <SwiperSlide v-for="(image, index) in product?.photo" :key="index"
                        class="relative overflow-hidden cursor-pointer group">
                        <div class="flex items-center justify-center w-18 h-18 sm:w-32 sm:h-24 border rounded"
                           :class="{ '!border-primary': activeIndex === index }">
                           <img :src="`${useRuntimeConfig().public.apiBaseUrl}/site/images/products/${image}`" alt=""
                              class="w-14 h-14 sm:w-20 sm:h-20 object-contain" />
                        </div>
                     </SwiperSlide>
                  </Swiper>
               </div>
            </div>
            <div class="xl:col-span-5">
               <div class="flex flex-col gap-10">
                  <div class="flex items-center justify-between">
                     <h2 class="text-xl md:text-3xl xl:text-[40px] font-medium">
                        {{ product?.title[$i18n.locale] }}
                     </h2>
                  </div>
                  <div class="flex flex-col gap-4" v-if="product?.descriptions">
                     <h3 class="text-xl font-medium">
                        {{ translations['products.description'] }}
                     </h3>
                     <ul class="flex flex-col gap-4">
                        <li class="text-grey text-base flex gap-1 items-center"><span
                              v-html="product?.descriptions[$i18n.locale]"></span></li>
                     </ul>
                  </div>
                  <div class="flex flex-col gap-4" v-if="product?.standard_key">
                     <h3 class="text-xl font-medium">
                        {{ translations['products.standard'] }}
                     </h3>
                     <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <li class="flex items-start gap-2" v-for="(item, i) in product?.standard_key[$i18n.locale]"
                           :key="i">
                           <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd"
                                 d="M18 2H6C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2ZM16.592 9.46049C16.8463 9.13353 16.7874 8.66232 16.4605 8.40802C16.1335 8.15372 15.6623 8.21262 15.408 8.53958L11.401 13.6914C11.3119 13.806 11.1443 13.8209 11.0364 13.7238L8.50173 11.4426C8.19385 11.1655 7.71963 11.1904 7.44254 11.4983C7.16544 11.8062 7.1904 12.2804 7.49828 12.5575L10.033 14.8387C10.7881 15.5183 11.9613 15.4143 12.585 14.6123L16.592 9.46049Z"
                                 fill="#B3CF1D" />
                           </svg>
                           <span class="text-grey flex-1">
                              {{ item }}
                           </span>
                        </li>
                        <li class="flex items-start gap-2">
                           <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd"
                                 d="M18 2H6C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2ZM16.592 9.46049C16.8463 9.13353 16.7874 8.66232 16.4605 8.40802C16.1335 8.15372 15.6623 8.21262 15.408 8.53958L11.401 13.6914C11.3119 13.806 11.1443 13.8209 11.0364 13.7238L8.50173 11.4426C8.19385 11.1655 7.71963 11.1904 7.44254 11.4983C7.16544 11.8062 7.1904 12.2804 7.49828 12.5575L10.033 14.8387C10.7881 15.5183 11.9613 15.4143 12.585 14.6123L16.592 9.46049Z"
                                 fill="#B3CF1D" />
                           </svg>
                           <span class="text-grey flex-1">Chip conveyor (two screw conveyors and one chain
                              conveyor)</span>
                        </li>
                     </ul>
                  </div>
                  <div class="flex flex-col gap-4" v-if="product.optional_key">
                     <h3 class="text-xl font-medium">
                        {{ translations['products.optional'] }}
                     </h3>
                     <ul class="flex flex-col gap-3">
                        <li class="flex items-start gap-2" v-for="(item, i) in product?.optional_key[$i18n.locale]"
                           :key="i">
                           <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd"
                                 d="M18 2H6C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2ZM16.592 9.46049C16.8463 9.13353 16.7874 8.66232 16.4605 8.40802C16.1335 8.15372 15.6623 8.21262 15.408 8.53958L11.401 13.6914C11.3119 13.806 11.1443 13.8209 11.0364 13.7238L8.50173 11.4426C8.19385 11.1655 7.71963 11.1904 7.44254 11.4983C7.16544 11.8062 7.1904 12.2804 7.49828 12.5575L10.033 14.8387C10.7881 15.5183 11.9613 15.4143 12.585 14.6123L16.592 9.46049Z"
                                 fill="#B3CF1D" />
                           </svg>
                           <span class="text-grey">
                              {{ item }}
                           </span>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </section>
         <section class="flex flex-col gap-10 my-20">
            <div class="flex items-center justify-between">
               <h2 class="text-xl md:text-3xl xl:text-4xl font-semibold">
                  {{ translations['products.other_products'] }}
               </h2>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
               <UICard v-for="(item, i) in products" :key="i" :photo="item.photo[0]" :id="item.id"
                  :title="item.title[$i18n.locale]" />
            </div>
         </section>
      </div>
      <FormContactUs />
   </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useProductsStore } from '~/stores/products.js';
import { useTranslationStore } from '~/stores/translations';

const route = useRoute();

const productsStore = useProductsStore();
const translationsStore = useTranslationStore();

const { getProductId, getProducts } = productsStore;
const { translations } = storeToRefs(translationsStore);

// swiper
const mainSwiper = ref(null);
const thumbsSwiper = ref(null);
const activeIndex = ref(0);

const setMainSwiper = (swiper) => {
   mainSwiper.value = swiper;
};
const setThumbsSwiper = (swiper) => {
   thumbsSwiper.value = swiper;
};
const onSlideChange = () => {
   activeIndex.value = mainSwiper.value.activeIndex;
};

const slug = computed(() => route.params.slug);

const { data: product } = await useAsyncData('product', () => getProductId(route.params.slug), {
   watch: [slug]
});

const { data: products } = await useAsyncData('products', getProducts);
</script>
