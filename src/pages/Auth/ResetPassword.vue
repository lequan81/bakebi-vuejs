<script>
import { ref } from "vue";
import { PaperAirplaneIcon } from "@heroicons/vue/24/outline";
import { Input, Checkbox } from "@components/index.js";
export default {
  name: "ResetPassword",
  components: {
    PaperAirplaneIcon,
    Input,
    Checkbox,
  },
  setup() {
    const new_password = ref("");
    const confirm_password = ref("");

    return {
      new_password,
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
      <h2
        class="text-2xl sm:text-3xl font-bold text-black mb-3 sm:mb-6 text-center"
      >
        Thay đổi mật khẩu
      </h2>

      <!-- Reset Password Form -->
      <form class="space-y-4">
        <Input
          v-model="new_password"
          name="new_password"
          type="password"
          label="Mật khẩu mới"
          placeholder="Wearedoom!"
          :isRequired="true"
        />
        <Input
          v-model="confirm_password"
          name="confirm_password"
          type="password"
          label="Nhập lại mật khẩu"
          placeholder="Wearedoom!"
          :isRequired="true"
        >
        </Input>

        <button
          type="submit"
          class="w-full py-2 px-4 text-sm sm:text-base bg-black hover:bg-gray-900 text-white font-semibold rounded-lg transition duration-200 flex items-center justify-center gap-x-2"
        >
          <PaperAirplaneIcon
            class="shrink-0 size-4 sm:size-5"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />

          Xác nhận
        </button>
      </form>
    </div>
  </div>
</template>
