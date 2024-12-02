<script setup>
import { Button } from "@components";
import { ArrowUturnLeftIcon } from "@heroicons/vue/24/outline";

defineProps({
  name: {
    type: String,
    default: "NotFound",
  },
});
</script>

<template>
  <div
    class="flex flex-col mx-auto w-full h-screen items-center justify-evenly md:justify-center py-12 md:py-16 gap-y-2 md:gap-y-16 px-4 md:px-8"
  >
    <div
      class="text-center text-2xl md:text-4xl max-w-screen-2xl:text-5xl font-extrabold tracking-wider"
    >
      Oops! Trang không tồn tại
    </div>
    <img
      src="@assets/not-found_bg.svg"
      alt="Not Found"
      class="h-auto w-10/12 md:w-3/5"
    />
    <div class="flex flex-col gap-y-4 items-center text-sm md:text-base">
      <p class="text-gray-800 text-center">
        Có vẻ như trang bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.
      </p>
      <Button
        type="primary"
        title="Trở về trang chủ"
        @click="$router.go(-1)"
        :icon="ArrowUturnLeftIcon"
        iconClass="shrink-0 size-3.5 md:size-5"
        btnClass="w-fit py-2 px-4 shadow-sm rounded-lg"
      />
    </div>
  </div>
</template>
