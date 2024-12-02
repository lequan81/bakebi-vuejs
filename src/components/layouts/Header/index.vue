<script setup>
import { ref, provide, onMounted } from "vue";
import { HSCollapse, HSDropdown, HSComboBox } from "preline";
import Navbar from "./Navbar/index.vue";
import BtnGroup from "./BtnGroup.vue";
import SearchboxModal from "./Searchbox/SearchboxModal.vue";
import { Logo } from "@components";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import HSOverlay from "@preline/overlay";

const isLogin = ref(true);
provide("isLogin", isLogin);

onMounted(() => {
  HSCollapse.autoInit();
  HSDropdown.autoInit();
  HSComboBox.autoInit();
  HSOverlay.autoInit();
});
</script>

<template>
  <header
    class="flex flex-wrap md:justify-start md:flex-nowrap z-20 fixed top-0 start-0 w-full bg-white shadow-sm border-b border-gray-200"
  >
    <nav
      class="relative w-full mx-auto md:flex md:items-center md:justify-between md:gap-x-10 py-2 px-2 lg:px-6 xl:px-10"
    >
      <div class="flex justify-start gap-x-1.5 sm:gap-x-0 items-center">
        <!-- Collapse Button -->
        <button
          type="button"
          class="hs-collapse-toggle md:hidden relative size-8 flex justify-center items-center font-medium text-sm rounded-lg text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
          id="hs-header-base-collapse"
          aria-expanded="false"
          aria-controls="hs-header-base"
          aria-label="Toggle navigation"
          data-hs-collapse="#hs-header-base"
        >
          <Bars3Icon
            class="hs-collapse-open:hidden size-4"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />

          <XMarkIcon
            class="hs-collapse-open:block shrink-0 hidden size-4"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <span class="sr-only">Toggle navigation</span>
        </button>
        <!-- End Collapse Button -->
        <a
          class="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80"
          href="#"
          aria-label="Brand"
        >
          <Logo class="h-auto w-20 md:w-36 xl:w-40" />
        </a>

        <!-- Responsive Btn Group -->
        <BtnGroup :isMini="true" :isLogin="isLogin" />
        <!-- End Responsive Btn Group -->
      </div>
      <!-- Collapse -->
      <Navbar />
      <!-- End Collapse -->
    </nav>
  </header>
  <SearchboxModal />
</template>
