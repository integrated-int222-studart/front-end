import axios from "axios";

const user_url = `${process.env.VUE_APP_REST_API}`;

export default {
  state: {
    user_data: {
      token: "",
      user: {

      },
    },
    created_user: true

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

      // console.log(response.data.token);
      dispatch('attempt', response.data.token)
      commit("LOGIN_USER", response.data);
    },

    async register(_, user_regis) {
      await axios.post(user_url + "/user/register", user_regis);
    },

    async attempt(_,token){
      console.log(token);
    }
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
