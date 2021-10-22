<template>
  <div class="login w-full flex flex-wrap my-10">
    <!-- Login Section -->
    <div class="container mx-auto px-6">
      <div class="grid place-items-center items-start min-h-screen">
        <div class="flex flex-col justify-center md:w-6/12 lg:w-4/12">
          <p class="text-3xl font-bold">ลงทะเบียน</p>
          <div class="py-6">
            <ul class="w-full steps">
              <li class="step " :class="[step==0 ? 'step-primary' : '']"></li>
              <li class="step " :class="[step==1 ? 'step-primary' : '']"></li>
            </ul>
          </div>

          <Form @submit="nextStep" class="flex flex-col ">
            <template v-if="step === 0">
              <div class="flex flex-col pt-4">
                <label for="email" class="text-lg">อีเมล</label>
                <Field
                  v-model="this.userRegister.email"
                  id="email"
                  name="email"
                  type="email"
                  :rules="validateEmail"
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
                  v-model="this.userRegister.password"
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
              <div class="flex flex-col pt-4">
                <label for="confirmPassword" class="text-lg"
                  >ยืนยันรหัสผ่าน</label
                >
                <Field
                  id="confirmpassword"
                  name="confirmPassword"
                  type="password"
                  :rules="confirmCheck"
                  placeholder="ยืนยันรหัสผ่าน"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage
                  name="confirmPassword"
                  class="flex items-center font-medium tracking-wide text-red-500 text-sm mt-1 ml-1"
                />
              </div>
              <button
                v-if="step == 0"
                type="submit"
                class="btn btn-primary mt-8"
              >
                ลงทะเบียน
              </button>
            </template>
          </Form>

          <Form
            @submit="onSubmit"
            class="flex flex-col "
            v-if="this.step == 1"
          >
            <template v-if="step === 1">
              <div class="flex flex-col pt-4">
                <label for="username" class="text-lg">ชื่อบัญชีผู้ใช้</label>
                <Field
                  v-model="this.userRegister.username"
                  id="username"
                  name="username"
                  :rules="isRequired"
                  placeholder="ชื่อบัญชีผู้ใช้"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage
                  name="username"
                  class="flex items-center font-medium tracking-wide text-red-500 text-sm mt-1 ml-1"
                />
              </div>
              <div class="flex flex-col pt-4">
                <label for="firstName" class="text-lg">ชื่อจริง</label>
                <Field
                  v-model="this.userRegister.firstName"
                  id="firstName"
                  name="firstName"
                  placeholder="ชื่อจริง"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage
                  name="firstName"
                  class="flex items-center font-medium tracking-wide text-red-500 text-sm mt-1 ml-1"
                />
              </div>

              <div class="flex flex-col pt-4">
                <label for="lastName" class="text-lg">นามสกุล</label>
                <Field
                  v-model="this.userRegister.lastName"
                  id="lastName"
                  name="lastName"
                  placeholder="นามสกุล"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
                <ErrorMessage name="lastName" />
              </div>
              <div class="flex flex-col pt-4">
                <label for="status" class="text-lg">สถานะ</label>
                <Field
                  id="status"
                  name="status"
                  v-model="this.userRegister.status"
                  as="select"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  ><option value="" disabled>เลือกสถานะ</option>
                  <option value="Student">นักเรียน/นักศึกษา</option>
                  <option value="Guest">บุคคลทั่วไป</option></Field
                >
                <ErrorMessage name="status" />
              </div>
              <div
                class="flex flex-col pt-4"
                v-if="this.userRegister.status == 'Student'"
              >
                <label for="school" class="text-lg">โรงเรียน</label>
                <Field
                  v-model="this.userRegister.school"
                  name="school"
                  id="school"
                  placeholder="โรงเรียน/มหาวิทยาลัย"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </template>
            <div class="flex justify-between">
              <button
                class="btn btn-primary mt-8"
                @click="prevStep"
                type="button"
                v-if="step == 1"
              >
                ย้อนกลับ
              </button>
              <button
                v-if="step == 1"
                class="btn btn-primary mt-8"
                type="submit"
              >
                ยืนยัน
              </button>
            </div>
          </Form>
          <div class="text-center pt-12 pb-12">
            <p>
              Already have an account?
              <router-link to="/register">
                <p class="underline font-semibold">
                  Login here.
                </p>
              </router-link>
            </p>
          </div>
        </div>

        <!-- <p>{{ this.userRegister }}</p>
        {{ this.$store.getters.getProducts }} -->
      </div>
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";

// import axios from "axios";

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      password_confirm: "",
      userRegister: {
        username: "",
        email: "",
        password: "",
        status: "",
        firstName: "",
        lastName: "",
        school: "",
      },
      step: 0,
    };
  },
  methods: {
    isRequired(value) {
      return value ? true : "This field is required";
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
    confirmCheck(value) {
      if (!value) {
        return "This field is required";
      }
      if (value === this.userRegister.password) {
        return true;
      }
      return "Passwords must match";
    },
    prevStep() {
      console.log("back", this.step);
      this.step--;
    },
    nextStep() {
      console.log("next", this.step);
      this.step++;
    },
    onSubmit() {
      // console.log(this.userRegister);
      this.$store.dispatch("register", this.userRegister);
    },
  },
};
</script>
