import axios from "axios";

const resource_url = `${process.env.VUE_APP_REST_API}`;

export default {
  state: {
    products: [],
  },

  mutations: {
    GET_PRODUCTS(state, payload) {
      state.products = payload;
    },
    ADD_PRODUCT(state, payload) {
      state.products.push(payload);
    },
    DELETE_PRODUCT(state, payload) {
      state.products = state.products.filter((p) => payload.prodID != p.prodID);
    },
    UPDATE_PRODUCT() {},
  },
  actions: {
    async fetchProducts({ commit }) {
      // axios.defaults.headers.common["Authorization"] = "Bearer "+"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjEsImlhdCI6MTYzMjQ3MTM1OH0.Bfrbi31zHVZ4XNj-VVIc8ulGGjd8_zuYQNXby_oY_EU";
      // console.log(resource_url);

      const response = await axios.get(
        resource_url + "allProduct"
        // "http://13.76.182.102:3000/user/allProduct"
      );

      commit("GET_PRODUCTS", response.data);
    },

    async addProduct({ commit }, product) {
      axios.defaults.headers.common["Authorization"] =
        "Bearer " +
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjEsImlhdCI6MTYzMjc1NjQ3NX0.C0gX6ewTcnFpc3lBWq2S-fdfewlt2Ir1WO3uwWM10nA";
      const response = await axios.post(
        resource_url + "addProduct",
        // "http://13.76.182.102:3000/user/addProduct",
        product
      );

      commit("ADD_PRODUCT", response.data);
    },
    // async updateProduct({ commit }, product) {
    //   const response = await axios.put(`${resource_url}/${product.prodID}`);
    //   commit("UPDATE_PRODUCT", response.data);
    // },
    async removeProduct({ commit }, product) {
      axios.defaults.headers.common["Authorization"] =
        "Bearer " +
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjEsImlhdCI6MTYzMjQ3MTM1OH0.Bfrbi31zHVZ4XNj-VVIc8ulGGjd8_zuYQNXby_oY_EU";
      const response = await axios.delete(
        resource_url + `deleteProduct/${product.prodID}`
      );

      console.log(response.data);
      commit("DELETE_PRODUCT", product);
    },
  },
  getters: {
    getProducts: (state) => {
      return state.products;
    },
  },
};
