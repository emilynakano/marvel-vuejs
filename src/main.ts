import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "./assets/style/main.css";
import "vue-progressive-image/dist/style.css";
const app = createApp(App);

app.use(createPinia());
app.use(router);

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

library.add(faMagnifyingGlass);

app.component("font-awesome-icon", FontAwesomeIcon).mount("#app");
