import axios from 'axios';

export const useApi = () => {
   const nuxtApp = useNuxtApp();

   const config = useRuntimeConfig();
   const api = axios.create({
      headers: { 'Content-Type': 'application/json' },
      timeout: 10000
   });

   api.defaults.baseURL = config.public.apiBaseUrl;

   api.interceptors.request.use(
      (config) => {
         config.headers['Language'] = nuxtApp.$i18n.locale;
         return config;
      },
      (error) => Promise.reject(error)
   );

   api.interceptors.response.use(
      (response) => {
         return response;
      },
      (error) => {
         return Promise.reject(error);
      }
   );

   return api;
};
