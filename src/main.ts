import { createApp } from "vue";
import App from "./App.vue";
import VeeValidaionPlugin from "./includes/validation";
import "./index.css";

createApp(App).use(VeeValidaionPlugin).mount("#app");
