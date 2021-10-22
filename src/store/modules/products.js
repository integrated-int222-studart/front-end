import axios from "axios";

const resource_url = `${process.env.VUE_APP_REST_API}`;

export default {
  state: {
    products: [],
    productById: {},
    all_type: [],
  },

  mutations: {
    SET_PRODUCTS(state, payload) {
      state.products = payload;
    },
    SET_PRODUCT_BY_ID(state, payload) {
      state.productById = payload;
    },
    ADD_PRODUCT(state, payload) {
      state.products.push(payload);
    },
    DELETE_PRODUCT(state, payload) {
      state.products = state.products.filter((p) => payload.prodID != p.prodID);
    },

    UPDATE_PRODUCT() {},

    SET_TYPE(state, payload) {
      state.all_type = payload;
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      // axios.defaults.headers.common["Authorization"] = "Bearer "+"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjEsImlhdCI6MTYzMjQ3MTM1OH0.Bfrbi31zHVZ4XNj-VVIc8ulGGjd8_zuYQNXby_oY_EU";

      const response = await axios.get(resource_url + "/user/allProduct");

      commit("SET_PRODUCTS", response.data);
    },

    async addProduct({ commit }, product) {
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + localStorage.getItem("userToken");
      console.log(localStorage.getItem("userToken"));
      const response = await axios.post(
        resource_url + "/user/addProduct",
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
        "Bearer " + localStorage.getItem("userToken");
      await axios.delete(
        resource_url + `/user/deleteProduct/${product.prodID}`
      );

      commit("DELETE_PRODUCT", product);
    },
// /prodType
    async fetchAllType({ commit }) {
      const response = await axios.get(resource_url + "/user/allType");
      commit("SET_TYPE", response.data);
    },

    async fetchProductById({ commit }, prod_id) {
      const response = await axios.get(resource_url + "/product/productById/" + prod_id);
      commit("SET_PRODUCT_BY_ID", response.data);
    },
  },
  getters: {
    getProducts: (state) => {
      return state.products;
    },
    getProductById: (state) => {
      return state.productById;
    },
    getAllType: (state) => {
      return state.all_type;
    },
  },
};
