<script setup>
import { ref } from "vue";

import GridItem from "../components/GridItem.vue";
import NICU from "../assets/nicu.jpeg";
import DoggyAuctions from "../assets/doggy-auctions.jpg";
import Tidbits from "../assets/tidbits.jpg";
import Wiki from "../assets/wiki.jpg";
import Search from "../assets/search.jpg";
import FCC from "../assets/fcc.jpeg";

const items = [
  {
    name: "Flask Application",
    imgPath: NICU,
    url: "https://nicu.mothercodesbest.dev/",
    code: "",
  },
  {
    name: "Flask Application",
    imgPath: Tidbits,
    url: "https://tidbits.mothercodesbest.dev/",
    code: "https://github.com/laylark/openai-quickstart-python.git",
  },
  {
    name: "Django Application",
    imgPath: DoggyAuctions,
    url: "https://www.youtube.com/watch?v=I8A2NRSScK0&feature=youtu.be",
    code: "https://github.com/laylark/commerce.git",
  },
  {
    name: "Django Application",
    imgPath: Wiki,
    url: "https://youtu.be/lETKQcAOUD8",
    code: "https://github.com/laylark/wiki.git",
  },
  {
    name: "Google Clone",
    imgPath: Search,
    url: "https://laylark.github.io/cs50w-search/",
    code: "https://github.com/laylark/cs50w-search.git",
  },
  {
    name: "FreeCodeCamp Projects",
    imgPath: FCC,
    url: "https://www.freecodecamp.org/certification/laylark/responsive-web-design",
    code: "",
  },
];
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
        <div v-for="item in items" :key="item.id">
          <GridItem :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
