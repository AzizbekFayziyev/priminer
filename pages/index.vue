<template>
   <div>
      <AboutSwiperImage :banners="data.banners" />
      <AboutCompanyInfo :partners="data.partners" />
      <SectionProducts :products="data.products" />
      <SectionOurWork :galeries="data.galeries" />
      <FormContactUs />
   </div>
</template>

<script setup>
import { useMainStore } from '~/stores/main.js';
import { useProductsStore } from '~/stores/products.js';

const mainStore = useMainStore();
const productsStore = useProductsStore();

const { getBanners, getPartners, getGaleries } = mainStore;
const { getProducts } = productsStore;

const { data } = await useAsyncData('main', async () => {
   const [banners, partners, galeries, products] = await Promise.all([getBanners(), getPartners(), getGaleries(), getProducts()]);

   return { banners, partners, galeries, products };
});
// Seo
useHead(() => {
   return {
      title: 'HOME | Priminer',
      meta: [
         {
            name: 'description',
            content: 'Компания PRIMINER была основана в 2001 году командой технических специалистов, имеющих 20-летний опыт в области станкостроения. Сегодня PRIMINER является одним из самых динамично-развивающихся производителей обрабатывающих центров в мире, качество которого известно на 5 континентах. Наш завод расположен в провинции Гуандун (Китай), в городе Дунгуань, примерно в 1 часе езды от портов Шэньчжэня и Гонконга. Общая производственная площадь завода 13 000 кв. м. Компаний PRIMINER имеет в штате сотрудников, владеющих 11 языками.'
         },
         {
            name: 'keywords',
            content: 'PRIMINER, станкостроение, обрабатывающие центры, производители станков, производители обрабатывающих центров, технические специалисты, станки Гуандун, станки Дунгуань, завод PRIMINER, производственная площадь 13000 кв.м, динамично-развивающийся производитель станков, качественные обрабатывающие центры, оборудование для обрабатывающих центров, обрабатывающие центры мирового уровня, производители станков Гуандун, производители станков Дунгуань, технические специалисты станкостроения, станки для промышленности, инновационные станки, станки высокого качества, производство станков, китайские производители станков, станкостроение Китай, PRIMINER обрабатывающие центры, PRIMINER оборудование, PRIMINER завод, станкостроение мирового уровня, сотрудники PRIMINER, мультилингвальная команда, PRIMINER 20 лет опыта'
         },
         {
            name: "google-site-verification",
            content: "OoWFQgjHnQy1bNATP3tPF7ooCqMJfvohKyCbHKFbaGQ"
         }
      ]
   };
});
</script>
