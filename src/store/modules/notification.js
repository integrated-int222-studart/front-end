export default {
  state: {
    notifications_list: [],
    alert_card: [],
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
    SET_ALERT_CARD(state, alert) {
      state.alert_card.push({
        ...alert,
        id: (Math.random().toString(36) + Date.now().toString(36)).substring(2),
      });
    },
    REMOVE_ALERT_CARD(state, alertToRemove) {
      state.alert_card = state.alert_card.filter((alert) => {
        return alert.id != alertToRemove.id;
      });
    },
  },
  actions: {
    addNotification({ commit }, notification) {
      commit("SET_NOTIFICATION", notification);
    },
    removeNotification({ commit }, notification) {
      commit("REMOVE_NOTIFICATION", notification);
    },
    addAlertCard({ commit }, alert) {
      console.log(alert);
      commit("SET_ALERT_CARD", alert);
    },
    removeAlertCard({ commit }, alert) {
      commit("REMOVE_ALERT_CARD", alert);
    },
  },
  getters: {
    getNotificationList(state) {
      return state.notifications_list;
    },
    getAlertCard(state) {
      return state.alert_card;
    },
  },
};
