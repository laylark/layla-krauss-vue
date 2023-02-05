<script setup>
import { ref } from "vue";
import NavLink from "./NavLink.vue";
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
  <div
    :class="`fixed w-full h-[70px] flex justify-between items-center px-4 text-black-light z-10 transition-all duration-500
    ${setColor ? 'bg-black-light text-white h-[80px]' : 'bg-white/80'}`"
  >
    <div>
      <img :src="setColor ? LogoWhite : Logo" alt="Logo" class="w-[160px]" />
    </div>

    <ul class="hidden md:flex">
      <NavLink label="Home" href="#home" />
      <NavLink label="About" href="#about" />
      <NavLink label="Skills" href="#skills" />
      <NavLink label="Projects" href="#projects" />
      <NavLink label="Contact" href="#contact" />
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
          : 'absolute top-0 left-0 w-full h-screen bg-green/95 text-white flex flex-col justify-center items-center'
      "
    >
      <NavLink
        className="py-6 text-4xl"
        @click="showMenu = !showMenu"
        label="Home"
        href="#home"
      />
      <NavLink
        className="py-6 text-4xl"
        @click="showMenu = !showMenu"
        label="About"
        href="#about"
      />
      <NavLink
        className="py-6 text-4xl"
        @click="showMenu = !showMenu"
        label="Skills"
        href="#skills"
      />
      <NavLink
        className="py-6 text-4xl"
        @click="showMenu = !showMenu"
        label="Projects"
        href="#projects"
      />
      <NavLink
        className="py-6 text-4xl"
        @click="showMenu = !showMenu"
        label="Contact"
        href="#contact"
      />
    </ul>
  </div>
</template>

<style scoped>
.header {
  transition: background-color 500ms, height 500ms, color 500ms;
}
</style>
