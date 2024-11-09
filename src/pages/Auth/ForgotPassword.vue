<script>
import { ref } from "vue";
import { ArrowRightIcon } from "@heroicons/vue/24/outline";
import { Input, Checkbox } from "@components/index.js";
export default {
  name: "ForgotPassword",
  components: {
    ArrowRightIcon,
    Input,
    Checkbox,
  },
  setup() {
    const email = ref("");

    return {
      email,
    };
  },
};
</script>
<template>
  <div
    class="flex flex-col items-center justify-center size-full pt-14 pb-40 sm:pt-20 sm:pb-36 grow bg-[url('./auth_bg.png')] backdrop-blur-sm bg-no-repeat bg-cover bg-center object-cover px-4 sm:px-0"
  >
    <div
      class="bg-white/30 backdrop-blur-md rounded-xl p-4 sm:p-8 shadow-lg w-full max-w-xl h-fit"
    >
      <div class="flex flex-col items-center gap-y-2 mb-3 sm:mb-6">
        <h2 class="text-2xl sm:text-3xl font-bold text-black text-center">
          Đặt lại mật khẩu
        </h2>
        <div class="text-gray-900 text-sm sm:text-base">
          <span>Bạn nhớ lại mật khẩu? </span>
          <router-link :to="{ name: 'Signup' }">
            <span
              class="font-semibold transition duration-200 hover:underline underline-offset-2 hover:text-black"
            >
              Đăng nhập ngay!
            </span>
          </router-link>
        </div>
      </div>

      <!-- Forgot Password Form -->
      <form class="space-y-4">
        <Input
          v-model="email"
          name="email"
          type="email"
          label="Email"
          placeholder="thangdan@email.com"
          :isRequired="true"
        />

        <button
          type="submit"
          class="w-full text-sm sm:text-base p-2 bg-black hover:bg-gray-900 text-white font-semibold rounded-lg transition duration-200 flex flex-row items-center justify-center gap-x-2"
        >
          <ArrowRightIcon
            class="shrink-0 size-4 sm:size-5"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />

          Tiếp theo
        </button>
      </form>
    </div>
  </div>
</template>
