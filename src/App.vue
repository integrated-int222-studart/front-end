<template>
  <div class="app">
    <!--main-->
    <main class="pt-18">
      <navbar></navbar>

      <router-view />
    </main>

    <notification-list />
    <alert-card />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import navbar from "./components/Navbar.vue";
import NotificationList from "./components/NotificationList.vue";
import AlertCard from "./components/AlertCard.vue";

export default {
  name: "app",
  components: { navbar, NotificationList, AlertCard },

  mounted() {
    this.isStillLogin();
    if (this.$store.getters.isAuthenticated) {
      this.fetchCurrentUser();
    }
  },
  computed: {},
  methods: {
    ...mapActions({ isStillLogin: "isStillLogin" }),
    ...mapActions({ fetchCurrentUser: "fetchCurrentUser" }),
  },
};
</script>
