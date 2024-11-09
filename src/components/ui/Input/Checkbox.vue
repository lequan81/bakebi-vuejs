<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
  },
  isRequired: {
    type: Boolean,
    default: false,
  },
  wrapperClass: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div
    :for="name"
    :class="`flex flex-row items-center justify-normal gap-x-1 sm:gap-x-2 ${wrapperClass}`"
  >
    <input
      :id="name"
      :name="name"
      type="checkbox"
      class="size-3.5 sm:size-4 rounded border-white/30 bg-white/20 text-black focus:ring-gray-700 accent-gray-900"
    />
    <label :for="name" class="text-gray-900 font-medium text-sm sm:text-base"
      >{{ title }}
      <slot></slot>
      <span v-if="isRequired" class="text-red-500">*</span>
    </label>
  </div>
</template>
