<template>
  <div class="notifications-list fixed bottom-0 right-0 mr-8 mb-8">
    <notification-message
      v-for="notification in this.getNotificationList"
      :key="notification.id"
      :notification="notification"
    >
    </notification-message>
  </div>
</template>

<script>
import NotificationMessage from "../components/NotificationMessage.vue";
import { mapGetters } from "vuex";

export default {
  components: { NotificationMessage },
  computed: mapGetters(["getNotificationList"]),
};
</script>
