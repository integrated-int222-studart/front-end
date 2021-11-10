<template>
  <div class="app">
    <navbar></navbar>

    <!--main-->
    <main class="pt-18">
      <router-view />
    </main>

    <notification-list />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import navbar from "./components/Navbar.vue";
import NotificationList from "./components/NotificationList.vue";

export default {
  name: "app",
  components: { navbar, NotificationList },

  mounted() {
    this.isStillLogin();
    if (this.$store.getters.isAuthenticated) {
      this.fetchUser();
    }
  },
  computed: {},
  methods: {
    ...mapActions({ isStillLogin: "isStillLogin" }),
    ...mapActions({ fetchUser: "fetchUser" }),
  },
};
</script>
