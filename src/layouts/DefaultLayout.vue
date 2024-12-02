<script setup>
import { onMounted } from "vue";
// import { HSStaticMethods } from "preline";
import { Header, Footer } from "@components";

defineProps({
  name: {
    type: String,
    default: "DefaultLayout",
  },
});

// onMounted(() => {
//   HSStaticMethods.autoInit();
// });
</script>

<template>
  <div
    id="app"
    class="min-h-screen w-full flex flex-col bg-orange-50 select-none"
  >
    <Header />

    <div class="relative">
      <div class="flex flex-col size-full grow mt-12 lg:mt-14">
        <router-view />
      </div>

      <Footer />
    </div>
  </div>
</template>
