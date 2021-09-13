import { createApp } from "vue";
import App from "./App.vue";
import VeeValidaionPlugin from "./includes/validation";
import "./index.css";
import router from "./router/index";

createApp(App).use(router).use(VeeValidaionPlugin).mount("#app");
