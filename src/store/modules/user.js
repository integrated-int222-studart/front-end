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
    SET_FILENAME(state, payload) {
      state.filename = payload;
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
    async downloadCollectionFile(_, filenames) {
      console.log(filenames);
      const response = await axios.get(user_url + "/image/download/", {
        filename: filenames,
      });
      console.log(response.data);
    },
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
    getFilename: (state) => {
      return state.filename;
    },
  },
};
