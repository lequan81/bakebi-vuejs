<script setup>
defineProps({
  name: {
    type: String,
    default: "Tabs",
  },
  tabs: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <nav
    class="-mb-0.5 flex justify-between gap-x-2"
    aria-label="Tabs"
    role="tablist"
    aria-orientation="horizontal"
  >
    <button
      v-for="(tab, index) in tabs"
      :key="index"
      type="button"
      :class="`group w-full sm:min-w-72 hs-tab-active:border-b-black hs-tab-active:text-black p-1 inline-flex items-center justify-center gap-x-2 border-b-2 border-gray-200 hover:border-b-gray-700 focus:outline-none disabled:opacity-50 disabled:pointer-events-none transition-colors duration-300 ease-out ${
        index === 0 ? 'active' : ''
      }`"
      :id="`tab-item-${index}`"
      :data-hs-tab="`#tab-${index}`"
      :aria-controls="`tab-${index}`"
      role="tab"
    >
      <span
        class="text-sm sm:text-base font-medium whitespace-nowrap text-gray-500 group-hover:text-gray-800 hs-tab-active:font-semibold hs-tab-active:text-black group-focus:text-black"
      >
        {{ tab }}</span
      >
    </button>
  </nav>
  <slot></slot>
</template>
