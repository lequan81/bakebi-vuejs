<script>
export default {
  name: "Stats",
};
</script>

<template>
  <div
    class="flex sm:flex-row sm:justify-start justify-between flex-wrap sm:flex-nowrap items-center sm:gap-x-6 gap-y-6 sm:gap-y-0 w-full"
  >
    <div class="sm:w-48 w-5/12 relative mx-auto">
      <p
        class="text-3xl sm:text-5xl lining-nums font-bold leading-10 text-black"
      >
        40+
      </p>
      <p class="mt-2 sm:mt-3 text-sm sm:text-base text-gray-800">
        Các loại bánh
      </p>
      <div class="absolute top-0 right-0 w-px h-full bg-gray-300"></div>
    </div>
    <!-- <div
      class="relative before:absolute before:top-0 before:-start-12 before:w-px before:h-full before:bg-gray-400"
    > -->
    <div class="sm:w-48 w-5/12 relative">
      <p
        class="text-3xl sm:text-5xl lining-nums font-bold leading-10 text-black"
      >
        &lt;500
      </p>
      <p class="mt-2 sm:mt-3 text-sm sm:text-base text-gray-800">
        Calories mỗi bánh
      </p>
      <div
        class="hidden sm:absolute top-0 right-0 w-px h-full bg-gray-300"
      ></div>
    </div>
    <!-- </div> -->

    <!-- <div
      class="relative lg:before:absolute lg:before:top-0 lg:before:-start-12 lg:before:w-px lg:before:h-full lg:before:bg-gray-400 mt-6 sm:mt-0 w-full sm:w-fit"
    > -->
    <div class="sm:w-48 w-full mx-auto text-center sm:text-start">
      <p
        class="text-3xl sm:text-5xl lining-nums font-bold leading-10 text-black"
      >
        5000+
      </p>
      <p class="mt-2 sm:mt-3 text-sm sm:text-base text-gray-800">
        Khách hàng thân thiết
      </p>
    </div>
    <!-- </div> -->
  </div>
</template>
