<script setup>
import { computed, useId } from "vue";

const props = defineProps({
  name: {
    type: String,
    default: "Button",
  },
  type: {
    type: String,
    default: "primary",
  },
  isSubmit: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: [Function, Object],
    default: null,
  },
  btnClass: {
    type: String,
    default: undefined,
  },
  bgClass: {
    type: String,
    default: undefined,
  },
  iconClass: {
    type: String,
    default: undefined,
  },
  textClass: {
    type: String,
    default: undefined,
  },
});

const id = useId();

const btnClasses = computed(() => {
  const textClass = props.textClass || "font-medium text-sm sm:text-base";
  const baseClass =
    "flex flex-row items-center justify-between gap-x-4 sm:gap-x-2 border transition-all duration-200 ease-in-out";
  const btnClass =
    props.btnClass || "p-2 md:px-4 shadow-sm rounded sm:rounded-lg w-full";
  const type = {
    primary:
      props.bgClass || "bg-gray-900 hover:bg-black border-black text-white",
    secondary:
      props.bgClass ||
      "bg-white border-gray-400 hover:bg-gray-50 text-gray-900 hover:text-black",
  };

  return `${baseClass} ${btnClass} ${type[props.type]} ${textClass}`;
});
</script>
<template>
  <button :type="isSubmit ? 'submit' : 'button'" :class="btnClasses" :id="id">
    <component
      :is="icon"
      v-if="icon"
      :class="iconClass"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <slot></slot>
  </button>
</template>
