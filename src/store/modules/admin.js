import axios from "axios";

const admin_url = `${process.env.VUE_APP_REST_API}`;

export default {
  state: {
    admin: {
      adminID: null,
      email: null,
    },
    admin_token: null,
    listProductApprovals: [],
    // eachProductApproval: {
    //   prodID: null,
    //   prodName: null,
    //   manufacDate: null,
    //   prodDescription: null,
    //   price: 0,
    //   status: 0,
    //   ownerID: null,
    //   productType: null,
    //   adminApproval: [
    //     {
    //       adminID: null,
    //       email: null,
    //       approval: {
    //         approvalID: null,
    //         adminID: null,
    //         prodID: null,
    //         approveDate: null,
    //         status: 0,
    //       },
    //     },
    //   ],
    // },
  },
  mutations: {
    LOGIN_ADMIN: (state, payload) => {
      state.admin.adminID = payload.admin.adminID;
      state.admin.email = payload.admin.email;
      state.admin_token = payload.token;

      localStorage.setItem("admin_token", payload.token);
    },
    LOGOUT_ADMIN(state) {
      state.admin_token = null;
      state.admin.adminID = null;
      state.admin.email = null;
    },
    SET_APPROVAL_PRODUCT(state, payload) {
      state.listProductApprovals = payload;
    },
    SET_LOCAL_STORAGE_ADMIN(state, payload) {
      state.admin_token = payload.token;
    },
    UPDATE_APPROVAL_STATUS(state, payload) {
      let find = state.listProductApprovals.findIndex(
        (e) => e.prodID == payload.prodID
      );

      // console.log(
      //   state.listProductApprovals[find].adminApproval[0].approval.status
      // );
      if (
        state.listProductApprovals[find].adminApproval == [] ||
        // state.listProductApprovals[find].adminApproval == [] ||
        state.listProductApprovals[find].adminApproval.length == 0
      ) {
        console.log("empty");
        state.listProductApprovals[find] = payload;
      }

      state.listProductApprovals[find] = payload;

      // console.log(
      //   state.listProductApprovals[find].adminApproval[0].approval.status
      // );
    },
  },
  actions: {
    async loginAdmin({ commit, dispatch }, admin_auth) {
      try {
        let res = await axios.post(admin_url + "/admin/login", admin_auth);
        let admin = res.data.admin;

        commit("LOGIN_ADMIN", res.data);

        dispatch("addNotification", {
          type: "success",
          message: "login admin seccess",
        });
        return { admin };
      } catch (error) {
        dispatch("addNotification", {
          type: "error",
          message: error,
        });
        return { error: "ERROR" };
      }
    },
    async logoutAdmin({ commit, state }) {
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + state.admin_token;

      await axios.delete(admin_url + "/admin/logout");

      localStorage.removeItem("admin_token");
      commit("LOGOUT_ADMIN");
    },

    async fetchApprovalProduct({ commit, state }) {
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + state.admin_token;
      try {
        const response = await axios.get(admin_url + "/admin/getApproval");

        commit("SET_APPROVAL_PRODUCT", response.data);
      } catch {
        console.log({ error: "login" });
      }
    },
    isStillLoginAdmin({ commit }) {
      if (localStorage.getItem("admin_token")) {
        let obj = {
          token: localStorage.getItem("admin_token"),
        };

        commit("SET_LOCAL_STORAGE_ADMIN", obj);
      }
    },
    async updateApproveProduct({ dispatch, commit, state }, updateValue) {
      try {
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + state.admin_token;
      } catch (error) {
        dispatch("addNotification", {
          type: "error",
          message: error,
        });
      }
      try {
        const date = new Date();
        const response = await axios.put(
          admin_url + "/admin/approveProduct/" + updateValue.prodID,
          {
            status: updateValue.status,
            purchaseDate: date.toLocaleDateString(),
          }
        );
        // let udt = { prod_id: prod_id, status: 0 };
        commit("UPDATE_APPROVAL_STATUS", response.data);

        dispatch("addNotification", {
          type: "success",
          message: "Approve product success",
        });
      } catch (error) {
        dispatch("addNotification", {
          type: "error",
          message: error,
        });
      }
    },
  },

  getters: {
    getCurrentAdmin: (state) => {
      return state.admin;
    },
    getListProductApprovals: (state) => {
      console.log(state.listProductApprovals);
      return state.listProductApprovals;
    },
    isAdminAuthenticated: (state) => !!state.admin_token,
  },
};
