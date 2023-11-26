import "./assets/main.css";
import store from "./store/index";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import BaseButton from "./components/Ui/BaseButton.vue";
import BaseCard from "./components/Ui/BaseCard.vue";
import "aos/dist/aos.css";

const app = createApp(App);

app.use(router);
app.use(store);
app.component("BaseButton", BaseButton);
app.component("BaseCard", BaseCard);

app.mount("#app");
