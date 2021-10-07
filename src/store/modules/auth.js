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
      console.log("test");
      console.log(user_auth);

      const response = await axios.post(user_url + "/user/login", user_auth);
      localStorage.setItem("token", response.data.token);

      console.log(response.data.token);
      commit("LOGIN_USER", response.data);
    },

    async register({ commit },user_regis) {
      console.log("test");
      console.log(user_regis);
      const response = await axios.post(user_url + "/user/register", user_regis);
      // const response = await axios.post(user_url + "/user/register", {
      //   username: "ffffff",
      //   email: "12345@hotmail.com",
      //   password: "12345",
      //   status: "not allowed",
      //   firstName: "Pantavit",
      //   lastName: "Hengnalen",
      //   school: "KMUTT",
      // });

      console.log(response.data);
    },
  },

  getters: {
    getUser: (state) => {
      return state.user_data;
    },
  },
};

// localStorage.setItem('token',response.data.token)
// header:{
//   Authorization: 'Bearer ' + localStorage.getItem('token')
// }
