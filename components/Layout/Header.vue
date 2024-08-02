<template>
   <header class="sticky z-40 top-0 bg-white backdrop-blur-lg border-b border-border">
      <div class="container flex-y-center justify-between h-20 sm:h-[--header-height]">
         <NuxtLink :to="localePath('/')" class="flex-shrink-0">
            <img src="/assets/svg/logo.svg" alt="" />
         </NuxtLink>
         <nav class="hidden lg:flex items-center md:gap-4 lg:gap-6 xl:gap-10 transition-all duration-300">
            <NuxtLink :to="localePath('/')" class="text-base font-medium transition-colors hover:text-primary"> {{ translations['header.home'] }} </NuxtLink>
            <NuxtLink :to="localePath('products')" class="text-base font-medium transition-colors hover:text-primary">{{ translations['header.products'] }} </NuxtLink>
            <NuxtLink :to="localePath('leasing')" class="text-base font-medium transition-colors hover:text-primary">{{ translations['header.leasing'] }} </NuxtLink>
            <NuxtLink :to="localePath('portfolios')" class="text-base font-medium transition-colors hover:text-primary">{{ translations['header.projects'] }} </NuxtLink>
            <div class="relative">
               <div class="flex items-center gap-1 cursor-pointer" v-if="selectedLang.id === 'ru'" @click="languageDropdown = !languageDropdown">
                  <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <g clip-path="url(#clip0_467_4416)">
                        <rect width="21" height="15" rx="3" fill="#1A47B8" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10H21V15H0V10Z" fill="#F93939" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H21V5H0V0Z" fill="white" />
                     </g>
                     <defs>
                        <clipPath id="clip0_467_4416">
                           <rect width="21" height="15" rx="3" fill="white" />
                        </clipPath>
                     </defs>
                  </svg>
                  <span> Русский </span>
               </div>
               <div class="flex items-center gap-1 cursor-pointer" v-if="selectedLang.id === 'en'" @click="languageDropdown = !languageDropdown">
                  <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <g clip-path="url(#clip0_467_4415)">
                        <rect width="21" height="15" rx="3" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H9V7H0V0Z" fill="#1A47B8" />
                        <path
                           fill-rule="evenodd"
                           clip-rule="evenodd"
                           d="M9 0V1H21V0H9ZM9 2V3H21V2H9ZM9 4V5H21V4H9ZM9 6V7H21V6H9ZM0 8V9H21V8H0ZM0 10V11H21V10H0ZM0 12V13H21V12H0ZM0 14V15H21V14H0Z"
                           fill="#F93939"
                        />
                        <path
                           fill-rule="evenodd"
                           clip-rule="evenodd"
                           d="M1 1V2H2V1H1ZM3 1V2H4V1H3ZM5 1V2H6V1H5ZM7 1V2H8V1H7ZM6 2V3H7V2H6ZM4 2V3H5V2H4ZM2 2V3H3V2H2ZM1 3V4H2V3H1ZM3 3V4H4V3H3ZM5 3V4H6V3H5ZM7 3V4H8V3H7ZM1 5V6H2V5H1ZM3 5V6H4V5H3ZM5 5V6H6V5H5ZM7 5V6H8V5H7ZM6 4V5H7V4H6ZM4 4V5H5V4H4ZM2 4V5H3V4H2Z"
                           fill="white"
                        />
                     </g>
                     <defs>
                        <clipPath id="clip0_467_4415">
                           <rect width="21" height="15" rx="3" fill="white" />
                        </clipPath>
                     </defs>
                  </svg>
                  <span> English </span>
               </div>
               <transition name="fade">
                  <div class="absolute top-full -left-full translate-x-1/2 pt-3" v-if="languageDropdown">
                     <div class="bg-white border rounded-[4px] px-2">
                        <div class="flex flex-col gap-1">
                           <div class="flex items-center gap-1 cursor-pointer p-1" @click="selectLang(langs[0])">
                              <span class="flex-1">
                                 <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_467_4416)">
                                       <rect width="21" height="15" rx="3" fill="#1A47B8" />
                                       <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10H21V15H0V10Z" fill="#F93939" />
                                       <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H21V5H0V0Z" fill="white" />
                                    </g>
                                    <defs>
                                       <clipPath id="clip0_467_4416">
                                          <rect width="21" height="15" rx="3" fill="white" />
                                       </clipPath>
                                    </defs>
                                 </svg>
                              </span>
                              <span> Русский </span>
                           </div>
                           <div class="flex items-center gap-1 cursor-pointer p-1" @click="selectLang(langs[1])">
                              <span class="flex-1">
                                 <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_467_4415)">
                                       <rect width="21" height="15" rx="3" fill="white" />
                                       <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H9V7H0V0Z" fill="#1A47B8" />
                                       <path
                                          fill-rule="evenodd"
                                          clip-rule="evenodd"
                                          d="M9 0V1H21V0H9ZM9 2V3H21V2H9ZM9 4V5H21V4H9ZM9 6V7H21V6H9ZM0 8V9H21V8H0ZM0 10V11H21V10H0ZM0 12V13H21V12H0ZM0 14V15H21V14H0Z"
                                          fill="#F93939"
                                       />
                                       <path
                                          fill-rule="evenodd"
                                          clip-rule="evenodd"
                                          d="M1 1V2H2V1H1ZM3 1V2H4V1H3ZM5 1V2H6V1H5ZM7 1V2H8V1H7ZM6 2V3H7V2H6ZM4 2V3H5V2H4ZM2 2V3H3V2H2ZM1 3V4H2V3H1ZM3 3V4H4V3H3ZM5 3V4H6V3H5ZM7 3V4H8V3H7ZM1 5V6H2V5H1ZM3 5V6H4V5H3ZM5 5V6H6V5H5ZM7 5V6H8V5H7ZM6 4V5H7V4H6ZM4 4V5H5V4H4ZM2 4V5H3V4H2Z"
                                          fill="white"
                                       />
                                    </g>
                                    <defs>
                                       <clipPath id="clip0_467_4415">
                                          <rect width="21" height="15" rx="3" fill="white" />
                                       </clipPath>
                                    </defs>
                                 </svg>
                              </span>
                              <span> English </span>
                           </div>
                        </div>
                     </div>
                  </div>
               </transition>
            </div>
         </nav>
         <button class="lg:hidden flex items-center justify-center w-10 h-10 rounded-sm border" @click="navigationDrawer = true">
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.33333 15.7012H16.6667C17.125 15.7012 17.5 15.3262 17.5 14.8678C17.5 14.4095 17.125 14.0345 16.6667 14.0345H3.33333C2.875 14.0345 2.5 14.4095 2.5 14.8678C2.5 15.3262 2.875 15.7012 3.33333 15.7012ZM3.33333 11.5345H16.6667C17.125 11.5345 17.5 11.1595 17.5 10.7012C17.5 10.2428 17.125 9.86784 16.6667 9.86784H3.33333C2.875 9.86784 2.5 10.2428 2.5 10.7012C2.5 11.1595 2.875 11.5345 3.33333 11.5345ZM2.5 6.53451C2.5 6.99284 2.875 7.36784 3.33333 7.36784H16.6667C17.125 7.36784 17.5 6.99284 17.5 6.53451C17.5 6.07617 17.125 5.70117 16.6667 5.70117H3.33333C2.875 5.70117 2.5 6.07617 2.5 6.53451Z"
                  fill="#969696"
               ></path>
            </svg>
         </button>
      </div>
   </header>
   <LayoutNavigationDrawer @closeNavigationDrawer="closeDrawer" :open="navigationDrawer" />
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useTranslationStore } from '~/stores/translations.js';

const localePath = useLocalePath();

const { setLocale, locale } = useI18n();

const translationsStore = useTranslationStore();

const { translations } = storeToRefs(translationsStore);

const route = useRoute();

const navigationDrawer = ref(false);

const languageDropdown = ref(false);

const langs = [
   {
      id: 'ru',
      label: 'Русский'
   },
   {
      id: 'en',
      label: 'English'
   }
];

const selectedLang = ref(langs.find((lang) => lang.id === locale.value));

const selectLang = (lang) => {
   selectedLang.value = lang;
   setLocale(lang.id);
   languageDropdown.value = false;
};

function closeDrawer() {
   navigationDrawer.value = false;
}

watch(selectedLang, (newVal) => {
   setLocale(newVal.id);
});

watch(navigationDrawer, () => {
   if (navigationDrawer.value) {
      document.documentElement.style.overflow = 'hidden';
   } else {
      document.documentElement.style.overflow = 'auto';
   }
});

watch(route, () => {
   navigationDrawer.value = false;
});

watch(
   () => window.innerWidth,
   (newWidth) => {
      if (newWidth >= 768) {
         navigationDrawer.value = false;
         document.body.style.overflow = 'auto';
      }
   }
);

onMounted(() => {
   if (process.client) {
      window.addEventListener('resize', () => {
         if (window.innerWidth >= 768) {
            navigationDrawer.value = false;
            document.body.style.overflow = 'auto';
         }
      });
   }
});
</script>

<style scoped>
.router-link-exact-active {
   color: var(--primary);
}

.fade-enter-active,
.fade-leave-active {
   transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
   opacity: 0;
}
</style>
