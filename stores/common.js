import { defineStore } from 'pinia';
import { useApi } from '@/composables/useApi';

export const useCommonStore = defineStore('common', () => {
   const api = useApi();

   async function getTranslations() {
      try {
         const response = await api.get('/api/translations');
         return response.data;
      } catch (error) {
         console.log(error);
      }
   }

   return { getTranslations };
});
