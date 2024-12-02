<script setup>
defineProps({
  name: {
    type: String,
    default: "BlankLayout",
  },
});
</script>

<template>
  <div class="min-h-screen w-full bg-gradient-to-b from-white to-orange-50">
    <router-view />
  </div>
</template>
