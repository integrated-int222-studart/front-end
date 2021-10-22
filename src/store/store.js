import { createStore } from "vuex";

import productStore from "./modules/products";
import authStore from "./modules/auth";
import userStore from "./modules/user";


export default createStore({
  modules: {
    productStore,
    authStore,
    userStore,
  },
  strict: process.env.NODE_ENV !== 'production'
});
