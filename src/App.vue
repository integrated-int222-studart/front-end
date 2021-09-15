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
import navbar from "./components/Navbar.vue";

export default {
  name: "app",
  components: { navbar },
};
</script>

<style scoped>
.pt-18 {
  padding-top: 4.25rem;
}
</style>
