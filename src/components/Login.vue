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

          <div
            class="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-md text-green-700 bg-green-100 border border-green-300 "
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-check-circle w-5 h-5 mx-2"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <div class="text-xl font-normal  max-w-full flex-initial">
              This is a success messsage
            </div>
            <div class="flex flex-auto flex-row-reverse">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-x cursor-pointer hover:text-green-400 rounded-full w-5 h-5 ml-2"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </div>
            </div>
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
