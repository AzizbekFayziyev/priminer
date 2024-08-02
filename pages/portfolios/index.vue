<template>
   <div class="mt-20">
      <div class="container flex flex-col gap-20 mb-20">
         <h2 class="text-2xl md:text-3xl xl:text-4xl text-center font-semibold">
            {{ translations['projects.title'] }}
         </h2>
         <section class="flex flex-col gap-6">
            <div
               class="flex border rounded overflow-hidden flex-col lg:items-center lg:flex-row lg:even:flex-row-reverse max-w-[1200px] w-full mx-auto"
               v-for="(item, i) in portfolios"
               :key="i"
            >
               <div class="flex items-stretch lg:max-w-[530px] sm:h-[350px] lg:h-[400px] w-full">
                  <img :src="`${useRuntimeConfig().public.apiBaseUrl}/storage/${item.photo}`" alt="Heroku" loading="lazy" class="h-full w-full object-cover" />
               </div>
               <div class="p-4 xl:p-10 lg:w-[calc(100%-530px)]">
                  <h4 class="text-lg mb-4">
                     {{ item.title[$i18n.locale] }}
                  </h4>
                  <div class="text-grey text-lg mb-10" v-html="item.descriptions[$i18n.locale]"></div>
               </div>
            </div>
         </section>
      </div>
      <FormContactUs />
   </div>
</template>

<script setup>
import { useTranslationStore } from '~/stores/translations.js';
import { usePortfolioStore } from '~/stores/portfolio.js';

const translationsStore = useTranslationStore();
const portfolioStore = usePortfolioStore();

const { translations } = storeToRefs(translationsStore);
const { getPortfolios } = portfolioStore;

const { data: portfolios } = await useAsyncData('portfolios', async () => {
   return await getPortfolios();
});
// Seo
useHead(() => {
   return {
      title: 'PORTFOLIOS | Priminer',
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
