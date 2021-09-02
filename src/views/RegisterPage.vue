<template>
  <div class="register">
    <div class="md:flex md:items-center">
      <div class="w-full mx-auto ">
        <p class="text-3xl font-bold">Register page</p>

        <h3 class="text-gray-700 uppercase text-lg">{ Profile Name }</h3>
        <span class="text-gray-500 mt-3">describetion</span>
        <hr class="my-3" />
        <span class="text-gray-500 mt-3"
          >Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries</span
        >
      </div>
    </div>
  </div>
  <div class="mb-10">
    <p class="">Please enter your username and password to login</p>
    <form @submit.prevent="submit">
      <div class="form-control">
        <label class="">
          <p class="">Username</p>
          <input
            type="text"
            v-show="!checkValidate.errorUsername"
            v-model="formInputValue.username"
            class="input input-bordered input-sm mt-3 mb-3"
          />
          <input
            type="text"
            v-show="checkValidate.errorUsername"
            v-model="formInputValue.username"
            class="input input-error input-sm mt-3 mb-3"
          />
          <p
            v-show="checkValidate.errorUsername"
            class="text-red-600 text-xs font-light mb-3"
          >
            Please enter username.
          </p>
        </label>
        <label class="">
          <p class="">Password</p>
          <input
            type="text"
            v-show="!checkValidate.errorPassword"
            v-model="formInputValue.password"
            class="input input-bordered input-sm  mt-3 mb-3"
          />
          <input
            type="text"
            v-show="checkValidate.errorPassword"
            v-model="formInputValue.password"
            class="input input-error input-sm  mt-3 mb-3"
          />
          <p
            v-show="this.checkValidate.errorPassword"
            class="text-red-600 text-xs font-light mb-3"
          >
            Please enter password.
          </p>
        </label>
      </div>
      <div class="">
        <div class="form-control">
          <label class="">
            <input
              type="checkbox"
              class="checkbox checkbox-sm"
              v-model="formInputValue.rememberme"
            />
            <span class="ml-2">Remember me</span>
          </label>
        </div>
      </div>
      <div class="-mx-3 mt-3">
        <div class=" px-3 my-3">
          <button class="btn btn-primary btn-sm ">LOGIN</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Register",
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
        // let sendValue = this.formInputValue
        // this.$emit("form-submit", sendValue);
        console.log("send form success");
      }
    },
  },
};
</script>
