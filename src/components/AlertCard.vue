<template>
  <div class="fixed ">
    <alert-message
      v-for="alert in this.getAlertCard"
      :key="alert.id"
      :alert="alert"
    ></alert-message>
  </div>
</template>

<script>
import AlertMessage from "../components/AlertMessage.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    AlertMessage,
  },
  computed: mapGetters(["getAlertCard"]),
};
</script>
