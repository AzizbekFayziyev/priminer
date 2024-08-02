import { defineStore } from 'pinia';
import { useApi } from '@/composables/useApi';
import { useCustomToast } from '@/composables/useCustomToast';

export const useAplicationStore = defineStore('aplication', () => {
   const api = useApi();
   const { showToast } = useCustomToast();

   const loading = ref(false);

   async function sendAplication(params) {
      loading.value = true;
      try {
         const response = await api.post('api/zayavkas', params);
         if (response.status === 201) {
            showToast('Arizangiz yuborildi', 'success');
         }
      } catch (error) {
         showToast('Xatolik sodir boldi', 'error');
      } finally {
         loading.value = false;
      }
   }

   return {
      sendAplication
   };
});
