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
  },
  mutations: {
    SET_USER_BY_ID(state, payload) {
      state.userById = payload;
    },
    SET_PRODUCT_BY_USERID(state, payload) {
      state.productByUserId = payload;
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
  },

  getters: {
    getUserById: (state) => {
      return state.userById;
    },
    getProductByUserId: (state) => {
      return state.productByUserId;
    },
  },
};
