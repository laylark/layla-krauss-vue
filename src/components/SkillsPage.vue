<script setup>
import SkillCard from "./SkillCard.vue";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import Tailwind from "../assets/tailwind.png";
import Github from "../assets/github.png";
import Python from "../assets/python.png";
import BootstrapImg from "../assets/bootstrap.svg";
import Docker from "../assets/docker.png";
import SQLite from "../assets/sqlite.png";
import Shell from "../assets/shell.png";
import VSCode from "../assets/vscode.png";
import Django from "../assets/django.png";
import Laravel from "../assets/laravel.png";
import Vue from "../assets/vue.png";
import PostgreSQL from "../assets/postgresql.png";
import Flutter from "../assets/flutter.png";
import DotNet from "../assets/dotnet.png";

const items = [
  {
    name: "Laravel",
    imgPath: Laravel,
  },
  {
    name: "Vue",
    imgPath: Vue,
  },
  {
    name: "PostgreSQL",
    imgPath: PostgreSQL,
  },
  {
    name: "Flutter",
    imgPath: Flutter,
  },
  {
    name: ".NET",
    imgPath: DotNet,
  },
  {
    name: "HTML",
    imgPath: HTML,
  },
  {
    name: "CSS",
    imgPath: CSS,
  },
  {
    name: "JavaScript",
    imgPath: Javascript,
  },
  {
    name: "Django",
    imgPath: Django,
  },
  {
    name: "Boostrap",
    imgPath: BootstrapImg,
  },
  {
    name: "GitHub",
    imgPath: Github,
  },
  {
    name: "Python",
    imgPath: Python,
  },
  {
    name: "SQLite",
    imgPath: SQLite,
  },
  {
    name: "Tailwind",
    imgPath: Tailwind,
  },
  {
    name: "VS Code",
    imgPath: VSCode,
  },
  {
    name: "Shell",
    imgPath: Shell,
  },
  {
    name: "Docker",
    imgPath: Docker,
  },
];
</script>

<template>
  <div id="skills" class="min-h-screen bg-white-bg text-gray-800">
    <div class="max-w-[1000px] mx-auto p-16 h-full">
      <div>
        <p class="text-4xl inline border-b-4 border-orange">Skills</p>
        <p class="py-4 font-mono">
          // These are the technologies I've been working with lately
        </p>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <SkillCard v-for="item in items" :key="item.id" :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
