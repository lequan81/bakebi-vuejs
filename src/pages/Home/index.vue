<script>
import Stats from "./Stats.vue";
import Slider from "./Slider.vue";
export default {
  name: "Home",
  components: {
    Stats,
    Slider,
  },
};
</script>
<template>
  <div
    class="flex flex-row size-full grow bg-white border border-dashed border-green-500"
  >
    <div
      class="w-7/12 border-dashed border-2 border-orange-500 h-full p-12 space-y-6"
    >
      <h1
        class="text-4xl font-extrabold leading-tight tracking-wide line-clamp-3 uppercase"
      >
        bánh ngon ít ngọt Bakebi giúp bạn kiểm soát calories
      </h1>

      <p class="text-base text-gray-700 line-clamp-3 pb-4">
        Khi người ta lớn, niềm vui và nỗi buồn cũng lớn lên theo. Trong những
        giấc mơ của tôi, không chỉ có châu chấu, chuồn chuồn như những ngày thơ
        bé. Đã có bão giông theo về trong những đêm gió luồn qua mái lá. Ờ ngay
        cả giấc mơ cũng lớn lên đó thôi.
      </p>

      <button
        class="text-white px-10 py-2 rounded-full font-semibold text-lg bg-black hover:bg-gray-900 transition w-fit"
      >
        Mua ngay
      </button>

      <!-- Stats -->
      <div class="w-full py-10 mx-auto">
        <Stats />
      </div>
    </div>

    <div class="w-5/12 border-dashed border-2 border-orange-500 min-h-full">
      <!-- Image Slider -->
      <Slider />
    </div>
  </div>
</template>
