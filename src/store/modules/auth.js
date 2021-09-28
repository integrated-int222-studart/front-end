import axios from "axios";

const user_url = `${process.env.VUE_APP_REST_API}`;

export default {
  state: {
    user_data: {
      token: "",
      user: {
        email: "",
        password: "",
      },
    },
  },
  mutations: {
    LOGIN_USER: (state, payload) => {
      state.user_data = payload;
    },
  },
  actions: {
    async login({ commit }, user_auth) {
      const response = await axios.post(
        user_url + "login",
        user_auth
      );
      commit("LOGIN_USER", response.data);
    },
  },

  getters: {
    getUser: (state) => {
      return state.user_data;
    },
  },
};
