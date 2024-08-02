import { defineStore } from 'pinia';
import { useApi } from '@/composables/useApi';

export const useCategoriesStore = defineStore('categories', () => {
   const api = useApi();

   const getProductsCategories = async () => {
      try {
         const response = await api.get('/api/product-categories/');
         return response.data;
      } catch (error) {
         console.log(error);
      }
   };

   const getProductsCategoriesId = async (id) => {
      try {
         const response = await api.get(`/api/product-categories/${id}`);
         return response.data;
      } catch (error) {
         console.log(error);
      }
   };

   return {
      getProductsCategories,
      getProductsCategoriesId
   };
});
