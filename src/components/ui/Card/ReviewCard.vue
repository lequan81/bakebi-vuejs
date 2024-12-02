<script setup>
import { CheckCircleIcon } from "@heroicons/vue/24/solid";
import { StarReview, DateFormatter } from "@components";

defineProps({
  name: {
    type: String,
    default: "ReviewCard",
  },
  reviewerName: {
    type: String,
    required: true,
  },
  reviewContent: {
    type: String,
    required: true,
  },
  rating: {
    type: [String, Number],
    default: undefined,
  },
  isShowRating: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: String,
    default: undefined,
  },
});
</script>

<template>
  <div class="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
    <div
      :class="`flex flex-row gap-x-3 ${
        createdAt !== undefined ? 'items-start mb-2' : 'items-center mb-4'
      }`"
    >
      <div class="flex flex-col w-full justify-start gap-y-1">
        <div class="flex flex-row w-full items-center justify-start gap-x-2">
          <span class="font-semibold text-sm sm:text-base">
            {{ reviewerName || "Anomynous" }}
          </span>
          <CheckCircleIcon
            class="size-3.5 sm:size-5 text-blue-500"
            fill="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </div>
        <StarReview
          v-if="createdAt !== undefined"
          :rating="rating"
          :isShowRating="isShowRating"
        />
      </div>
      <!-- Created At and Stars -->
      <div
        class="flex-1 grow flex justify-end items-start"
        v-if="createdAt !== undefined"
      >
        <DateFormatter :date="createdAt" />
      </div>
      <div class="flex-1 grow flex justify-end" v-else>
        <StarReview :rating="rating" :isShowRating="isShowRating" />
      </div>
    </div>

    <!-- Review text -->
    <p class="text-gray-600 text-sm line-clamp-3">
      {{ reviewContent }}
    </p>
  </div>
</template>
