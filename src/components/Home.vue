<script></script>

<template>
  <div
    name="home"
    className="w-full h-screen bg-hero bg-no-repeat bg-cover bg-center md:bg-fixed"
  >
    <div className="sm:bg-white/50 bg-white/80 h-full">
      <div
        className="lg:max-w-[50%] md:max-w-[60%] sm:max-w-[80%] px-[4rem] flex flex-col justify-center h-full"
      >
        <p className="text-[#454545] font-bold">Hi, my name is</p>
        <h1 className="text-4xl md:text-6xl font-bold text-[#546696]">
          Layla Krauss
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-[#45537a]">
          I am a Software Developer
        </h2>
        <p className="text-[#454545] py-4">
          I'm continuously learning to build cool things for the web. My current
          focus is building responsive full-stack web applications.
        </p>
        <div>
          <Link
            to="projects"
            className="group/foo inline-block text-white border-[#454545] bg-[#454545] border-2 px-6 py-3 my-2 hover:bg-opacity-0 hover:border-[#FF7200] hover:text-[#FF7200]"
            smooth="{true}"
            duration="{500}"
            offset="{-75}"
          >
            View Projects
            <span
              className="group-hover/foo:rotate-90 durations:300 inline-block"
            >
              <font-awesome-icon
                icon="fa-solid fa-arrow-right-long"
                className="ml-3 inline"
              />
            </span>
          </Link>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
