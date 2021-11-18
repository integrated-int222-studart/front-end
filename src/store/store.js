import { createStore } from "vuex";
import productStore from "./modules/products";
import authStore from "./modules/auth";
import userStore from "./modules/user";
import notification from "./modules/notification";
import admin from "./modules/admin";

export default createStore({
  modules: {
    productStore,
    authStore,
    userStore,
    notification,
    admin,
  },
  strict: process.env.NODE_ENV !== "production",
});
