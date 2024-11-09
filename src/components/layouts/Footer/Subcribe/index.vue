<script>
import { EnvelopeIcon } from "@heroicons/vue/24/outline";
export default {
  name: "Subcribe",
  components: { EnvelopeIcon },
};
</script>
<template>
  <div
    class="absolute left-1/2 -translate-x-1/2 -mt-24 sm:-mt-14 max-w-screen-2xl:-mt-20 w-full px-4 lg:max-w-3xl max-w-screen-2xl:max-w-4xl"
  >
    <div
      class="bg-gray-900 p-4 lg:px-8 lg:py-4 max-w-screen-2xl:px-10 max-w-screen-2xl:py-6 rounded-lg flex items-center flex-col sm:flex-row gap-y-6 sm:gap-y-0 sm:gap-x-8 w-full"
    >
      <p
        class="w-full sm:w-7/12 text-white text-xl md:text-2xl tracking-wide font-bold font-serif"
      >
        Đăng ký nhận thông báo ngay để không bỏ lỡ deal hời
      </p>
      <form class="w-full sm:w-5/12 space-y-3">
        <div class="relative">
          <div
            class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5"
          >
            <EnvelopeIcon
              class="shrink-0 size-4 text-gray-800"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </div>
          <input
            type="text"
            class="py-2 px-10 block w-full bg-white border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none placeholder:text-gray-500"
            placeholder="johndoe@testemail.com"
          />
        </div>
        <button
          type="submit"
          class="py-2 px-4 w-full bg-white text-black rounded text-base font-bold focus:outline-none focus:ring-1 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none"
        >
          Đăng ký nhận email
        </button>
      </form>
    </div>
  </div>
</template>
