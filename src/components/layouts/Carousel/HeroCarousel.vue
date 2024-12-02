<script setup>
defineProps({
  slides: {
    type: Array,
    required: true,
    default: undefined,
  },
});
</script>

<template>
  <div
    v-if="slides !== undefined"
    data-hs-carousel='{
    "loadingClasses": "opacity-0",
    "isAutoPlay": true
  }'
    class="relative size-full"
  >
    <div class="hs-carousel relative overflow-hidden size-full bg-white">
      <div
        class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0"
      >
        <div
          class="hs-carousel-slide"
          v-for="(slide, index) in slides"
          :key="index"
        >
          <div
            class="flex justify-center h-full bg-gray-100 p-6 bg-center object-contain object-center bg-no-repeat bg-cover"
            :style="`background-image: url(${slide.url})`"
          ></div>
        </div>
      </div>
    </div>

    <!-- <button
      type="button"
      class="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-s-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
    >
      <span class="text-2xl" aria-hidden="true">
        <svg
          class="shrink-0 size-5"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m15 18-6-6 6-6"></path>
        </svg>
      </span>
      <span class="sr-only">Previous</span>
    </button>
    <button
      type="button"
      class="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-e-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
    >
      <span class="sr-only">Next</span>
      <span class="text-2xl" aria-hidden="true">
        <svg
          class="shrink-0 size-5"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </span>
    </button> -->

    <!-- <div
      class="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2"
    ></div> -->
  </div>
  <!-- End Slider -->
</template>
