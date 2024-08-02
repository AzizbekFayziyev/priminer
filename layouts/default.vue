<template>
   <div class="flex min-h-screen flex-col">
      <LayoutHeader />
      <div class="flex-1">
         <slot />
      </div>
      <LayoutFooter />
   </div>
</template>

<script setup>
import { useTranslationStore } from '~/stores/translations.js';

const { locale } = useI18n();

const translationsStore = useTranslationStore();

const { getTranslation } = translationsStore;
const { translations } = storeToRefs(translationsStore);

const { data } = await useAsyncData(
   'translations',
   () => {
      return getTranslation();
   },
   { watch: [locale] }
);
</script>
