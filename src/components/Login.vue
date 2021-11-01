<template>
  <div class="login w-full flex flex-wrap my-10">
    <!-- Login Section -->
    <div class="container mx-auto px-6">
      <div class="grid place-items-center items-start min-h-screen">
        <div class="flex flex-col justify-center md:w-6/12 lg:w-4/12">
          <p class="text-3xl font-bold">เข้าสู่ระบบ</p>

          <Form @submit="onSubmit" class="flex flex-col pt-3">
            <div class="flex flex-col pt-4">
              <label for="email" class="text-lg">อีเมล</label>
              <Field
                v-model="this.userLogin.email"
                name="email"
                type="email"
                :rules="validateEmail"
                id="email"
                placeholder="อีเมล"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage
                name="email"
                class="flex items-center font-medium tracking-wide text-red-500 text-sm mt-1 ml-1"
              />
            </div>
            <div class="flex flex-col pt-4">
              <label for="password" class="text-lg">รหัสผ่าน</label>
              <Field
                v-model="this.userLogin.password"
                id="password"
                name="password"
                type="password"
                :rules="isRequiredMin8"
                placeholder="รหัสผ่าน"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage
                name="password"
                class="flex items-center font-medium tracking-wide text-red-500 text-sm mt-1 ml-1"
              />
            </div>
            <button
              @click="submit"
              class="btn btn-md btn-primary rounded-btn text-lg  mt-8"
            >
              เข้าสู่ระบบ
            </button>
          </Form>
          <div class="text-center pt-12 pb-12">
            <p>
              Don't have an account?
              <router-link to="/register">
                <p class="underline font-semibold">
                  Register here.
                </p>
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },

  data() {
    return {
      userLogin: {
        email: "",
        password: "",
      },
      error: false,
    };
  },
  computed: {},
  methods: {
    async onSubmit() {
      let user = await this.$store.dispatch("login", this.userLogin);
      if (user.error) {
        alert(user.error);
      } else {
        alert("THX");
      }
      this.$router.push(`/profile/${user.username}`);
    },

    validateEmail(value) {
      if (!value) {
        return "This field is required";
      }
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return "This field must be a valid email";
      }
      return true;
    },
    isRequiredMin8(value) {
      if (!value) {
        return "This field is required";
      }
      if (value.length < 8) {
        return `This field must be at least 8 characters`;
      }
      return value ? true : "This field is required";
    },
  },
};
</script>
