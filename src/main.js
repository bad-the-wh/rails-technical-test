import { createApp } from "vue";
import App from "./App.vue";
import router from './router';
import store from "./store";

/**
 * Load JWT from Local Storage on Refresh.
 */
const localAuthToken = localStorage.getItem("auth_token");

if (localAuthToken) {
  store.dispatch("loginUserWithToken", { auth_token: localAuthToken })
    .catch((error) => {
      // Handle the error if necessary
      console.error("Error during loginUserWithToken:", error);
    });
}


createApp(App).use(store).use(router).mount('#app');
