<script setup>
import { Header, Footer } from "@components/index.js";
import { onMounted } from "vue";

onMounted(() => {
  setTimeout(() => {
    window.HSStaticMethods.autoInit();
  }, 100);
});
</script>

<script>
export default {
  name: "DefaultLayout",
  components: {
    Header,
    Footer,
  },
};
</script>

<template>
  <div
    id="app"
    class="min-h-screen w-full flex flex-col bg-orange-50 select-none"
  >
    <Header></Header>

    <div class="relative min-h-screen flex flex-col">
      <div
        class="flex flex-col size-full overflow-hidden flex-grow flex-1 mt-12 lg:mt-14 xl:mt-16"
      >
        <router-view />
      </div>

      <Footer></Footer>
    </div>
  </div>
</template>
