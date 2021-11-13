import { createStore } from "vuex";
import productStore from "./modules/products";
import authStore from "./modules/auth";
import userStore from "./modules/user";
import notification from "./modules/notification";

export default createStore({
  modules: {
    productStore,
    authStore,
    userStore,
    notification,
  },
  strict: process.env.NODE_ENV !== "production",
});
