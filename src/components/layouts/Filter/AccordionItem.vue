<script setup>
import { useId } from "vue";
import { ChevronDownIcon } from "@heroicons/vue/24/outline";
defineProps({
  title: {
    type: String,
    required: true,
  },
  isInitOpen: {
    type: Boolean,
    default: false,
  },
  textClasses: {
    type: String,
    default: undefined,
  },
});

const id = useId();
</script>

<template>
  <div
    :class="`hs-accordion${isInitOpen ? ' active' : ''}`"
    :id="`${id}-heading`"
  >
    <button
      :class="`hs-accordion-toggle py-3 inline-flex items-center justify-between gap-x-3 w-full text-start rounded-lg disabled:opacity-50 disabled:pointer-events-none focus:outline-none ${
        textClasses ||
        'hs-accordion-active:text-blue-600 focus:text-blue-600 font-semibold text-gray-700 hover:text-gray-800'
      }`"
      aria-expanded="true"
      :aria-controls="`${id}-collapse`"
    >
      <span>{{ title }}</span>
      <ChevronDownIcon
        class="block hs-accordion-active:rotate-180 duration-150 transition-transform ease-in-out size-4 shrink-0"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </button>
    <div
      :id="`${id}-collapse`"
      :class="`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${
        isInitOpen ? '' : 'hidden'
      }`"
      role="region"
      :aria-labelledby="`${id}-heading`"
    >
      <slot></slot>
    </div>
  </div>
</template>
