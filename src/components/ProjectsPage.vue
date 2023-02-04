<script setup>
import GridItem from "../components/GridItem.vue";
</script>

<template>
  <div id="projects" class="w-full text-gray-800 bg-white-bg">
    <div class="max-w-[1000px] mx-auto p-16 w-full min-h-screen">
      <div class="pb-8">
        <p class="text-4xl font-bold inline border-b-4 border-orange">
          Projects
        </p>
        <p class="py-6 font-mono">// Check out some of my recent projects</p>
      </div>

      <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <GridItem />
      </div>
    </div>
  </div>
</template>

<style></style>
