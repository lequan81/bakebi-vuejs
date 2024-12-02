<script setup>
defineProps({
  name: {
    type: String,
    default: "ProductsCarousel",
  },
  images: {
    type: Array,
    required: true,
    default: undefined,
  },
});
</script>

<template>
  <!-- Slider -->
  <div
    data-hs-carousel='{
    "loadingClasses": "opacity-0",
    "isInfiniteLoop": true,
    "slidesQty": 1
  }'
    class="relative"
  >
    <div
      class="hs-carousel flex flex-col sm:flex-row-reverse gap-y-4 sm:gap-y-0 sm:gap-x-4 h-[65vh] sm:h-[78vh] overflow-y-auto"
    >
      <div class="relative grow overflow-hidden flex-1 bg-white rounded-md">
        <div
          class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0"
        >
          <template
            v-for="(image, index) in images"
            :key="index"
            class="hs-carousel-slide shrink-0 w-full"
          >
            <img
              class="hs-carousel-slide size-full object-cover rounded-md brightness-95"
              :src="image"
              :alt="`product images ${index}`"
            />
          </template>
        </div>
      </div>
      <div
        class="hs-carousel-pagination sm:max-h-[73vh] overflow-x-auto sm:overflow-y-auto sm:overflow-x-hidden flex flex-row sm:flex-col justify-start items-center gap-x-2 sm:gap-x-0 sm:gap-y-3 p-1 [&::-webkit-scrollbar]:h-1.5 sm:[&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300"
      >
        <template v-for="(image, index) in images" :key="index">
          <div
            class="hs-carousel-pagination-item flex-shrink-0 size-16 rounded-md overflow-hidden cursor-pointer outline outline-transparent outline-1 md:outline-2 hover:outline-blue-600 outline-offset-2 hs-carousel-active:outline-blue-600 transition-colors duration-150 ease-in-out"
          >
            <img
              :src="image"
              :alt="`image product ${index}`"
              class="size-full object-cover brightness-95"
            />
          </div>
        </template>
      </div>
    </div>
  </div>
  <!-- End Slider -->
</template>
