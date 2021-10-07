<template>
  <div class="login w-full flex flex-wrap my-10">
    <!-- Login Section -->
    <div class="container mx-auto px-6">
      <div class="grid place-items-center items-start min-h-screen">
        <div class="flex flex-col justify-center md:w-5/12 lg:w-4/12">
          <p class="text-3xl font-bold">ลงทะเบียน</p>
          <div class="py-6">
            <ul class="w-full steps">
              <li class="step step-primary"></li>
              <li class="step "></li>
            </ul>
          </div>
          <form
            class="flex flex-col pt-3"
            @submit.prevent="submit"
            v-if="this.step == 1"
          >
            <div class="flex flex-col pt-4">
              <label for="email" class="text-lg">อีเมล</label>
              <input
                v-model="this.userRegister.email"
                type="email"
                id="email"
                placeholder="your@email.com"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div class="flex flex-col pt-4">
              <label for="password" class="text-lg">รหัสผ่าน</label>
              <input
                v-model="this.userRegister.password"
                type="password"
                id="password"
                placeholder="Password"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div class="flex flex-col pt-4">
              <label for="confirmpassword" class="text-lg"
                >ยืนยันรหัสผ่าน</label
              >
              <input
                v-model="this.password_confirm"
                type="password"
                id="confirmpassword"
                placeholder="Confirm Password"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <!-- <button @click="go_next" class="btn btn-primary mt-8">
              ลงทะเบียน
            </button>
          </form>

          <form
            class="flex flex-col pt-3"
            @submit.prevent="register"
            v-if="this.step == 2"
          > -->
            <div class="flex flex-col pt-4">
              <label for="email" class="text-lg">ชื่อบัญชีผู้ใช้</label>
              <input
                v-model="this.userRegister.username"
                type="username"
                id="username"
                placeholder="ชื่อบัญชีผู้ใช้"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div class="flex flex-col pt-4">
              <label for="firstName" class="text-lg">ชื่อจริง</label>
              <input
                v-model="this.userRegister.firstName"
                type="firstName"
                id="firstName"
                placeholder="ชื่อจริง"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div class="flex flex-col pt-4">
              <label for="lastName" class="text-lg">นามสกุล</label>
              <input
                v-model="this.userRegister.lastName"
                type="lastName"
                id="lastName"
                placeholder="นามสกุล"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div class="flex flex-col pt-4">
              <label for="status" class="text-lg">สถานะ</label>
              <select
                id="status"
                name="status"
                v-model="this.userRegister.status"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                ><option value="" disabled>เลือกสถานะ</option>
                <option value="Student">นักเรียน/นักศึกษา</option>
                <option value="Guest">บุคคลทั่วไป</option>
              </select>
            </div>

            <div
              class="flex flex-col pt-4"
              v-if="this.userRegister.status == 'Student'"
            >
              <label for="school" class="text-lg">โรงเรียน</label>
              <input
                v-model="this.userRegister.school"
                type="school"
                id="school"
                placeholder="โรงเรียน/มหาวิทยาลัย"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <button class="btn btn-primary mt-8">
              ยืนยัน
            </button>
          </form>
        </div>
        <p>{{ this.userRegister }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
      error: false,
      step: 1,
    };
  },
  methods: {
    go_next() {
      this.step++;
    },
    go_back() {
      this.step--;
    },
    checkPasswordValidate() {
      return this.userRegister.password === this.password_confirm;
    },
    submit() {
      if (this.checkPasswordValidate()) {
        // this.go_next()
        // console.log("register");
        console.log(this.userRegister);

        this.$store.dispatch("register", this.userRegister);
        // this.$store.dispatch("register", {
        //   username: "ffffff",
        //   email: "tanawat@hotmail.com",
        //   password: "12345",
        //   status: "not allowed",
        //   firstName: "Pantavit",
        //   lastName: "Hengnalen",
        //   school: "KMUTT",
        // });
        // this.$store.dispatch("register");
      }
    },
  },
};
</script>
