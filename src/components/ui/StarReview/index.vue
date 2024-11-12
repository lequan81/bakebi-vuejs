<script setup>
import { StarIcon } from "@heroicons/vue/24/solid";
import { StarIcon as StarOutline } from "@heroicons/vue/24/outline";
import { computed } from "vue";

const props = defineProps({
  rating: {
    type: Number,
    default: 4.5,
  },
  maxRating: {
    type: Number,
    default: 5,
  },
  isShowRating: {
    type: Boolean,
    default: true,
  },
});

const stars = computed(() => {
  return [...Array(props.maxRating)].map((_, index) => {
    const starNumber = index + 1;
    if (starNumber <= Math.floor(props.rating)) {
      return "full";
    } else if (starNumber - 0.5 <= props.rating) {
      return "half";
    }
    return "empty";
  });
});
</script>

<template>
  <div class="flex items-center gap-x-1 shrink-0">
    <div v-for="(star, index) in stars" :key="index" class="relative">
      <!-- Empty star (background) -->
      <StarOutline
        :class="`shrink-0 size-2.5 sm:size-3.5 ${
          star === 'empty' ? 'text-gray-400' : 'text-yellow-400'
        }`"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />

      <!-- Filled star (overlay) -->
      <div
        v-if="star !== 'empty'"
        :class="`absolute inset-0 overflow-hidden ${
          star === 'half' ? 'w-1/2' : ''
        }`"
      >
        <StarIcon
          class="shrink-0 size-2.5 sm:size-3.5 text-yellow-400"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </div>
    </div>

    <span
      v-if="isShowRating"
      class="text-sm text-gray-800 ml-2 hidden sm:block"
    >
      {{ rating }}/{{ maxRating }}
    </span>
  </div>
</template>
