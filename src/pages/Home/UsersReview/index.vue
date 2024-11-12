<script>
import { HSCarousel } from "preline";
import { StarReview } from "@components";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/24/outline";
import { CheckCircleIcon } from "@heroicons/vue/24/solid";

export default {
  name: "UsersReview",
  components: {
    StarReview,
    ChevronLeftIcon,
    ChevronRightIcon,
    CheckCircleIcon,
  },
  props: {
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
      default: () => [],
    },
  },
  setup() {
    setTimeout(() => {
      HSCarousel.autoInit();
    }, 100);
  },
};
</script>

<template>
  <div
    class="w-full px-2 pt-12 pb-32 mx-auto relative"
    data-hs-carousel='{
      "loadingClasses": "opacity-0",
      "dotsItemClasses": "hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500",
      "isSnap": true,
      "isAutoHeight": true,
      "slidesQty": {
      "xs": 1,
      "lg": 3
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
    <div class="hs-carousel w-full overflow-hidden bg-white rounded-lg">
      <!-- Slider -->
      <div class="min-h-40 w-full relative -mx-1">
        <div
          class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap opacity-0 transition-transform duration-700 ease-in-out gap-x-2 sm:gap-x-6 snap-x snap-mandatory scroll-smooth scroll-px-4 sm:scroll-px-12"
        >
          <template v-for="(review, index) in reviews" :key="index">
            <div
              class="hs-carousel-slide px-1 w-full flex-shrink-0 snap-start scroll-ml-2 sm:scroll-ml-6"
            >
              <div
                class="bg-white rounded-xl p-6 shadow-sm border border-gray-200 h-40 max-w-72 sm:max-w-md"
              >
                <div class="flex items-center gap-x-3 mb-4">
                  <span class="font-semibold">
                    {{ review.name || "Anomynous" }}
                  </span>
                  <CheckCircleIcon
                    class="w-5 h-5 text-blue-500"
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <!-- Stars -->
                  <div class="flex-1 grow flex justify-end">
                    <StarReview :rating="review.rating" :isShowRating="false" />
                  </div>
                </div>

                <!-- Review text -->
                <p class="text-gray-600 text-sm line-clamp-3">
                  {{ review.text }}
                </p>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
    <!-- Navigation Button -->
    <button
      type="button"
      class="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 -top-2.5 sm:top-2.5 start-0 inline-flex justify-center items-center w-8 h-40 my-auto text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-s-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
    >
      <span class="text-2xl" aria-hidden="true">
        <ChevronLeftIcon
          class="shrink-0 size-4 text-gray-900"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </span>
      <span class="sr-only">Previous</span>
    </button>

    <button
      type="button"
      class="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 -top-2.5 sm:top-2.5 end-0 inline-flex justify-center items-center w-8 h-40 my-auto text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-e-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
    >
      <span class="sr-only">Next</span>
      <span class="text-2xl" aria-hidden="true">
        <ChevronRightIcon
          class="shrink-0 size-4 text-gray-900"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </span>
    </button>

    <!-- <div
        class="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2"
      ></div> -->
  </div>
</template>
