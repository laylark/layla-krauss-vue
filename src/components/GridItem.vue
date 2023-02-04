<script setup>
import { ref } from "vue";

import NICU from "../assets/nicu.jpeg";
import DoggyAuctions from "../assets/doggy-auctions.jpg";
import Tidbits from "../assets/tidbits.jpg";
import Wiki from "../assets/wiki.jpg";
import Search from "../assets/search.jpg";
import FCC from "../assets/fcc.jpeg";

const items = ref([
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
]);
</script>

<template>
  <div
    v-for="item in items"
    :key="item.id"
    :style="{ backgroundImage: `url(${item.imgPath})` }"
    class="shadow-lg shadow-black-shadow group container rounded-md flex justify-center items-center mx-auto content-div"
  >
    <div class="opacity-0 group-hover:opacity-100 text-center">
      <span class="text-2xl font-bold text-white tracking-wider">
        {{ item.name }}
      </span>
      <div class="pt-8 text-center">
        <a :href="item.url" target="_blank" rel="noopener noreferrer">
          <button
            class="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
          >
            Demo
          </button>
        </a>
        <a
          v-if="item.code !== ''"
          :href="item.code"
          target="_blank"
          rel="noopener noreferrer"
        >
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
