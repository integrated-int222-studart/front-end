<template>
  <div class="login">
    <Login />
  </div>
</template>

<script>
import Login from "../components/Login.vue";

export default {
  components: { Login },
  data() {
    return {
      formInputValue: {
        username: "",
        password: "",
        rememberme: false,
      },
      checkValidate: {
        errorUsername: false,
        errorPassword: false,
      },
    };
  },

};
</script>
