import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import UIToast from '~/components/Common/Toast.vue';

const options = {
   hideProgressBar: true,
   closeButton: false,
   icon: false,
   component: UIToast
};

export default defineNuxtPlugin((nuxtApp) => {
   nuxtApp.vueApp.use(Toast, options);
});
