<template>
   <footer class="bg-background py-[80px]">
      <div class="container flex flex-col gap-6 sm:gap-10">
         <h1 class="font-semibold text-2xl md:text-3xl xl:text-4xl">
            {{ translations['main.contact_us'] }}
         </h1>
         <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="flex flex-col gap-4 sm:gap-8 bg-white rounded p-4 sm:p-8">
               <h3 class="text-xl font-medium">
                  {{ translations['footer.contacts.title1'] }}
               </h3>
               <div class="grid grid-cols-2 gap-4 sm:gap-y-8 sm:gap-x-6">
                  <div class="flex flex-col gap-2">
                     <p class="font-medium">{{ translations['footer.contacts.location'] }}</p>
                     <p>
                        {{ translations['footer.contacts.location1'] }}
                     </p>
                  </div>
                  <div class="flex flex-col gap-2">
                     <p class="font-medium">E-mail</p>
                     <a href="#"> {{ translations['footer.contacts.email1'] }} </a>
                  </div>
                  <div class="flex flex-col gap-2">
                     <p class="font-medium">{{ translations['footer.contacts.tel'] }}</p>
                     <a :href="`tel:${translations['footer.contacts.phone1']}`">
                        {{ translations['footer.contacts.phone1'] }}
                     </a>
                  </div>

                  <!-- <div class="flex flex-col gap-2">
                     <p class="font-medium">Время работы</p>
                     <p>с 9:00 до 18:00 (пн-пт)</p>
                  </div> -->
               </div>
               <div style="position: relative; overflow: hidden">
                  <iframe
                     src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2995.5995244308333!2d69.17259807582508!3d41.33932097130601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDIwJzIxLjYiTiA2OcKwMTAnMzAuNiJF!5e0!3m2!1sru!2s!4v1721582364381!5m2!1sru!2s"
                     width="600"
                     height="350"
                     style="border: 0"
                     allowfullscreen=""
                     loading="lazy"
                     referrerpolicy="no-referrer-when-downgrade"
                     class="sm:h-[280px] rounded"
                  ></iframe>
               </div>
            </div>
            <div class="flex flex-col gap-4 sm:gap-8 bg-white rounded p-4 sm:p-8">
               <h3 class="text-xl font-medium">
                  {{ translations['footer.contacts.title2'] }}
               </h3>
               <div class="grid grid-cols-2 gap-4 sm:gap-y-8 sm:gap-x-6">
                  <div class="flex flex-col gap-2">
                     <p class="font-medium">{{ translations['footer.contacts.location'] }}</p>
                     <p>
                        {{ translations['footer.contacts.location2'] }}
                     </p>
                  </div>
                  <div class="flex flex-col gap-2">
                     <p class="font-medium">E-mail</p>
                     <a href="#"> {{ translations['footer.contacts.email2'] }} </a>
                  </div>
                  <div class="flex flex-col gap-2">
                     <p class="font-medium">{{ translations['footer.contacts.tel'] }}</p>
                     <a :href="`tel:${translations['footer.contacts.phone2']}`">
                        {{ translations['footer.contacts.phone2'] }}
                     </a>
                  </div>
                  <div class="flex flex-col gap-2">
                     <p class="font-medium">{{ translations['footer.contacts.fax'] }}</p>
                     <a :href="`tel:${translations['footer.contacts.fax2']}`">
                        {{ translations['footer.contacts.fax2'] }}
                     </a>
                  </div>
                  <!-- <div class="flex flex-col gap-2">
                     <p class="font-medium">Время работы</p>
                     <p>с 9:00 до 18:00 (пн-пт)</p>
                  </div> -->
               </div>
               <div style="position: relative; overflow: hidden" class="rounded">
                  <iframe
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1014.2927994315638!2d10.005138982857568!3d54.085393629341844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b24a28999215ab%3A0xfab9e2fbb532f767!2sPRIMINER%20GERMANY!5e0!3m2!1sru!2s!4v1721582222565!5m2!1sru!2s"
                     width="600"
                     height="350"
                     style="border: 0"
                     allowfullscreen=""
                     loading="lazy"
                     referrerpolicy="no-referrer-when-downgrade"
                     class="sm:h-[280px] rounded"
                  ></iframe>
               </div>
            </div>
            <div class="flex flex-col gap-4 sm:gap-8 bg-white rounded p-4 sm:p-8">
               <h3 class="text-xl font-medium">
                  {{ translations['footer.contacts.title3'] }}
               </h3>
               <div class="grid grid-cols-2 gap-4 sm:gap-y-8 sm:gap-x-6">
                  <div class="flex flex-col gap-2">
                     <p class="font-medium">{{ translations['footer.contacts.location'] }}</p>
                     <p>
                        {{ translations['footer.contacts.location3'] }}
                     </p>
                  </div>
                  <div class="flex flex-col gap-2">
                     <p class="font-medium">E-mail</p>
                     <a href="#"> {{ translations['footer.contacts.email3'] }} </a>
                  </div>
                  <div class="flex flex-col gap-2">
                     <p class="font-medium">{{ translations['footer.contacts.tel'] }}</p>
                     <a :href="`tel:${translations['footer.contacts.phone3']}`">
                        {{ translations['footer.contacts.phone3'] }}
                     </a>
                  </div>
                  <div class="flex flex-col gap-2">
                     <p class="font-medium">{{ translations['footer.contacts.fax'] }}</p>
                     <a :href="`tel:${translations['footer.contacts.fax3']}`">
                        {{ translations['footer.contacts.fax3'] }}
                     </a>
                  </div>
                  <!-- <div class="flex flex-col gap-2">
                     <p class="font-medium">Время работы</p>
                     <p>с 9:00 до 18:00 (пн-пт)</p>
                  </div> -->
               </div>
               <div style="position: relative; overflow: hidden" class="rounded">
                  <iframe
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.600458577034!2d113.96469407502275!3d22.8172639793182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403855a416d16dd%3A0xce3502240dd8aa1c!2sHengyi%20Industrial%20Park!5e0!3m2!1sru!2s!4v1720439859437!5m2!1sru!2s"
                     width="600"
                     height="350"
                     style="border: 0"
                     allowfullscreen=""
                     loading="lazy"
                     referrerpolicy="no-referrer-when-downgrade"
                     class="sm:h-[280px] rounded"
                  ></iframe>
               </div>
            </div>
         </div>
      </div>
   </footer>
</template>

<script setup>
import { useTranslationStore } from '~/stores/translations';

const translationsStore = useTranslationStore();
const { translations } = storeToRefs(translationsStore);
</script>
