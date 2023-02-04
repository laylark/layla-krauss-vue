<script setup>
defineProps(["item"]);
</script>

<template>
  <div
    :style="{ backgroundImage: `url(${item.imgPath})` }"
    class="shadow-lg shadow-black-shadow group container rounded-md flex justify-center items-center mx-auto content-div"
  >
    <div class="opacity-0 group-hover:opacity-100 text-center">
      <span class="text-2xl font-bold text-white tracking-wider">
        {{ item.name }}
      </span>
      <div class="pt-8 text-center">
        <a :href="item.url" target="_blank">
          <button
            class="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
          >
            Demo
          </button>
        </a>
        <a v-if="item.code" :href="item.code" target="_blank">
          <button
            class="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
          >
            Code
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<style></style>
