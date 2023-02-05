<script setup>
defineProps(["item"]);
</script>

<template>
  <div class="bg-white-skills shadow-md shadow-black-shadow">
    <img
      class="w-20 my-4 mx-auto"
      :src="item.imgPath"
      :alt="`${item.name} icon`"
    />
    <p class="my-4">{{ item.name }}</p>
  </div>
</template>

<style></style>
