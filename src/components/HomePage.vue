<script setup></script>

<template>
  <div
    id="home"
    class="h-screen bg-hero bg-no-repeat bg-cover bg-center md:bg-fixed"
  >
    <div class="sm:bg-white/50 bg-white/80 h-full">
      <div
        class="lg:max-w-[50%] md:max-w-[60%] sm:max-w-[80%] px-[4rem] flex flex-col justify-center h-full"
      >
        <p class="text-black-light font-bold">Hi, my name is</p>
        <h1 class="text-4xl md:text-6xl font-bold text-purple-light">
          Layla Krauss
        </h1>
        <h2 class="text-4xl md:text-6xl font-bold text-purple-dark">
          I am a Software Developer
        </h2>
        <p class="text-black-light py-4">
          I'm continuously learning to build cool things for the web. My current
          focus is building responsive full-stack web applications.
        </p>
        <div>
          <a
            href="#projects"
            v-smooth-scroll="{
              duration: 500,
              offset: -75,
            }"
            class="group/arrow inline-block text-white border-black-light bg-black-light border-2 px-6 py-3 my-2 hover:bg-transparent hover:border-orange hover:text-orange"
          >
            View Projects
            <span
              class="group-hover/arrow:rotate-90 durations:300 inline-block"
            >
              <v-icon name="bi-arrow-right" class="ml-3 inline" />
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
