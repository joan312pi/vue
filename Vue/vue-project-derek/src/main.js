import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import { createPinia } from "pinia";

// createApp(App).use(router).mount("#app");

const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.use(pinia);

// 掛載放最後
app.mount("#app");
