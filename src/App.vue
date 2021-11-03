<template>
  <div class="app">
    <navbar></navbar>

    <!--main-->
    <main class="pt-18">
      <router-view />
    </main>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import navbar from "./components/Navbar.vue";

export default {
  name: "app",
  components: { navbar },

  mounted() {
    this.isStillLogin();
  },
  computed: {},
  methods: {
    ...mapActions({ isStillLogin: "isStillLogin" }),
  },
};
</script>
