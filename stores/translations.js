import { defineStore } from 'pinia';
import { useI18n } from 'vue-i18n';

export const useTranslationStore = defineStore('translations', () => {
   const api = useApi();
   const { locale } = useI18n();

   const translations = ref({});

   async function getTranslation() {
      try {
         let res = await api.get(`api/translations/${locale.value}`);
         translations.value = res.data;
      } catch (error) {
         console.log(error);
      }
   }
   return {
      getTranslation,
      translations
   };
});
