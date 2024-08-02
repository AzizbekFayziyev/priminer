<template>
   <div class="mt-20">
      <div class="container max-w-[1200px] w-full">
         <div class="flex flex-col items-center mx-auto gap-4 max-w-[900px]">
            <h2 class="text-xl md:text-3xl xl:text-[40px] font-medium">
               {{ translations['leasing.title'] }}
            </h2>
            <span class="text-base text-grey text-center">
               {{ translations['leasing.subtitle1'] }}
            </span>
            <span class="text-base text-grey text-center">
               {{ translations['leasing.subtitle2'] }}
            </span>
            <div class="flex flex-col gap-6 mt-6">
               <span class="text-base text-grey"> 1. {{ translations['leasing.text1'] }} </span>
               <span class="text-base text-grey"> 2. {{ translations['leasing.text2'] }} </span>
               <span class="text-base text-grey"> 3. {{ translations['leasing.text3'] }} </span>
               <span class="text-base text-grey"> 4. {{ translations['leasing.text4'] }} </span>
               <span class="text-base text-grey"> 5. {{ translations['leasing.text5'] }} </span>
               <span class="text-base text-grey"> 6. {{ translations['leasing.text6'] }} </span>
            </div>
         </div>
         <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-x-32 gap-y-2 mt-12 mb-20">
            <img src="/assets/images/ImageL1.png" alt="" />
            <img src="/assets/images/Abcfinance-logo.png" alt="" />
         </div>
      </div>
      <FormContactUs />
   </div>
</template>

<script setup>
import { useTranslationStore } from '~/stores/translations';

const translationsStore = useTranslationStore();
const { translations } = storeToRefs(translationsStore);

// Seo
useHead(() => {
   return {
      title: 'LEASING | Priminer',
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
</script>
