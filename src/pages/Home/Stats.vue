<script>
export default {
  name: "Stats",
};
</script>
<template>
  <div class="flex flex-row justify-start items-center gap-x-6">
    <div class="w-48">
      <p class="text-5xl lining-nums font-bold leading-10 text-blue-600">40+</p>
      <p class="mt-2 sm:mt-3 text-gray-800">Các loại bánh</p>
    </div>

    <div
      class="relative lg:before:absolute lg:before:top-0 lg:before:-start-12 lg:before:w-px lg:before:h-full lg:before:bg-gray-400"
    >
      <div class="w-48">
        <p class="text-5xl lining-nums font-bold leading-10 text-blue-600">
          100+
        </p>
        <p class="mt-2 sm:mt-3 text-gray-800">Khách hàng</p>
      </div>
    </div>

    <div
      class="relative lg:before:absolute lg:before:top-0 lg:before:-start-12 lg:before:w-px lg:before:h-full lg:before:bg-gray-400"
    >
      <div class="w-48">
        <p class="text-5xl lining-nums font-bold leading-10 text-blue-600">
          500+
        </p>
        <p class="mt-2 sm:mt-3 text-gray-800">Đơn hàng</p>
      </div>
    </div>
  </div>
</template>
