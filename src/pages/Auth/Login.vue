<script>
import { ref } from "vue";
import { UserIcon } from "@heroicons/vue/24/outline";
import { Input, Checkbox } from "@components/index.js";
export default {
  name: "Login",
  components: {
    UserIcon,
    Input,
    Checkbox,
  },
  setup() {
    const email = ref("");
    const password = ref("");

    return {
      email,
      password,
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
          Đăng nhập
        </h2>
        <div class="text-gray-900 text-sm sm:text-base">
          <span>Bạn chưa có tài khoản? </span>
          <router-link :to="{ name: 'Signup' }">
            <span
              class="font-semibold transition duration-200 hover:underline underline-offset-2 hover:text-black"
            >
              Đăng ký ngay!
            </span>
          </router-link>
        </div>
      </div>

      <!-- Login Form -->
      <form class="space-y-4">
        <Input
          v-model="email"
          name="email"
          label="Email"
          type="email"
          placeholder="test@example.com"
          :isRequired="true"
        />
        <Input
          v-model="password"
          name="password"
          label="Mật khẩu"
          type="password"
          :isSubItem="true"
          placeholder="Ihatemyjob123"
          :isRequired="true"
        >
          <router-link
            :to="{ name: 'ForgotPassword' }"
            class="text-gray-700 text-sm hover:underline underline-offset-2 hover:text-gray-900"
          >
            Quên mật khẩu?
          </router-link>
        </Input>
        <Checkbox
          name="remember_me"
          title="Ghi nhớ đăng nhập"
          wrapperClass="col-span-full"
        />

        <button
          type="submit"
          class="col-span-full w-full text-sm sm:text-base py-2 px-4 bg-black hover:bg-gray-900 text-white font-semibold rounded-lg transition duration-200 flex items-center justify-center gap-x-2"
        >
          <UserIcon
            class="shrink-0 size-4 sm:size-5"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />

          Đăng nhập
        </button>
      </form>
    </div>
  </div>
</template>
