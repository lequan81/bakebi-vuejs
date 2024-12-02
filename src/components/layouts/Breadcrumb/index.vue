<script setup>
import BreadcrumbItem from "./BreadcrumbItem.vue";

defineProps({
  name: {
    type: String,
    default: "Breadcrumb",
  },
  breadcrumbs: {
    type: Array,
    default: undefined,
  },
});
</script>

<template>
  <ol class="flex items-center whitespace-nowrap" v-if="breadcrumbs">
    <BreadcrumbItem
      v-for="(breadcrumb, index) in breadcrumbs"
      :key="index"
      :title="breadcrumb.title"
      :href="breadcrumb.href"
    />
  </ol>
</template>
