<script setup>
import Logo from "../assets/logo-gray.svg";
import LogoWhite from "../assets/logo-white.svg";

const closeNavBar = () => setNav(!nav);

// window.addEventListener("scroll", changeColor);
</script>
<template>
  <div class="header header-bg">
    <div>
      <img :src="LogoWhite" alt="Logo" class="w-[160px]" />
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
    <button @click="" class="md:hidden z-10">Menu</button>

    <!-- Mobile menu -->
    <ul>
      <li class="py-6 text-4xl">
        <Link
          onClick="{handleClick}"
          to="home"
          smooth="{true}"
          duration="{500}"
        >
          Home
        </Link>
      </li>
      <li class="py-6 text-4xl">
        <Link
          onClick="{handleClick}"
          to="about"
          smooth="{true}"
          duration="{500}"
          offset="{-80}"
        >
          About
        </Link>
      </li>
      <li class="py-6 text-4xl">
        <Link
          onClick="{handleClick}"
          to="skills"
          smooth="{true}"
          duration="{500}"
          offset="{-80}"
        >
          Skills
        </Link>
      </li>
      <li class="py-6 text-4xl">
        <Link
          onClick="{handleClick}"
          to="projects"
          smooth="{true}"
          duration="{500}"
          offset="{-80}"
        >
          Projects
        </Link>
      </li>
      <li class="py-6 text-4xl">
        <Link
          onClick="{handleClick}"
          to="contact"
          smooth="{true}"
          duration="{500}"
          offset="{-80}"
        >
          Contact
        </Link>
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
