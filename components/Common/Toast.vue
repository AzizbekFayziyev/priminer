<template>
   <div class="relative flex items-center justify-between bg-transparent z-50">
      <div class="flex-y-center pl-3 py-5">
         <div class="ml-2">
            <h2 class="text-white font-medium text-base leading-130">
               {{ text }}
            </h2>
         </div>
      </div>
      <span class="m-3 text-xl text-gray hover:text-gray-100 cursor-pointer transition-300">
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.2426 7.75738L7.75732 16.2427M16.2426 16.2426L7.75732 7.75732" stroke="#ffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
         </svg>
      </span>
   </div>
</template>

<script setup>
defineProps({
   text: {
      type: String,
      required: true
   },
   type: {
      type: String,
      required: true
   }
});
</script>

<style>
.Vue-Toastification__toast {
   display: flex;
   align-items: flex-start;
   justify-content: space-between !important;
   background: #151516cc !important;
   border-radius: 12px !important;
   box-shadow: 0 8px 20px #121c2529 !important;
   min-height: auto !important;
   overflow: visible !important;
   padding: 0 !important;
   backdrop-filter: blur(12px);
}
</style>
