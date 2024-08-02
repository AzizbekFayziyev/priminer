<template>
   <div>
      <client-only>
         <input
            :id="placeholder"
            :placeholder="placeholder"
            :maxlength="max"
            class="w-full bg-[#EFF0EB] text-gray-800 border-2 text-sm border-[#EFF0EB] rounded-xl py-3.5 px-3 placeholder-gray-500 focus:outline-none"
            @focus="isFocused = true"
            @blur="isFocused = false"
            :class="isFocused ? 'border-gray-900' : ''"
            :type="inputType"
            v-model="inputComputed"
            autocomplete="off"
         />
      </client-only>
      <span v-if="error" class="text-red-500 text-[14px] font-semibold">
         {{ error }}
      </span>
   </div>
</template>

<script setup>
import { ref, computed, toRefs } from 'vue';

const emit = defineEmits(['update:input']);
const props = defineProps({
   input: {
      type: String,
      default: ''
   },
   placeholder: {
      type: String,
      default: ''
   },
   max: {
      type: [Number, String],
      default: 255
   },
   inputType: {
      type: String,
      default: 'text'
   },
   error: {
      type: String,
      default: ''
   }
});
const { input, placeholder, max, inputType, error } = toRefs(props);

let isFocused = ref(false);

const inputComputed = computed({
   get: () => input.value,
   set: (val) => emit('update:input', val)
});
</script>
