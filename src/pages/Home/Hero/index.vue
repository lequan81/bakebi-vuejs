<script>
import Stats from "./Stats.vue";
import Slider from "./Slider.vue";

const slides = [
  {
    url: "https://images.unsplash.com/photo-1668584054035-f5ba7d426401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1602663491496-73f07481dbea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1543255006-d6395b6f1171?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default {
  name: "Hero",
  components: {
    Stats,
    Slider,
  },
  data() {
    return {
      slides,
    };
  },
};
</script>
<template>
  <div class="flex flex-col sm:flex-row size-full bg-orange-50">
    <div
      class="w-full sm:w-7/12 px-4 py-8 sm:px-12 sm:pt-12 sm:pb-32 space-y-6 sm:space-y-8"
    >
      <h1
        class="text-2xl md:text-3xl xl:text-4xl font-extrabold leading-tight tracking-wide line-clamp-3 uppercase sm:whitespace-pre-wrap"
      >
        {{ "bánh ngon ít ngọt Bakebi\ngiúp bạn kiểm soát calories" }}
      </h1>

      <p
        class="text-sm sm:text-base text-gray-700 line-clamp-3 w-full sm:w-11/12"
      >
        Khi người ta lớn, niềm vui và nỗi buồn cũng lớn lên theo. Trong những
        giấc mơ của tôi, không chỉ có châu chấu, chuồn chuồn như những ngày thơ
        bé. Đã có bão giông theo về trong những đêm gió luồn qua mái lá. Ờ ngay
        cả giấc mơ cũng lớn lên đó thôi.
      </p>

      <button
        class="text-white px-0 sm:px-10 py-2 rounded-full font-semibold text-base sm:text-lg bg-black hover:bg-gray-900 transition w-full sm:w-fit mt-20"
      >
        Mua ngay
      </button>

      <!-- Stats -->
      <div class="w-full pt-2 sm:pt-14 mx-auto">
        <Stats />
      </div>
    </div>

    <div class="w-5/12 min-h-full">
      <!-- Image Slider -->
      <Slider :slides="slides" />
    </div>
  </div>
</template>
