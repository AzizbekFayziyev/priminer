<template>
   <div class="mt-20">
      <div class="container flex flex-col gap-20">
         <h2 class="text-2xl md:text-3xl xl:text-4xl text-center font-semibold">
            {{ translations['products.title'] }}
         </h2>
         <div class="grid grid-cols-1 gap-10 lg:grid-cols-7">
            <div class="lg:col-span-2 hidden lg:block">
               <div class="sticky top-32 h-full max-h-[calc(100vh-100px)] pb-4 shrink-0 overflow-x-clip overflow-y-scroll">
                  <div class="flex flex-col gap-8 border-r">
                     <h3 class="text-2xl font-medium">{{ translations['products.product_us'] }}</h3>
                     <ul class="flex flex-col gap-8 max-w-[370px] w-full">
                        <li
                           class="text-grey text-base xl:text-lg hover:text-primary transition-300 cursor-pointer"
                           v-for="(item, i) in categories"
                           :key="i"
                           :class="{ 'text-primary': item.id === Number(currentCategory) }"
                           @click="navigateToCategory(item.id)"
                        >
                           {{ item.title[$i18n.locale] }}
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
            <div class="lg:col-span-5">
               <div class="flex flex-col gap-10">
                  <div class="flex flex-col gap-6">
                     <div class="flex items-center justify-center w-full">
                        <h3 class="text-xl sm:text-2xl font-medium flex-1">{{ categoriesId.title[$i18n.locale] }}</h3>
                        <button class="flex items-center justify-center lg:hidden" @click="categoryModal = true">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                              <path d="M2.5 5.5H8.33333" stroke="#353437" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M2.5 10.5H10" stroke="#353437" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M15.8333 10.5H17.5" stroke="#353437" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M11.6667 5.5L17.5 5.5" stroke="#353437" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M10.8333 15.5L16.6666 15.5" stroke="#353437" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M2.5 15.5H5" stroke="#353437" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                              <circle cx="6.66667" cy="15.5002" r="1.66667" stroke="#353437" stroke-width="1.5" />
                              <ellipse cx="14.1667" cy="10.5002" rx="1.66667" ry="1.66667" stroke="#353437" stroke-width="1.5" />
                              <ellipse cx="9.99998" cy="5.50016" rx="1.66667" ry="1.66667" stroke="#353437" stroke-width="1.5" />
                           </svg>
                        </button>
                     </div>
                     <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div v-for="(item, i) in productCategories" data-aos="fade-up">
                           <UICard :key="i" :photo="item?.photo[0]" :id="item?.id" :title="item.title[$i18n.locale]" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="fixed bottom-0 inset-x-0 lg:hidden h-full w-full z-[9999] bg-white border-t p-4 transition-300" :class="categoryModal ? ' translate-y-0' : ' translate-y-full'">
         <button class="flex justify-end w-full" @click="categoryModal = false">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M13.5355 6.4644L6.46448 13.5355M13.5355 13.5354L6.46448 6.46436" stroke="#020105" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
         </button>
         <div class="relative overflow-hidden h-full py-4">
            <ul class="flex flex-col gap-8 w-full h-full" style="overflow: hidden scroll">
               <li
                  class="text-grey text-base xl:text-lg hover:text-primary transition-300 cursor-pointer"
                  v-for="(item, i) in categories"
                  :key="i"
                  :class="{ 'text-primary': item.id === Number(currentCategory) }"
                  @click="navigateToCategory(item.id)"
               >
                  {{ item.title[$i18n.locale] }}
               </li>
            </ul>
         </div>
      </div>
   </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useProductsStore } from '~/stores/products.js';
import { useCategoriesStore } from '~/stores/categories.js';
import { useTranslationStore } from '~/stores/translations';

// Seo
useHead(() => {
   return {
      title: 'PRODUCTS | Priminer',
      meta: [
         {
            name: 'description',
            content: 'Компания PRIMINER была основана в 2001 году командой технических специалистов, имеющих 20-летний опыт в области станкостроения. Сегодня PRIMINER является одним из самых динамично-развивающихся производителей обрабатывающих центров в мире, качество которого известно на 5 континентах. Наш завод расположен в провинции Гуандун (Китай), в городе Дунгуань, примерно в 1 часе езды от портов Шэньчжэня и Гонконга. Общая производственная площадь завода 13 000 кв. м. Компаний PRIMINER имеет в штате сотрудников, владеющих 11 языками.'
         },
         {
            name: 'keywords',
            content: 'PRIMINER, станкостроение, обрабатывающие центры, производители станков, производители обрабатывающих центров, технические специалисты, станки Гуандун, станки Дунгуань, завод PRIMINER, производственная площадь 13000 кв.м, динамично-развивающийся производитель станков, качественные обрабатывающие центры, оборудование для обрабатывающих центров, обрабатывающие центры мирового уровня, производители станков Гуандун, производители станков Дунгуань, технические специалисты станкостроения, станки для промышленности, инновационные станки, станки высокого качества, производство станков, китайские производители станков, станкостроение Китай, PRIMINER обрабатывающие центры, PRIMINER оборудование, PRIMINER завод, станкостроение мирового уровня, сотрудники PRIMINER, мультилингвальная команда, PRIMINER 20 лет опыта'
         },
      ]
   };
});

const route = useRoute();
const currentCategory = ref(null);
const categoryModal = ref(false);

const productsStore = useProductsStore();
const categoriesStore = useCategoriesStore();
const translationsStore = useTranslationStore();

const { getProductCategoryId } = productsStore;
const { getProductsCategories, getProductsCategoriesId } = categoriesStore;
const { translations } = storeToRefs(translationsStore);

const navigateToCategory = (categoryId) => {
   navigateTo({ query: { categoryId } });
   categoryModal.value = false;
};

watch(
   () => route.query.categoryId,
   (newCategoryId) => {
      currentCategory.value = newCategoryId;
      categoryModal.value = false;
   },
   { immediate: true }
);

watch(categoryModal, () => {
   if (categoryModal.value) {
      document.documentElement.style.overflow = 'hidden';
   } else {
      document.documentElement.style.overflow = 'auto';
   }
});

const { data: categories } = await useAsyncData('categories', async () => {
   return await getProductsCategories();
});

currentCategory.value = route.query?.categoryId || categories.value?.[0]?.id;

const { data: categoriesId } = await useAsyncData(
   'categoriesId',
   async () => {
      return await getProductsCategoriesId(currentCategory.value);
   },
   {
      watch: [() => route.query.categoryId]
   }
);

const { data: productCategories } = await useAsyncData(
   'product-categories',
   async () => {
      if (currentCategory.value || route.query.categoryId) {
         return await getProductCategoryId({
            product_category_id: currentCategory.value
         });
      }
   },
   {
      watch: [() => route.query.categoryId]
   }
);
</script>
