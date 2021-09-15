export default {
  state: {
    username: [],
  },
  mutations: {
    SET_PRODUCTS: (state, user) => {
      state.username = user.username;
    },
  },
  getter: {
    USERNAME: (state) => {
      return state.username;
    },
  },
  actions: {
    GET_USER: (context) => {
      axios.get("user").then((res) => {
        context.commit("SET_USER", res.user);
      });
    },
  },
};
