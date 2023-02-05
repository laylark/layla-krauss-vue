<script setup></script>

<template>
  <div
    id="contact"
    class="min-h-screen bg-white-bg flex justify-center items-center flex-wrap p-16"
  >
    <form
      method="POST"
      action="https://getform.io/f/683c2c99-f1d3-4833-ad46-6d1c3154ca66"
      class="flex flex-col max-w-[600px] w-full"
    >
      <div class="pb-8">
        <p
          class="text-4xl font-bold inline border-b-4 border-orange text-gray-800"
        >
          Contact
        </p>
        <p class="text-gray-800 py-4">
          Want to learn more? Get in touch to work with me or simply say hello.
        </p>
      </div>
      <input
        class="bg-gray-form p-2"
        type="text"
        placeholder="Name"
        name="name"
        required
      />
      <input
        class="my-4 p-2 bg-gray-form"
        type="email"
        placeholder="Email"
        name="email"
        required
      />
      <textarea
        class="bg-gray-form p-2"
        name="message"
        rows="10"
        placeholder="Message"
        required
      ></textarea>
      <button
        class="text-black-light border-black-light border-2 hover:text-white hover:bg-orange hover:border-orange px-4 py-3 my-8 mx-auto flex items-center"
      >
        Let's Collaborate
      </button>
    </form>
    <div class="flex justify-center pt-10">
      <ul class="flex">
        <li
          class="w-[140px] h-[45px] flex mx-2 items-center hover:bg-green/80 duration-300 bg-blue-600 text-gray-300"
        >
          <a
            class="flex justify-between items-center w-full"
            href="https://www.linkedin.com/in/layla-krauss/"
            target="_blank"
          >
            Linkedin
            <v-icon name="co-linkedin" scale="1.8" />
          </a>
        </li>
        <li
          class="w-[140px] h-[45px] flex mx-2 items-center hover:bg-green/80 duration-300 bg-black-light text-gray-300"
        >
          <a
            class="flex justify-between items-center w-full"
            href="https://github.com/laylark"
            target="_blank"
          >
            GitHub
            <v-icon name="bi-github" scale="1.8" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style></style>
