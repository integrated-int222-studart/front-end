import axios from "axios";

const user_url = `${process.env.VUE_APP_REST_API}`;

export default {
  state: {
    current_user: {
      type: Object,
      default: null,
    },
    current_username: null,
    auth_token: null,
  },
  mutations: {
    LOGIN_USER: (state, payload) => {
      localStorage.setItem("userToken", payload.token);
      localStorage.setItem("username", payload.user.username);

      // console.log(payload.token);
      // console.log(payload.user.username);

      state.current_user = payload.user;
      state.current_username = payload.user.username;
      state.auth_token = payload.token;
    },
    SET_USER_INFO(state, payload) {
      // console.log("USER INFO");
      // console.log(localStorage.getItem("userToken"));
      console.log("USER INFO", state.current_user);
      state.current_user = payload;
    },

    LOGOUT_USER(state) {
      state.auth_token = null;
      state.current_username = null;
      state.current_user = null;
    },
  },
  actions: {
    async login({ commit }, user_auth) {
      // console.log(localStorage.getItem("userToken"));
      try {
        let res = await axios.post(user_url + "/user/login", user_auth);
        let username = res.data.user.username;

        commit("LOGIN_USER", res.data);
        return { username };

        // return user_auth;
      } catch {
        return { error: "ERROR" };
      }
    },

    async register(_, user_regis) {
      console.log(user_regis);
      try {
        await axios.post(user_url + "/user/register", user_regis);
        return { user_regis };
      } catch {
        return { error: "ERROR" };
      }
    },

    async logout({ commit }) {
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + localStorage.getItem("userToken");

      await axios.delete(user_url + "/user/logout");

      localStorage.clear();
      commit("LOGOUT_USER");
    },

    async fetchUser({ commit }) {
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + localStorage.getItem("userToken");

      const response = await axios.get(user_url + "/user/profile");
      commit("SET_USER_INFO", response.data);
    },
  },

  getters: {
    getToken: (state) => {
      return state.auth_token;
    },
    getCurrentUser: (state) => {
      return state.current_user;
    },
    getCurrentUsername: (state) => {
      return state.current_username;
    },
    isAuthenticated: (state) => !!state.auth_token,
  },
};

// localStorage.setItem('token',response.data.token)
// header:{
//   Authorization: 'Bearer ' + localStorage.getItem('token')
// }
