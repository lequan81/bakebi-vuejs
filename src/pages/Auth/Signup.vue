<script>
import { ref } from "vue";
import { Input, Checkbox } from "@components/index.js";
export default {
  name: "Signup",
  components: {
    Input,
    Checkbox,
  },
  setup() {
    const fullname = ref("");
    const email = ref("");
    const address = ref("");
    const phonenumber = ref("");
    const password = ref("");
    const comfirm_password = ref("");

    return {
      fullname,
      email,
      address,
      phonenumber,
      password,
    };
  },
};
</script>
<template>
  <div
    class="flex flex-col items-center justify-center size-full pt-14 pb-40 sm:pt-20 sm:pb-36 grow bg-[url('./auth_bg.png')] bg-no-repeat bg-cover bg-center object-cover px-4 sm:px-0"
  >
    <div
      class="bg-white/30 backdrop-blur-xl rounded-xl p-4 sm:p-8 shadow-lg w-full max-w-xl xl:max-w-2xl h-fit"
    >
      <div class="flex flex-col items-center gap-y-2 mb-3 sm:mb-6">
        <h2 class="text-2xl sm:text-3xl font-bold text-black text-center">
          Đăng ký
        </h2>
        <div class="text-gray-900 text-sm sm:text-base">
          <span>Bạn đã có tài khoản? </span>
          <router-link
            :to="{ name: 'Login' }"
            class="font-semibold transition duration-200 hover:underline underline-offset-2 hover:text-black"
          >
            Đăng nhập ngay!
          </router-link>
        </div>
      </div>

      <!-- Signup Form -->
      <form
        class="grid grid-cols-1 sm:grid-cols-8 auto-rows-auto w-full max-w-3xl gap-x-4 gap-y-4 p-2"
      >
        <Input
          v-model="fullname"
          name="fullname"
          label="Họ và tên"
          type="text"
          placeholder="John Doe"
          :isRequired="true"
          wrapperClass="col-span-full h-fit sm:col-span-5"
        />
        <Input
          v-model="phonenumber"
          name="phonenumber"
          label="Số điện thoại"
          type="text"
          placeholder="0987654321"
          :isRequired="true"
          wrapperClass="col-span-full h-fit sm:col-span-3"
        />
        <Input
          v-model="address"
          name="address"
          label="Địa chỉ"
          type="text"
          placeholder="123 Đường ABC, Quận DEF, TP.HCM"
          :isRequired="true"
          wrapperClass="col-span-full h-fit sm:col-span-5"
        />
        <Input
          v-model="email"
          name="email"
          type="email"
          label="Email"
          placeholder="test@email.com"
          :isRequired="true"
          wrapperClass="col-span-full h-fit sm:col-span-3"
        />
        <Input
          v-model="password"
          name="password"
          label="Mật khẩu"
          type="password"
          :isRequired="true"
          wrapperClass="col-span-full h-fit sm:col-span-4"
        />
        <Input
          v-model="comfirm_password"
          name="comfirm_password"
          label="Nhập lại mật khẩu"
          type="password"
          :isRequired="true"
          wrapperClass="col-span-full h-fit sm:col-span-4"
        />
        <Checkbox name="accept_statement" wrapperClass="col-span-full">
          <span>
            Tôi đồng ý với
            <router-link
              :to="{ name: 'Statements' }"
              class="font-semibold transition duration-200 hover:underline underline-offset-2 hover:text-black"
            >
              Các điều khoản
            </router-link>
            và
            <router-link
              :to="{ name: 'PrivacyPolicy' }"
              class="font-semibold transition duration-200 hover:underline underline-offset-2 hover:text-black"
            >
              Chính sách bảo mật
            </router-link>
          </span>
        </Checkbox>
        <button
          type="submit"
          class="col-span-full w-full text-sm sm:text-base py-2 px-4 bg-black hover:bg-gray-900 text-white font-semibold rounded-lg transition duration-200 flex items-center justify-center gap-x-2"
        >
          Đăng ký
        </button>
      </form>
    </div>
  </div>
</template>
