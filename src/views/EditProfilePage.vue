<template>
  <div class="register">
    <p class="text-3xl font-bold">edit profile id :</p>
    <p>{{ this.$route.params.username }}</p>
    <!--  -->
    <div class="bg-gray-100">
      <div class="w-full text-white bg-main-color"></div>
      <!-- End of Navbar -->

      <div class="container mx-auto my-5 p-5">
        <div class="md:flex md:-mx-2 ">
          <!-- Left Side -->
          <div class="w-full md:w-3/12 md:mx-2">
            <!-- Profile Card -->
            <div class="bg-white p-3 border-t-4 border-primary">
              <div v-if="!preview">
                <div class="image h-full w-full aspect-w-1 aspect-h-1 mb-4">
                  <img
                    v-if="this.userById.imageURL"
                    :src="this.userById.imageURL"
                    class="object-contain mx-auto"
                  />
                  <svg
                    v-if="!this.userById.imageURL"
                    viewBox="0 0 32 32"
                    class="fill-current cursor-pointer text-black "
                    width="100%"
                    height="100%"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    style="display: block; fill: currentcolor;"
                  >
                    <path
                      d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"
                    ></path>
                  </svg>
                </div>
              </div>

              <div v-if="preview">
                <div class="image h-full w-full aspect-w-1 aspect-h-1 mb-4">
                  <img class="object-cover" :src="preview" alt="" />
                </div>
              </div>
              <label for="my-file">
                <input
                  type="file"
                  accept="image/*"
                  @change="previewImage"
                  class="hidden form-control-file"
                  id="my-file"
                />
                <span class="btn btn-primary mt-4">
                  เปลี่ยนรูปภาพ
                </span>
              </label>
              <button v-if="preview" class="btn " @click="updateImage">
                ยืนนันเปลี่ยนรูปภาพ
              </button>
            </div>
            <!-- End of profile card -->
            <div class="my-4"></div>
          </div>
          <!-- Right Side -->
          <div class="w-full md:w-9/12 mx-2 h-64">
            <!-- Profile tab -->
            <div class="bg-white p-3 shadow-sm rounded-sm">
              <div
                class="flex items-center space-x-2 font-semibold text-gray-900 leading-8"
              >
                <span clas="text-green-500">
                  <svg
                    class="h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                <span class="tracking-wide">ข้อมูลส่วนตัว</span>
              </div>

              <div class="text-gray-700">
                <div class="grid text-sm">
                  <Form @submit="onSubmit">
                    <div class="flex flex-col pt-4">
                      <label for="username" class=""
                        >ชื่อบัญชีผู้ใช้<span class="text-error">*</span></label
                      >
                      <Field
                        name="username"
                        id="username"
                        v-model="this.editValue.username"
                        :rules="isRequired"
                        type="text"
                        class="shadow appearance-none border border-black  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                      <ErrorMessage
                        name="username"
                        class="flex items-center font-medium tracking-wide uppercase text-red-500 text-sm mt-1 ml-1"
                      />
                    </div>
                    <div class="flex flex-col pt-4">
                      <label for="email" class=""
                        >อีเมล<span class="text-error">*</span></label
                      >
                      <Field
                        name="email"
                        id="email"
                        v-model="this.editValue.email"
                        :rules="validateEmail"
                        type="email"
                        class="shadow appearance-none border border-black  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                      <ErrorMessage
                        name="email"
                        class="flex items-center font-medium tracking-wide uppercase text-red-500 text-sm mt-1 ml-1"
                      />
                    </div>
                    <div class="flex flex-col pt-4">
                      <label for="firstName" class=""
                        >ชื่อจริง <span class="text-error">*</span></label
                      >
                      <Field
                        name="firstName"
                        id="firstName"
                        v-model="this.editValue.firstName"
                        :rules="isRequired"
                        type="text"
                        class="shadow appearance-none border border-black  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                      <ErrorMessage
                        name="firstName"
                        class="flex items-center font-medium tracking-wide uppercase text-red-500 text-sm mt-1 ml-1"
                      />
                    </div>

                    <div class="flex flex-col pt-4">
                      <label for="lastName" class=""
                        >นามสกุล <span class="text-error">*</span></label
                      >
                      <Field
                        name="lastName"
                        id="lastName"
                        v-model="this.editValue.lastName"
                        :rules="isRequired"
                        type="text"
                        class="shadow appearance-none border border-black  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                      <ErrorMessage
                        name="lastName"
                        class="flex items-center font-medium tracking-wide uppercase text-red-500 text-sm mt-1 ml-1"
                      />
                    </div>

                    <div class="flex flex-col pt-4">
                      <label for="description" class=""
                        >คำอธิบาย <span class="text-error">*</span></label
                      >
                      <Field
                        name="description"
                        id="description"
                        v-model="this.editValue.description"
                        placeholder="ประวัติส่วนตัว"
                        as="textarea"
                        rows="4"
                        type="text"
                        class="shadow appearance-none border border-black  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                      <ErrorMessage
                        name="description"
                        class="flex items-center font-medium tracking-wide uppercase text-red-500 text-sm mt-1 ml-1"
                      />
                    </div>
                    <div class="flex flex-col pt-4">
                      <pre>{{ this.editValue.status }}</pre>

                      <label for="status" class="text-lg">สถานะ</label>
                      <Field
                        id="status"
                        name="status"
                        as="select"
                        :rules="isRequired"
                        v-model="this.editValue.status"
                        class="shadow border border-black  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      >
                        <option
                          value="Student"
                          v-if="this.editValue.status == 'Student'"
                          >นักเรียน</option
                        >
                        <option
                          value="Guest"
                          v-if="this.editValue.status == 'Guest'"
                          >บุคคลทั่วไป</option
                        >
                        <option
                          v-if="this.editValue.status == 'Student'"
                          value="Guest"
                          >บุคคลทั่วไป</option
                        >
                        <option
                          v-if="this.editValue.status == 'Guest'"
                          value="Student"
                          >นักเรียน/นักศึกษา</option
                        >
                        <!-- <option value="Student">นักเรียน/นักศึกษา</option>

                        <option :value="this.editValue.status">{{
                          this.editValue.status
                        }}</option>
                        <option value="Guest">บุคคลทั่วไป</option> -->
                      </Field>
                      <ErrorMessage
                        name="status"
                        class="flex items-center font-medium tracking-wide uppercase text-red-500 text-sm mt-1 ml-1"
                      />
                    </div>
                    <div
                      class="flex flex-col pt-4"
                      v-if="this.editValue.status == 'Student'"
                    >
                      <label for="school" class="text-lg">โรงเรียน</label>
                      <Field
                        v-model="this.editValue.school"
                        name="school"
                        id="school"
                        placeholder="โรงเรียน/มหาวิทยาลัย"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>

                    <button
                      class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
                    >
                      comfirm change
                    </button>
                  </Form>
                </div>
              </div>
              <button
                class="w-full py-3 mt-6 font-medium tracking-widest text-black uppercase bg-gray-200 shadow-lg focus:outline-none hover:bg-gray-300 hover:shadow-none"
                @click="this.$router.go(-1)"
              >
                ย้อนกลับ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  // props: ["username"],
  data() {
    return {
      preview: null,
      image: null,
      addImage: {
        imageObj: "",
        imageName: "",
      },
      editValue: {
        username: "",
        email: "",
        firstName: "",
        lastName: "",
        description: "",
        status: "",
        school: "",
      },
    };
  },
  async mounted() {
    // await this.fetchUserByUsername(this.$route.params.username);
  },
  computed: {
    userById() {
      return this.$store.getters.getUserById;
    },
  },
  methods: {
    ...mapActions({ fetchUserByUsername: "fetchUserByUsername" }),
    isRequired(value) {
      return value ? true : "* This field is required";
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
    async onSubmit() {
      await this.$store.dispatch("updateUserProfile", this.editValue);
    },
    previewImage(event) {
      this.addImage.imageObj = event.target.files[0];

      var input = event.target;
      if (input.files) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.preview = e.target.result;
        };
        this.addImage.imageName = input.files[0].name;
        this.image = input.files[0];
        reader.readAsDataURL(input.files[0]);
      }
    },
    async updateImage() {
      try {
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + localStorage.getItem("userToken");
      } catch (error) {
        this.$store.dispatch("addNotification", {
          type: "error",
          message: error,
        });
      }
      try {
        const fd = new FormData();
        fd.append("image", this.addImage.imageObj);

        await axios.post(
          `${process.env.VUE_APP_REST_API}` + "/user/upload/image",
          fd
        );
        this.$store.dispatch("addNotification", {
          type: "success",
          message: "edit profile image seccess",
        });
      } catch (error) {
        this.$store.dispatch("addNotification", {
          type: "error",
          message: error,
        });
      }
    },
  },
  async created() {
    await this.fetchUserByUsername(this.$route.params.username);

    this.editValue.username = await this.userById.username;
    this.editValue.email = await this.userById.email;
    this.editValue.firstName = await this.userById.firstName;
    this.editValue.lastName = await this.userById.lastName;
    this.editValue.description = await this.userById.description;
    this.editValue.status = await this.userById.status;
    this.editValue.school = await this.userById.school;
  },
};
</script>
