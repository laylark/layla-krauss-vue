<script setup>
import { defineEmits } from "vue";

defineProps(["href", "label", "className"]);

const emit = defineEmits(["click"]);
const handleClick = () => emit("click");
</script>

<template>
  <li :class="className">
    <a
      @click="handleClick"
      :href="href"
      v-smooth-scroll="{
        duration: 500,
        offset: -80,
      }"
    >
      {{ label }}
    </a>
  </li>
</template>

<style></style>
