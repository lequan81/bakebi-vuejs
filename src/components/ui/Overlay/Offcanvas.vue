<script setup>
import { computed } from "vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
  name: {
    type: String,
    default: "Offcanvas",
  },
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: undefined,
  },
  placements: {
    type: Object,
    default: { xAxis: "left", yAxis: "full" },
  },
  isFullHeight: {
    type: Boolean,
    default: false,
  },
});

const overlayClasses = computed(() => {
  const { xAxis, yAxis } = props.placements;
  const baseClasses =
    "hs-overlay hidden fixed transition-all duration-300 transform z-[80] bg-white border border-e";

  const xAxisClasses = {
    left: "start-0 -translate-x-full hs-overlay-open:translate-x-0",
    right: "end-0 translate-x-full hs-overlay-open:translate-x-0",
    center: "start-1/2 -translate-x-1/2",
  };

  const yAxisClasses = {
    top: "top-0 -translate-y-full hs-overlay-open:translate-y-0",
    bottom: "bottom-0 translate-y-full hs-overlay-open:translate-y-0",
    center: "top-1/2 -translate-y-1/2",
    full: "top-0",
  };

  const heightClass =
    yAxis === "full"
      ? "flex flex-col h-full max-h-screen"
      : "h-full max-h-screen";

  return `w-full max-w-xs ${baseClasses} ${xAxisClasses[xAxis]} ${yAxisClasses[yAxis]} ${heightClass}`;
});
</script>

<template>
  <div
    :id="id"
    :class="overlayClasses"
    role="dialog"
    tabindex="-1"
    :aria-labelledby="`${id}-label`"
  >
    <div
      class="flex justify-between items-center pt-2 pb-1 px-4 border-b bg-gray-50"
    >
      <h3
        v-if="title !== undefined"
        :id="`${id}-label`"
        class="font-bold text-gray-800"
      >
        {{ title }}
      </h3>
      <button
        type="button"
        class="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none"
        aria-label="Close"
        :data-hs-overlay="`#${id}`"
      >
        <span class="sr-only">Close</span>
        <XMarkIcon
          class="shrink-0 size-4"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </button>
    </div>
    <slot></slot>
  </div>
</template>
