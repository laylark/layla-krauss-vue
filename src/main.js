import { createApp } from "vue";
import { createPinia } from "pinia";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  BiArrowRight,
  CoHamburgerMenu,
  IoClose,
  BiGithub,
  CoLinkedin,
} from "oh-vue-icons/icons";
import VueSmoothScroll from "vue3-smooth-scroll";

import App from "./App.vue";
import router from "./router";
import "./style.css";
// import "./assets/main.css";

addIcons(BiArrowRight, CoHamburgerMenu, IoClose, BiGithub, CoLinkedin);

const app = createApp(App);

app.component("v-icon", OhVueIcon);
app.use(createPinia());
app.use(router);
app.use(VueSmoothScroll);

app.mount("#app");
