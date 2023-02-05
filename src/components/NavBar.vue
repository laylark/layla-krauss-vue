<script setup>
import { ref } from "vue";
import Logo from "../assets/logo-gray.svg";
import LogoWhite from "../assets/logo-white.svg";

const showMenu = ref(false);
let setColor = ref(false);

const changeColor = () => {
  setColor.value = window.scrollY >= 80;
};

window.addEventListener("scroll", changeColor);
</script>
<template>
  <div :class="setColor ? 'header header-bg' : 'header'">
    <div>
      <img :src="setColor ? LogoWhite : Logo" alt="Logo" class="w-[160px]" />
    </div>

    <ul class="hidden md:flex">
      <li>
        <a
          href="#home"
          v-smooth-scroll="{
            duration: 500,
            offset: -80,
          }"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#about"
          v-smooth-scroll="{
            duration: 500,
            offset: -80,
          }"
        >
          About
        </a>
      </li>
      <li>
        <a
          href="#skills"
          v-smooth-scroll="{
            duration: 500,
            offset: -80,
          }"
        >
          Skills
        </a>
      </li>
      <li>
        <a
          href="#projects"
          v-smooth-scroll="{
            duration: 500,
            offset: -80,
          }"
        >
          Projects
        </a>
      </li>
      <li>
        <a
          href="#contact"
          v-smooth-scroll="{
            duration: 500,
            offset: -80,
          }"
        >
          Contact
        </a>
      </li>
    </ul>

    <!-- Hamburger -->
    <button @click="showMenu = !showMenu" class="md:hidden z-10 text-lg">
      <v-icon v-if="!showMenu" name="co-hamburger-menu" scale="2" />
      <v-icon v-else fill="white" name="io-close" scale="2" />
    </button>

    <!-- Mobile menu -->
    <ul
      :class="
        !showMenu
          ? 'hidden'
          : 'absolute top-0 left-0 w-full h-screen bg-[#09732B]/95 text-white flex flex-col justify-center items-center'
      "
    >
      <li class="py-6 text-4xl">
        <a
          @click="showMenu = !showMenu"
          href="#home"
          v-smooth-scroll="{
            duration: 500,
            offset: -80,
          }"
        >
          Home
        </a>
      </li>
      <li class="py-6 text-4xl">
        <a
          @click="showMenu = !showMenu"
          href="#about"
          v-smooth-scroll="{
            duration: 500,
            offset: -80,
          }"
        >
          About
        </a>
      </li>
      <li class="py-6 text-4xl">
        <a
          @click="showMenu = !showMenu"
          href="#skills"
          v-smooth-scroll="{
            duration: 500,
            offset: -80,
          }"
        >
          Skills
        </a>
      </li>
      <li class="py-6 text-4xl">
        <a
          @click="showMenu = !showMenu"
          href="#projects"
          v-smooth-scroll="{
            duration: 500,
            offset: -80,
          }"
        >
          Projects
        </a>
      </li>
      <li class="py-6 text-4xl">
        <a
          @click="showMenu = !showMenu"
          href="#contact"
          v-smooth-scroll="{
            duration: 500,
            offset: -80,
          }"
        >
          Contact
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.header {
  background-color: rgba(255, 255, 255, 0.8);
  position: fixed;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  color: #454545;
  z-index: 100;
}

.header-bg {
  background-color: #454545;
  color: white;
  height: 80px;
  transition: background-color 500ms, height 500ms, color 500ms;
}
</style>
