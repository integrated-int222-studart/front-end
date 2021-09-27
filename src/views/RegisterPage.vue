<template>
  <div class="register">
    <register></register>
  </div>
</template>

<script>
import Register from "../components/Register.vue";

export default {
  components: { Register },
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
  methods: {
    formValidate() {
      if (this.formInputValue.username === "") {
        this.checkValidate.errorUsername = true;
      } else {
        this.checkValidate.errorUsername = false;
      }
      if (this.formInputValue.password === "") {
        this.checkValidate.errorPassword = true;
      } else {
        this.checkValidate.errorPassword = false;
      }
    },
    submit() {
      this.formValidate();
      if (
        this.checkValidate.errorUsername ||
        this.checkValidate.errorPassword
      ) {
        console.log("Input error");
      } else {

        console.log("send form success");
      }
    },
  },
};
</script>
