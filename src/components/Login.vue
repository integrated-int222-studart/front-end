<template>
  <div class="login w-full flex flex-wrap my-10">
    <!-- Login Section -->
    <div class="container mx-auto px-6">
      <div class="grid place-items-center items-start">
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
            <button class="btn btn-md btn-primary rounded-btn text-lg  mt-8">
              เข้าสู่ระบบ
            </button>
            <!-- <button
              @click="submit"

                  class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
                >
                  เข้าสู่ระบบ
                </button> -->
          </Form>
          <div class="text-center pt-12 pb-12">
            <p>
              ยังไม่ได้เป็นสมาชิก?
              <router-link to="/register">
                <p class="underline font-semibold">
                  สมัครสมาชิก
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
        console.log("");
      } else {
        this.$router.push(`/profile/${user.username}`);
      }
    },

    validateEmail(value) {
      if (!value) {
        return "จำเป็นต้องใส่อีเมล";
      }
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return "รูปแบบอีเมลไม่ถูกต้อง";
      }
      return true;
    },
    isRequiredMin8(value) {
      if (!value) {
        return "จำเป็นต้องใส่รหัสผ่าน";
      }
      const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).*$/;

      if (value.length < 8) {
        return `รหัสผ่านจำเป็นต้องมีอย่างน้อย 8 ตัวอักษร`;
      }
      if (!regex.test(value)) {
        return "รหัสผ่านจำเป็นต้องมีอย่างน้อย 1 Uppercase, 1 Lowercase, 1 Number และ 1 Special Letter";
      }

      return value ? true : "จำเป็นต้องใส่รหัสผ่าน";
    },
  },
};
</script>
