<template>
   <NuxtLink :to="localePath(`/product/${id}`)" class="bg-white rounded flex flex-col items-start cursor-pointer transition-300 h-full w-full gap-2 md:gap-4 group">
      <div class="p-6 border rounded flex items-center justify-center w-full">
         <img
            :src="`${useRuntimeConfig().public.apiBaseUrl}/site/images/products/${photo}`"
            alt=""
            class="w-[350px] h-[230px] object-contain group-hover:scale-105 transition-300"
         />
      </div>
      <p class="text-lg">
         {{ title }}
      </p>
   </NuxtLink>
</template>

<script setup>
const localePath = useLocalePath();

const props = defineProps({
   id: Number,
   title: String,
   subtitle: String,
   photo: String
});
</script>
