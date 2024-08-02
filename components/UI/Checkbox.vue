<template>
   <label class="group inline-flex items-center relative select-none min-h-6 cursor-pointer">
      <input type="checkbox" class="absolute opacity-0 invisible h-0 w-0 peer" :disabled="disabled" :checked="modelValue" @change="toggle" />
      <span
         class="duration-200 ease-in-out inline-block h-6 w-6 rounded-[4px] border-2 border-secondary peer-checked:-rotate-90 peer-checked:after:opacity-100 peer-checked:after:rotate-[138deg] after:transition-all after:duration-200 after:absolute after:left-2 after:top-1 after:w-[7px] after:h-3 after:border-r-[2.2px] after:border-b-[2.2px] after:rotate-[0deg] after:opacity-0 peer-checked:bg-primary border-grey-100 peer-checked:border-secondary after:border-white peer-disabled:border-grey-100 peer-disabled:after:border-grey-100 group-hover:border-secondary shrink-0"
      ></span>
      <span class="ml-2">
         <slot />
      </span>
   </label>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
   modelValue: {
      type: Boolean,
      default: false
   },
   disabled: {
      type: Boolean,
      default: false
   }
});

const emit = defineEmits(['update:modelValue']);

const toggle = (event) => {
   emit('update:modelValue', event.target.checked);
};
</script>
