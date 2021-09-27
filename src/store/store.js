import { createStore } from "vuex";

import productStore from "./modules/products";
import authStore from "./modules/auth";


export default createStore({
  modules: {
    productStore,
    authStore,
  },
  strict: process.env.NODE_ENV !== 'production'
});
