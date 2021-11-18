import axios from "axios";

const user_url = `${process.env.VUE_APP_REST_API}`;

export default {
  state: {
    userById: {
      userID: null,
      username: null,
      email: null,
      firstName: null,
      lastName: null,
      description: null,
      status: null,
      school: null,
      imageName: null,
      imageType: null,
      imageURL: null,
    },
    productByUserId: [],
    collectionsByUserId: [],
    favoriteByUserId: [],
    filename: null,
    userImage: "",
  },
  mutations: {
    SET_USER_BY_ID(state, payload) {
      state.userById = payload;
    },
    SET_PRODUCT_BY_USERID(state, payload) {
      state.productByUserId = payload;
    },
    SET_USER_IAMGE(state, payload) {
      state.userImage = payload;
    },
    SET_COLLECTION_BY_USERID(state, payload) {
      state.collectionsByUserId = payload;
    },
    SET_FAVORITE_BY_USERID(state, payload) {
      state.favoriteByUserId = payload;
    },
    SET_FILENAME(state, payload) {
      state.filename = payload;
    },
    DELETE_PRODUCT(state, payload) {
      state.productByUserId = state.productByUserId.filter(
        (p) => payload.prodID != p.prodID
      );
    },
    ADD_FAVORITE(state, payload) {
      state.favoriteByUserId.push(payload);
    },
    DELETE_FAVORITE(state, payload) {
      state.favoriteByUserId = state.favoriteByUserId.filter(
        (p) => payload != p.prodID
      );
    },
  },
  actions: {
    async fetchUserByUsername({ commit, dispatch }, username) {
      const response = await axios.get(user_url + "/user/profile/" + username);
      await commit("SET_USER_BY_ID", response.data);

      dispatch("fetchProductByUserId", response.data.userID);
    },

    async fetchProductByUserId({ commit }, userid) {
      const response = await axios.get(user_url + "/user/products/" + userid);
      commit("SET_PRODUCT_BY_USERID", response.data);
    },
    async getImage({ commit }, userid) {
      const response = await axios.get(user_url + "/user/getImage/" + userid);
      commit("SET_USER_IAMGE", response);
    },
    async fetchCollectionsByUserId({ commit }, userid) {
      const response = await axios.get(user_url + "/user/collection/" + userid);
      commit("SET_FILENAME", response.data.productCollection.images);
      commit("SET_COLLECTION_BY_USERID", response.data.productCollection);
    },
    async fetchFavoriteByUserId({ commit }, userid) {
      const response = await axios.get(user_url + "/user/favorite/" + userid);
      commit("SET_FAVORITE_BY_USERID", response.data.productFavorite);
    },
    async removeProduct({ commit, dispatch }, product) {
      try {
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + localStorage.getItem("userToken");
      } catch (error) {
        dispatch("addNotification", {
          type: "error",
          message: error,
        });
      }
      try {
        await axios.delete(user_url + `/user/deleteProduct/${product.prodID}`);
        commit("DELETE_PRODUCT", product);
        dispatch("addNotification", {
          type: "success",
          message: "remove seccess",
        });
      } catch (error) {
        dispatch("addNotification", {
          type: "error",
          message: error,
        });
      }
    },

    async addProductCollection({ dispatch }, prod_id) {
      try {
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + localStorage.getItem("userToken");
      } catch (error) {
        dispatch("addNotification", {
          type: "error",
          message: error,
        });
      }

      try {
        const date = new Date();
        await axios.post(user_url + "/user/addCollection/" + prod_id, {
          purchaseDate: date.toLocaleDateString(),
        });

        dispatch("addNotification", {
          type: "success",
          message: "add collection seccess",
        });
      } catch (error) {
        dispatch("addNotification", {
          type: "error",
          message: error,
        });
      }
    },

    async addFavoriteByProdustId({ commit, dispatch }, fav_product) {
      // try {
      //   axios.defaults.headers.common["Authorization"] =
      //     "Bearer " + localStorage.getItem("userToken");
      // } catch {
      //   dispatch("addAlertCard", {
      //     type: "error",
      //     message: "กรุณาเข้าสู่ระบบก่อน",
      //   });
      // }

      try {
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + localStorage.getItem("userToken");
        await axios.post(user_url + "/user/addFavorite/" + fav_product.prodID);

        commit("ADD_FAVORITE", fav_product);
        dispatch("addNotification", {
          type: "success",
          message: "add favorite seccess",
        });
      } catch (error) {
        dispatch("addAlertCard", {
          type: "error",
          message: "กรุณาเข้าสู่ระบบก่อน",
        });

        // dispatch("addNotification", {
        //   type: "error",
        //   message: `${error}`,
        // });
      }
    },
    async removeFavoriteByProdustId({ commit, dispatch }, prod_id) {
      try {
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + localStorage.getItem("userToken");

        await axios.delete(user_url + "/user/deleteFavorite/" + prod_id);

        commit("DELETE_FAVORITE", prod_id);
        dispatch("addNotification", {
          type: "success",
          message: "remove favorite seccess",
        });
      } catch (error) {
        dispatch("addNotification", {
          type: "error",
          message: `${error}`,
        });
      }
    },
    async updateUserProfile({ dispatch }, updated_product) {
      try {
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + localStorage.getItem("userToken");
      } catch (error) {
        dispatch("addNotification", {
          type: "error",
          message: error,
        });
      }

      try {
        await axios.put(user_url + "/user/edit/profile", updated_product);
        // await commit("UPDATE_EDIT_PRODUCT", response.data);
        dispatch("addNotification", {
          type: "success",
          message: "edit product seccess",
        });
        // return response.data;
      } catch (error) {
        dispatch("addNotification", {
          type: "error",
          message: error,
        });
      }

      // await dispatch("fetchUsernameByUserId", response.data);
    },

    // async downloadCollectionFile(_, filenames) {
    //   console.log(filenames);
    //   const response = await axios.get(user_url + "/image/download/", {
    //     filename: filenames,
    //   });
    //   console.log(response.data);
    // },
  },

  getters: {
    getUserById: (state) => {
      return state.userById;
    },
    getProductByUserId: (state) => {
      return state.productByUserId;
    },
    getUserImage: (state) => {
      return state.userImage;
    },
    getCollectionByUserId: (state) => {
      return state.collectionsByUserId;
    },
    getFavoriteByUserId: (state) => {
      return state.favoriteByUserId;
    },
    getFilename: (state) => {
      return state.filename;
    },
  },
};
