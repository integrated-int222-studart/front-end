<template>
  <div class="">
    <navbar></navbar>

    <div class="pt-18">
      <router-view />
    </div>
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
.pt-18{
  padding-top: 4.25rem;
}
</style>
