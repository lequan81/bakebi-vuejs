<script>
export default {
  name: "Products",
  props: {
    category: {
      type: String,
      required: true,
    },
  },
  mounted() {
    console.log(this.category);
  },
};
</script>
<template>
  <div>
    <h1>Products</h1>
    <p>Category: {{ category }}</p>
  </div>
</template>
