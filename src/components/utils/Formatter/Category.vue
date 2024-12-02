<script setup>
import { PRODUCTS_ID } from "@utils/constants";

defineProps({
  name: {
    type: String,
    default: "CategoryFormatter",
  },
  category_id: {
    type: [String, Number],
    required: true,
  },
});
</script>

<template>
  <span
    v-if="category_id !== undefined && PRODUCTS_ID[category_id]"
    :class="`rounded py-0.5 px-1.5 text-xs sm:text-sm font-semibold min-w-max ${
      category_id === 0
        ? 'bg-red-100 text-red-600'
        : 'bg-orange-100 text-orange-600'
    }`"
  >
    {{ PRODUCTS_ID[category_id]?.name }}
  </span>
</template>
