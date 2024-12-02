<script setup>
import { ReviewCard } from "@components";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/24/outline";

defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  reviews: {
    type: Array,
    required: true,
    default: undefined,
  },
});
</script>

<template>
  <div
    v-if="reviews !== undefined"
    class="w-full px-2 pt-12 pb-32 mx-auto relative"
    data-hs-carousel='{
      "loadingClasses": "opacity-0",
      "dotsItemClasses": "hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer",
      "isAutoHeight": true,
      "slidesQty": {
      "xs": 1,
      "lg": 4
      }
    }'
  >
    <!-- Header with navigation -->
    <div class="max-w-2xl text-center mx-auto mb-8 lg:mb-12">
      <h2 class="text-2xl font-bold md:text-4xl md:leading-tight">
        {{ title }}
      </h2>
      <p class="mt-1 text-gray-600">
        {{ description }}
      </p>
    </div>

    <!-- Reviews slider -->
    <div
      class="hs-carousel w-full overflow-hidden bg-white rounded-lg min-h-36"
    >
      <!-- Slider -->
      <div class="min-h-max w-full relative -mx-1">
        <div
          class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap opacity-0 transition-transform duration-700 ease-in-out gap-x-2 sm:gap-x-4 scroll-smooth"
        >
          <div
            class="hs-carousel-slide px-1 w-full flex-shrink-0 scroll-ml-2 sm:scroll-ml-6 max-w-6 sm:max-w-md"
          ></div>

          <div
            class="hs-carousel-slide px-1 w-full flex-shrink-0 scroll-ml-2 sm:scroll-ml-6 h-36 max-w-72 sm:max-w-md"
            v-for="(review, index) in reviews"
            :key="index"
          >
            <ReviewCard
              :reviewerName="review.name || 'Anomynous'"
              :reviewContent="review.text"
              :rating="review.rating"
            />
          </div>

          <div
            class="hs-carousel-slide px-1 w-full flex-shrink-0 scroll-ml-2 sm:scroll-ml-6 max-w-6 sm:max-w-md"
          ></div>
        </div>
      </div>
      <!-- Navigation Button -->
      <div
        class="absolute inset-0 flex items-center justify-between pointer-events-none"
      >
        <button
          type="button"
          class="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none mt-1 inline-flex justify-center items-center w-8 h-fit min-h-36 rounded-s-md bg-white/[.75] text-gray-900 hover:bg-gray-300/[.3] focus:bg-gray-300/[.3] focus:outline-none transition-all pointer-events-auto"
        >
          <span class="sr-only">Previous</span>
          <ChevronLeftIcon
            class="shrink-0 size-4 md:size-5 text-gray-900"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </button>

        <button
          type="button"
          class="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none mt-1 inline-flex justify-center items-center w-8 h-fit min-h-36 rounded-e-md bg-white/[.75] text-gray-900 hover:bg-gray-300/[.3] focus:bg-gray-300/[.3] focus:outline-none transition-all pointer-events-auto"
        >
          <span class="sr-only">Next</span>
          <ChevronRightIcon
            class="shrink-0 size-4 md:size-5 text-gray-900"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </button>
      </div>
    </div>

    <!-- <div
        class="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2"
      ></div> -->
  </div>
</template>
