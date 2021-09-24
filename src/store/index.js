import { createStore } from "vuex";
import axios from "axios";

const resource_url = "http://localhost:3000/product";
// http://13.76.182.102:3000/user/allProduct
// const tokenTein1142 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjEsImlhdCI6MTYzMjQ3MTM1OH0.Bfrbi31zHVZ4XNj-VVIc8ulGGjd8_zuYQNXby_oY_EU"

export default createStore({
  state: {
    products: [],
    // product: {},
  },
  mutations: {
    GET_PRODUCTS(state, payload) {
      state.products = payload;
    },
    ADD_PRODUCT(state, payload){
      state.products.push(payload)

    },
    DELETE_PRODUCT(state, payload){
      state.products = state.products.filter(p => payload.prodID != p.prodID)
    },
    UPDATE_PRODUCT(){

    }
  },
  actions: {
    async fetchProducts({ commit }) {
      const response = await axios.get("http://13.76.182.102:3000/user/allProduct");
      commit("GET_PRODUCTS", response.data);
    },

    async addProduct({ commit }, product) {

      // axios.defaults.headers.common["Authorization"] = "Bearrer "+"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjEsImlhdCI6MTYzMjQ3MTM1OH0.Bfrbi31zHVZ4XNj-VVIc8ulGGjd8_zuYQNXby_oY_EU";
      axios.defaults.headers.common["Authorization"] = "Bearer "+"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjEsImlhdCI6MTYzMjQ3MTM1OH0.Bfrbi31zHVZ4XNj-VVIc8ulGGjd8_zuYQNXby_oY_EU";
      const response = await axios.post("http://13.76.182.102:3000/user/addProduct", product);
      
      commit("ADD_PRODUCT", response.data);
      // commit("ADD_PRODUCT", product);
    },
    async updateProduct({ commit }, product) {
      const response = await axios.put(`${resource_url}/${product.prodID}`);
      commit("UPDATE_PRODUCT", response.data);
    },
    async removeProduct({ commit }, product) {
      // const response = await axios.delete(`${resource_url}/${product.prodID}`);
      // commit("DELETE_PRODUCT", response.data);
      commit("DELETE_PRODUCT", product);
    },
  },
  modules: {},
  getters: {
    getProducts: (state) => {
      return state.products;
    },
  },
});
