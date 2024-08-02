import { defineStore } from 'pinia';
import { useApi } from '@/composables/useApi';

export const useProductsStore = defineStore('products', () => {
   const api = useApi();

   async function getProducts() {
      try {
         const response = await api.get('/api/products');
         return response.data;
      } catch (error) {
         console.log(error);
      }
   }

   async function getProductId(id) {
      try {
         const response = await api.get(`api/products/${id}`);
         return response.data;
      } catch (error) {
         console.log(error);
      }
   }

   async function getProductCategoryId(params) {
      try {
         const response = await api.get(`/api/product/category/`, { params });
         return response.data;
      } catch (error) {
         console.log(error);
      }
   }

   return {
      getProducts,
      getProductId,
      getProductCategoryId
   };
});
