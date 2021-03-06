import axios from "axios";

const resource_url = `${process.env.VUE_APP_REST_API}`;

export default {
  state: {
    products: [],
    productById: {
      prodID: 0,
      prodName: "",
      manufacDate: "",
      prodDescription: "",
      price: 0,
      ownerID: 0,
      productType: 0,
      type: {},
      style: [],
      images: [
        {
          imageID: 0,
          name: "",
          type: "",
          url: "",
          prodID: 0,
        },
      ],
    },
    random_products: [],
    username: "",
    all_type: [],
    all_style: [],
    edit_product: {},
  },

  mutations: {
    SET_PRODUCTS(state, payload) {
      state.products = payload;
    },
    SET_PRODUCT_BY_ID(state, payload) {
      state.productById = payload;
    },
    SET_RANDOM_PRODUCT(state, payload) {
      state.random_products = payload;
    },
    ADD_PRODUCT(state, payload) {
      state.products.push(payload);
    },
    SET_TYPE(state, payload) {
      state.all_type = payload;
    },
    SET_STYLE(state, payload) {
      state.all_style = payload;
    },
    SET_USERNAME(state, payload) {
      state.username = payload;
    },
    SET_EDIT_PRODUCT(state, payload) {
      state.edit_product = payload;
    },

    UPDATE_EDIT_PRODUCT(state, payload) {
      let find = state.products.findIndex((e) => e.prodID == payload.prodID);
      state.products[find] = payload;
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      const response = await axios.get(resource_url + "/user/allProduct");

      commit("SET_PRODUCTS", response.data);
    },

    async addProduct({ dispatch }, new_input) {
      try {
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + localStorage.getItem("userToken");
      } catch {
        dispatch("addNotification", {
          type: "error",
          message: "Need Login first",
        });
      }
      try {
        const response = await axios.post(
          resource_url + "/user/addProduct",
          new_input.product
        );

        const fd = new FormData();
        new_input.image_list.forEach((element) => {
          fd.append("image", element);
        });
        await axios.post(
          resource_url + "/image/upload/" + response.data.prodID,
          fd
        );

        dispatch("addNotification", {
          type: "success",
          message: "add product seccess",
        });
        return { username: localStorage.getItem("username") };
      } catch {
        return "error";
      }
    },

    async fetchAllType({ commit }) {
      const response = await axios.get(resource_url + "/product/allType");
      commit("SET_TYPE", response.data);
    },

    async fetchAllStyle({ commit }) {
      const response = await axios.get(resource_url + "/product/allStyle");
      commit("SET_STYLE", response.data);
    },

    async fetchProductById({ commit, dispatch }, prod_id) {
      const response = await axios.get(
        resource_url + "/product/productById/" + prod_id
      );
      await commit("SET_PRODUCT_BY_ID", response.data);
      await commit("SET_EDIT_PRODUCT", response.data);
      await dispatch("fetchUsernameByUserId", response.data);
    },

    async fetchRandomProduct({ commit }) {
      const response = await axios.get(resource_url + "/product/random");
      await commit("SET_RANDOM_PRODUCT", response.data);
    },

    async fetchUsernameByUserId({ commit }, product) {
      const response = await axios.get(
        resource_url + "/user/username/" + product.ownerID
      );
      commit("SET_USERNAME", response.data.username);
    },

    async fetchEditProductById({ commit }, prod_id) {
      const response = await axios.get(
        resource_url + "/product/productById/" + prod_id
      );
      await commit("SET_EDIT_PRODUCT", response.data);
    },

    async updateEditProductById({ dispatch, commit }, edit_product) {
      try {
        await axios.put(
          resource_url + "/product/edit/" + edit_product.prodID,
          edit_product.product
        );
        const response = await axios.put(
          resource_url + "/product/editStyle/" + edit_product.prodID,
          { styleID: edit_product.product.styleID }
        );
        await commit("UPDATE_EDIT_PRODUCT", response.data);
        dispatch("addNotification", {
          type: "success",
          message: "edit product seccess",
        });
      } catch (error) {
        dispatch("addNotification", {
          type: "error",
          message: error,
        });
      }
    },
  },
  getters: {
    getProducts: (state) => {
      return state.products;
    },
    getProductById: (state) => {
      return state.productById;
    },
    getRandomProducts: (state) => {
      return state.random_products;
    },
    getAllType: (state) => {
      return state.all_type;
    },
    getAllStyle: (state) => {
      return state.all_style;
    },
    getUsername: (state) => {
      return state.username;
    },
    getEditProduct: (state) => {
      return state.edit_product;
    },
  },
};
