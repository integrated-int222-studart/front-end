<template>
  <div class="register">
    <p class="text-3xl font-bold">ลงทะเบียน</p>
    <div class="py-6">
      <ul class="w-full steps">
        <li class="step " :class="[step == 0 ? 'step-primary' : '']">
          สมัคร
        </li>
        <li class="step " :class="[step == 1 ? 'step-primary' : '']">
          กรอกข้อมูล
        </li>
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
          <label for="confirmPassword" class="text-lg">ยืนยันรหัสผ่าน</label>
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
          class="btn btn-md btn-primary rounded-btn text-lg mt-8 py-3 w-full tracking-widest shadow-lg hover:shadow-none"
        >
          ลงทะเบียน
        </button>
      </template>
    </Form>

    <Form @submit="onSubmit" class="flex flex-col " v-if="this.step == 1">
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
      <div class="flex justify-between mt-8">
        <button
          class="btn btn-primary  w-5/12"
          @click="prevStep"
          type="button"
          v-if="step == 1"
        >
          ย้อนกลับ
        </button>
        <button v-if="step == 1" class="btn btn-primary  w-5/12" type="submit">
          ยืนยัน
        </button>
      </div>
    </Form>
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
      return value ? true : "จำเป็นต้องใส่ช่องนี้";
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
    confirmCheck(value) {
      if (!value) {
        return "จำเป็นต้องยืนยันรหัสผ่าน";
      }
      if (value === this.userRegister.password) {
        return true;
      }
      return "ยืนยันรหัสผ่านไม่ตรงกัน";
    },
    prevStep() {
      console.log("back", this.step);
      this.step--;
    },
    nextStep() {
      console.log("next", this.step);
      this.step++;
    },
    async onSubmit() {
      let user = await this.$store.dispatch("register", this.userRegister);
      if (user.error) {
        this.$store.dispatch("addAlertCard", {
          type: "error",
          message: "ลงทะเบียนไม่สำเร็จ",
        });
      } else {
        this.$store.dispatch("addAlertCard", {
          type: "success",
          message: "ลงทะเบียนสำเร็จ",
        });
        this.$router.push("/login");
      }
    },
  },
};
</script>
