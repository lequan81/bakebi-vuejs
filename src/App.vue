<script setup>
import { HSStaticMethods } from "preline";
import { onMounted } from "vue";
defineProps({
  name: {
    type: String,
    default: "App",
  },
});

// onMounted(() => {
//   HSStaticMethods.autoInit();
// });
</script>

<template>
  <component :is="$route.meta.layout || 'div'">
    <router-view />
  </component>
</template>
