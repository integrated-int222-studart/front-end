export default {
  state: {
    notifications_list: [],
  },
  mutations: {
    SET_NOTIFICATION(state, notification) {
      state.notifications_list.push({
        ...notification,
        id: (Math.random().toString(36) + Date.now().toString(36)).substring(2),
      });
    },
    REMOVE_NOTIFICATION(state, notificationToRemove) {
      state.notifications_list = state.notifications_list.filter(
        (notification) => {
          return notification.id != notificationToRemove.id;
        }
      );
    },
  },
  actions: {
    addNotification({ commit }, notification) {
      commit("SET_NOTIFICATION", notification);
    },
    removeNotification({ commit }, notification) {
      commit("REMOVE_NOTIFICATION", notification);
    },
  },
  getters: {
    getNotificationList(state) {
      return state.notifications_list;
    },
  },
};
