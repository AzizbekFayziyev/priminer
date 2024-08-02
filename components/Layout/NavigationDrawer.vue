<template>
   <div>
      <div class="fixed top-0 right-0 lg:hidden h-screen w-3/4 z-[9999] bg-white p-4 border-r sm:max-w-sm pr-0 transition-300" :class="open ? 'translate-x-0' : 'translate-x-full'">
         <div class="flex flex-col gap-6">
            <div class="flex items-center justify-between gap-2">
               <NuxtLink to="/">
                  <img src="/assets/svg/logo.svg" alt="" class="w-[200px]" />
               </NuxtLink>
               <button class="flex items-center justify-center h-8 w-8 border rounded-tl-sm rounded-bl-sm" @click="closeDrawer">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.2501 4.75794C14.9251 4.43294 14.4001 4.43294 14.0751 4.75794L10.0001 8.82461L5.9251 4.74961C5.6001 4.42461 5.0751 4.42461 4.7501 4.74961C4.4251 5.07461 4.4251 5.59961 4.7501 5.92461L8.8251 9.99961L4.7501 14.0746C4.4251 14.3996 4.4251 14.9246 4.7501 15.2496C5.0751 15.5746 5.6001 15.5746 5.9251 15.2496L10.0001 11.1746L14.0751 15.2496C14.4001 15.5746 14.9251 15.5746 15.2501 15.2496C15.5751 14.9246 15.5751 14.3996 15.2501 14.0746L11.1751 9.99961L15.2501 5.92461C15.5668 5.60794 15.5668 5.07461 15.2501 4.75794Z"
                        fill="#969696"
                     ></path>
                  </svg>
               </button>
            </div>
            <div class="flex flex-col relative overflow-hidden h-[calc(100vh-8rem)]">
               <nav class="h-full w-full flex-1 flex flex-col rounded-md bg-white p-1" style="overflow: hidden scroll">
                  <NuxtLink :to="localePath('/')" class="rounded-[4px] px-4 py-2 text-base transition-colors hover:text-primary hover:bg-gray-100"> Home </NuxtLink>
                  <NuxtLink :to="localePath('/products')" class="rounded-[4px] px-4 py-2 text-base transition-colors hover:text-primary hover:bg-gray-100"> Products </NuxtLink>
                  <NuxtLink :to="localePath('/leasing')" class="rounded-[4px] px-4 py-2 text-base transition-colors hover:text-primary hover:bg-gray-100">
                     Financing / leasing
                  </NuxtLink>
                  <NuxtLink :to="localePath('/portfolios')" class="rounded-[4px] px-4 py-2 text-base transition-colors hover:text-primary hover:bg-gray-100">
                     Our projects
                  </NuxtLink>
               </nav>
               <div class="flex flex-col gap-6">
                  <div class="flex items-center justify-between cursor-pointer" @click="selectLang(langs[0])">
                     <div class="flex items-center gap-2">
                        <span>
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
                     <span>
                        <svg v-if="selectedLang.id === 'en'" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <rect x="7" y="7" width="18" height="18" rx="9" fill="white" stroke="#EBEBEB" />
                           <circle cx="16.005" cy="16.005" r="0.005" fill="#EBEBEB" />
                        </svg>
                        <svg v-else width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <rect x="7" y="7" width="18" height="18" rx="9" fill="white" stroke="#089E5F" />
                           <circle cx="16" cy="16" r="5" fill="#089E5F" />
                        </svg>
                     </span>
                  </div>
                  <div class="flex items-center justify-between cursor-pointer" @click="selectLang(langs[1])">
                     <div class="flex items-center gap-2">
                        <span>
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
                     <span>
                        <svg v-if="selectedLang.id === 'ru'" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <rect x="7" y="7" width="18" height="18" rx="9" fill="white" stroke="#EBEBEB" />
                           <circle cx="16.005" cy="16.005" r="0.005" fill="#EBEBEB" />
                        </svg>
                        <svg v-else width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <rect x="7" y="7" width="18" height="18" rx="9" fill="white" stroke="#089E5F" />
                           <circle cx="16" cy="16" r="5" fill="#089E5F" />
                        </svg>
                     </span>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="fixed inset-0 lg:hidden h-screen w-full z-[49] bg-[#000c]" @click="closeDrawer" :class="open ? 'opacity-100 visible' : 'opacity-0 hidden '"></div>
   </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
   open: {
      type: Boolean
   }
});

const localePath = useLocalePath();

const { setLocale, locale } = useI18n();

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
};

const emit = defineEmits(['closeNavigationDrawer']);

function closeDrawer() {
   emit('closeNavigationDrawer');
}

onBeforeUnmount(() => {
   document.body.style.overflow = 'auto';
});
</script>

<style scoped>
.router-link-exact-active {
   color: var(--primary);
   background-color: #f3f4f6;
}
</style>
