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
    username: "",
    all_type: [],
    all_style: [],
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
    // DELETE_PRODUCT(state, payload) {
    //   state.products = state.products.filter((p) => payload.prodID != p.prodID);
    // },

    UPDATE_PRODUCT() {},

    SET_TYPE(state, payload) {
      state.all_type = payload;
    },
    SET_STYLE(state, payload) {
      state.all_style = payload;
    },
    SET_USERNAME(state, payload) {
      state.username = payload;
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      const response = await axios.get(resource_url + "/user/allProduct");

      commit("SET_PRODUCTS", response.data);
    },

    async addProduct({ dispatch }, new_input) {
      try {
        // console.log(new_input);
        // console.log(new_input.product);
        // console.log(new_input.image_list);

        axios.defaults.headers.common["Authorization"] =
          "Bearer " + localStorage.getItem("userToken");

        const response = await axios.post(
          resource_url + "/user/addProduct",
          new_input.product
        );

        const fd = new FormData();
        new_input.image_list.forEach((element) => {
          fd.append("image", element);
        });
        const res = await axios.post(
          resource_url + "/image/upload/" + response.data.prodID,
          fd
        );
        console.log(res.data);

        dispatch("addNotification", {
          type: "success",
          message: "add product seccess",
        });

        return {
          // dispatch("set_notification", {type: "success", message: "")
          alert: true,
        };
      } catch {
        return { error: "ERROR" };
      }
    },

    async addProductCollection({ dispatch }, prod_id) {
      // console.log(prod_id);

      axios.defaults.headers.common["Authorization"] =
        "Bearer " + localStorage.getItem("userToken");
      const date = new Date();
      // console.log(date.toLocaleDateString());
      const response = await axios.post(
        resource_url + "/user/addCollection/" + prod_id,
        {
          purchaseDate: date.toLocaleDateString(),
        }
      );

      dispatch("addNotification", {
        type: "success",
        message: "add collection seccess",
      });
      console.log(response.data);
    },

    // async removeProduct({ commit }, product) {
    //   axios.defaults.headers.common["Authorization"] =
    //     "Bearer " + localStorage.getItem("userToken");
    //   await axios.delete(
    //     resource_url + `/user/deleteProduct/${product.prodID}`
    //   );

    // commit("DELETE_PRODUCT", product);
    // },
    async fetchAllType({ commit }) {
      const response = await axios.get(resource_url + "/product/allType");
      commit("SET_TYPE", response.data);
    },

    async fetchAllStyle({ commit }) {
      const response = await axios.get(resource_url + "/product/allStyle");
      commit("SET_STYLE", response.data);
    },

    // here
    async fetchProductById({ commit, dispatch }, prod_id) {
      const response = await axios.get(
        resource_url + "/product/productById/" + prod_id
      );
      await commit("SET_PRODUCT_BY_ID", response.data);
      await dispatch("fetchUsernameByUserId", response.data);
    },

    async fetchUsernameByUserId({ commit }, product) {
      const response = await axios.get(
        resource_url + "/user/username/" + product.ownerID
      );
      commit("SET_USERNAME", response.data.username);
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
    getAllStyle: (state) => {
      return state.all_style;
    },
    getUsername: (state) => {
      return state.username;
    },
  },
};
