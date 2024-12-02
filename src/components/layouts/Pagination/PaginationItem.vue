<script setup>
defineProps({
  name: {
    type: String,
    default: "PaginationItem",
  },
  currentPage: {
    type: Number,
    required: true,
  },
  pageNumber: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <button
    type="button"
    aria-current="page"
    :class="`size-10 flex justify-center items-center text-gray-900 tabular-nums font-medium py-2 px-3 text-sm rounded focus:outline-none disabled:opacity-50 disabled:pointer-events-none ${
      currentPage === pageNumber
        ? 'bg-gray-200 focus:bg-gray-200'
        : 'hover:bg-gray-100 focus:bg-gray-200'
    }`"
  >
    {{ pageNumber }}
  </button>
</template>
