<script setup>
import { computed } from "vue";
import { StarIcon } from "@heroicons/vue/24/solid";
import { StarIcon as StarOutline } from "@heroicons/vue/24/outline";

const props = defineProps({
  name: {
    type: String,
    default: "StarReview",
  },
  rating: {
    type: Number,
    default: 1,
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
  // Array Array(props.maxRating) is a way to create an array with a props.maxRating length, but with all empty values
  // if maxRating are 4.5, then it will create an empty array with length 4, not array as [undefined, undefined, undefined, undefined]
  // Array empty values have lenght but can't be iterated over/manipulated
  // spread operator aka [...Array()] is used to spread the array into individual elements,
  // shadow copy/converts the array Array(props.maxRating) all undifined into new array with the same length, but can be iterated over/manipulated
  return [...Array(props.maxRating)].map((_, index) => {
    // _ is a throwaway variable/don't need the value
    const starNumber = index + 1; // +1 because index is 0-based
    switch (true) {
      case starNumber <= Math.floor(props.rating): // Math.floor() to get the integer (rounded lower) part of the number
        return "full"; // if the rating is 3.5, then (index + 1) - 0.5 <= 3, so it will return full star
      case starNumber - 0.5 == props.rating:
        return "half"; // if the rating is 3.5, then when index are 3 we have (3 + 1 - 0.5) = 3.5 = props.rating, meaning this star are 'lonely' star
      default:
        return "empty"; // if the rating is 3.5, then when index are 4 we have (4 + 1 - 0.5) = 4.5 > props.rating, so wtfigo!!!
    }
  });
});
</script>

<template>
  <div class="flex items-center gap-x-1 shrink-0 min-w-36 sm:min-w-fit">
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
      class="text-xs sm:text-sm text-gray-800 ml-2 hidden sm:block"
    >
      {{ rating }}/{{ maxRating }}
    </span>
  </div>
</template>
