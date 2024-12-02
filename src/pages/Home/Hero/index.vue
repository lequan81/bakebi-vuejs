<script setup>
import Stats from "./Stats.vue";
import { HeroCarousel, Button } from "@components";
import { HERO_SLIDER } from "@utils/constants";

defineProps({
  name: {
    type: String,
    default: "Hero",
  },
});
</script>
<template>
  <div class="flex flex-col sm:flex-row size-full bg-orange-50">
    <div
      class="w-full sm:w-7/12 px-4 py-8 sm:px-12 sm:pt-12 sm:pb-28 space-y-6 sm:space-y-8"
    >
      <h1
        class="text-2xl md:text-3xl xl:text-4xl font-extrabold leading-tight tracking-wide line-clamp-3 uppercase sm:whitespace-pre-wrap"
      >
        {{ "bánh ngon ít ngọt Bakebi\ngiúp bạn kiểm soát calories" }}
      </h1>

      <p
        class="text-sm sm:text-base text-gray-700 line-clamp-4 w-full sm:w-11/12 pr-2 sm:pr-0 pt-2"
      >
        Khi người ta lớn, niềm vui và nỗi buồn cũng lớn lên theo. Trong những
        giấc mơ của tôi, không chỉ có châu chấu, chuồn chuồn như những ngày thơ
        bé. Đã có bão giông theo về trong những đêm gió luồn qua mái lá. Ờ ngay
        cả giấc mơ cũng lớn lên đó thôi.
      </p>

      <div class="w-full pt-6 sm:pt-3">
        <Button
          type="primary"
          btnClass="px-0 sm:px-10 py-2 shadow-sm rounded-full w-full sm:w-fit"
        >
          <span class="text-white font-semibold text-base sm:text-lg mx-auto">
            Mua ngay
          </span>
        </Button>
      </div>

      <!-- Stats -->
      <div class="w-full pt-2 sm:pt-12 mx-auto">
        <Stats />
      </div>
    </div>

    <div class="w-5/12 min-h-full">
      <!-- Image Slider -->
      <HeroCarousel :slides="HERO_SLIDER" />
    </div>
  </div>
</template>
