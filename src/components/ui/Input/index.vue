<script setup>
defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  isSubItem: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  isRequired: {
    type: Boolean,
    default: false,
  },
  isAutocomplete: {
    type: Boolean,
    default: false,
  },
  wrapperClass: {
    type: String,
    default: "col-span-full",
  },
});

const emit = defineEmits(["update:modelValue"]);
</script>
<template>
  <div :class="wrapperClass">
    <!-- When subLabelItem exists -->
    <div
      v-if="isSubItem"
      class="flex justify-between items-center mb-1.5 text-sm sm:text-base sm:mb-2"
    >
      <label :for="name" class="block text-gray-900 font-medium">
        {{ label }}
        <span v-if="isRequired" class="text-red-500">*</span>
      </label>
      <slot></slot>
    </div>

    <!-- When subLabelItem doesn't exist -->
    <label
      v-else
      :for="name"
      class="block text-gray-900 font-medium mb-1.5 text-sm sm:text-base sm:mb-2"
    >
      {{ label }}
      <span v-if="isRequired" class="text-red-500">*</span>
    </label>

    <input
      class="w-full px-4 py-2 rounded-lg bg-white/20 border border-gray-500 focus:ring-1 focus:ring-blue-600 focus:outline-none text-black placeholder-gray-800 placeholder:text-sm sm:placeholder:text-base"
      :type="type"
      :id="name"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :name="name"
      :required="isRequired"
      :autocomplete="isAutocomplete ? 'on' : 'off'"
      :placeholder="placeholder"
    />
  </div>
</template>
