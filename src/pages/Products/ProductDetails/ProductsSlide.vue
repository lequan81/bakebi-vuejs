<script>
import { HSCarousel } from "preline";
export default {
  name: "ProductsSlide",
  props: {
    images: {
      type: Array,
      required: true,
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
  <!-- Slider -->
  <div
    data-hs-carousel='{
    "loadingClasses": "opacity-0"
  }'
    class="relative"
  >
    <div class="hs-carousel flex gap-x-4 h-[70vh]">
      <div class="hs-carousel-pagination flex flex-col gap-3">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="hs-carousel-pagination-item size-16 border rounded-md overflow-hidden cursor-pointer hover:border-gray-400"
        >
          <img
            :src="image"
            :alt="`image product ${index}`"
            class="size-full object-cover brightness-95"
          />
        </div>
      </div>

      <div class="relative grow overflow-hidden flex-1 bg-white rounded-md">
        <div
          class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0"
        >
          <div
            class="hs-carousel-slide"
            v-for="(image, index) in images"
            :key="index"
          >
            <img
              class="hs-carousel-slide size-full object-cover rounded-md brightness-95"
              :src="image"
              :alt="`product images ${index}`"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Slider -->
</template>
