import axios from "axios";

const user_url = `${process.env.VUE_APP_REST_API}`;

export default {
  state: {
    current_user: {
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
    current_username: null,
    auth_token: null,
  },
  mutations: {
    LOGIN_USER: (state, payload) => {
      localStorage.setItem("userToken", payload.token);
      localStorage.setItem("username", payload.user.username);

      state.current_user = payload.user;
      state.current_username = payload.user.username;
      state.auth_token = payload.token;
    },
    SET_USER_INFO(state, payload) {
      state.current_user = payload;
    },

    LOGOUT_USER(state) {
      state.auth_token = null;
      state.current_username = null;
      state.current_user = null;
    },
    SET_LOCAL_STORAGE_USER(state, payload) {
      state.auth_token = payload.token;
      state.current_username = payload.username;
    },
  },
  actions: {
    async login({ commit, dispatch }, user_auth) {
      try {
        let res = await axios.post(user_url + "/user/login", user_auth);
        let username = res.data.user.username;

        commit("LOGIN_USER", res.data);

        dispatch("addNotification", {
          type: "success",
          message: "เข้าสู่ระบบสำเร็จ",
        });
        return { username };
      } catch {
        dispatch("addAlertCard", {
          type: "error",
          message: "เข้าสู่ระบบไม่สำเร็จ กรุณาตรวจสอบอีเมลและรหัสผ่าน",
        });

        return { error: "ERROR" };
      }
    },

    async register(_, user_regis) {
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

    async fetchCurrentUser({ commit }) {
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + localStorage.getItem("userToken");
      const response = await axios.get(user_url + "/user/profile");
      commit("SET_USER_INFO", response.data.user);
    },

    isStillLogin({ commit }) {
      if (
        localStorage.getItem("username") &&
        localStorage.getItem("userToken")
      ) {
        let obj = {
          token: localStorage.getItem("userToken"),
          username: localStorage.getItem("username"),
        };

        commit("SET_LOCAL_STORAGE_USER", obj);
      }
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
