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
    productByUserId: null,
    collectionsByUserId: null,
    favouriteByUserId: null,
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
    SET_FAVOURITE_BY_USERID(state, payload) {
      state.favouriteByUserId = payload;
    },
    SET_FILENAME(state, payload) {
      state.filename = payload;
    },
    DELETE_PRODUCT(state, payload) {
      state.productByUserId = state.productByUserId.filter(
        (p) => payload.prodID != p.prodID
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
      // return this.state.collectionsByUserId;
    },
    async fetchFavouriteByUserId({ commit }, userid) {
      const response = await axios.get(user_url + "/user/favorite/" + userid);
      commit("SET_FAVOURITE_BY_USERID", response.data.productFavorite);
      // return this.state.collectionsByUserId;
    },
    async removeProduct({ commit }, product) {
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + localStorage.getItem("userToken");
      await axios.delete(user_url + `/user/deleteProduct/${product.prodID}`);
      commit("DELETE_PRODUCT", product);
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
    getFavouriteByUserId: (state) => {
      return state.favouriteByUserId;
    },
    getFilename: (state) => {
      return state.filename;
    },
  },
};
