<template>
  <!--form input-->
  <div class="form-input">
    <div class="container mx-auto px-6">
      <div class="flex-none lg:flex justify-between items-start  ">
        <div class="h-full w-full p-3 md:p-6">
          <div class="image-upload">
            <div class="col-md-5">
              <div v-if="!preview_list[image_index]">
                <label
                  class="border-2 border-black flex flex-col aspect-w-1 aspect-h-1 mx-auto items-center justify-center cursor-pointer rounded-lg shadow-lg"
                  for="my-multi-file"
                >
                  <div class="flex flex-col justify-center items-center">
                    <svg
                      class="w-8 h-8"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"
                      />
                    </svg>
                    <span class="text-base font-medium leading-normal mx-4"
                      >Upload a Image(s)</span
                    >
                  </div>

                  <input
                    type="file"
                    accept="image/*"
                    multiple="multiple"
                    @change="previewMultiImage"
                    class="form-control-file hidden"
                    id="my-multi-file"
                  />
                </label>
                <p
                  class="text-left text-base font-medium leading-normal italic"
                >
                  *recommended aspect ratio 1:1
                </p>
              </div>

              <div
                class="border-2 border-black aspect-w-1 aspect-h-1 flex flex-col mx-auto items-center justify-center shadow-lg"
                v-if="preview_list[image_index]"
              >
                <img
                  :src="preview_list[image_index]"
                  class="object-contain mx-auto"
                />
              </div>
              <div class="mt-6 grid grid-cols-5 gap-3">
                <template v-if="preview_list.length">
                  <div
                    v-for="(item, index) in preview_list"
                    :key="index"
                    @click="image_index = index"
                  >
                    <div
                      class="border-2 border-black aspect-w-1 aspect-h-1 w-full mx-auto items-center justify-center shadow-lg"
                    >
                      <img
                        :src="item"
                        class="object-cover mx-auto w-full h-full"
                      />

                      <div class=" indicator cursor-pointer">
                        <div
                          class="indicator-item badge bg-error text-black"
                          @click="preview_list.splice(index, 1)"
                        >
                          <p class="absolute text-xl">-</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </template>

                <!-- input -->
                <div
                  class="border-2 border-black aspect-w-1 aspect-h-1 w-full mx-auto items-center justify-center shadow-lg"
                >
                  <label for="my-multi-file" class="cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="{2}"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    multiple="multiple"
                    @change="previewMultiImage"
                    class="form-control-file hidden"
                    id="my-multi-file"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="h-full w-full  mt-6 ml-0 md:ml-10 md:mt-0 text-left">
          <div class="grid place-items-center">
            <div class="w-full h-full px-10 py-2">
              <h1 class="text-xl font-semibold">
                สร้างผลงาน 👋
                <p class="font-normal inline-block w-full">
                  กรุณากรอกข้อมูลของผลงานที่ต้องการขาย
                </p>
              </h1>
              <!--  -->
              <Form @submit="onSubmit" class="flex flex-col pt-3">
                <div class="flex flex-col pt-4">
                  <label for="productname" class=""
                    >ชื่อผลงาน <span class="text-error">*</span></label
                  >
                  <Field
                    name="productname"
                    :rules="isRequired"
                    id="productname"
                    type="text"
                    v-model="this.productInputValue.prodName"
                    placeholder="ชื่อผลงาน"
                    class="shadow appearance-none border border-black  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <ErrorMessage
                    name="productname"
                    class="flex items-center font-medium tracking-wide uppercase text-red-500 text-sm mt-1 ml-1"
                  />
                </div>
                <div class="flex flex-col pt-4">
                  <div class="flex justify-between">
                    <div class="mt-1 w-6/12">
                      <label for="price" class=""
                        >ราคา <span class="text-error">*</span></label
                      >
                      <Field
                        name="price"
                        :rules="isRequired"
                        id="price"
                        type="number"
                        step="0.01"
                        v-model="this.productInputValue.price"
                        placeholder="ราคา(บาท)"
                        class="shadow appearance-none border border-black  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                      <ErrorMessage
                        name="price"
                        class="flex items-center font-medium tracking-wide uppercase text-red-500 text-sm mt-1 ml-1"
                      />
                    </div>
                    <div class="mt-1 w-5/12">
                      <label for="date" class=""
                        >วันที่สร้างผลงาน
                        <span class="text-error">*</span></label
                      >
                      <Field
                        name="date"
                        :rules="isRequired"
                        id="date"
                        type="date"
                        v-model="this.productInputValue.manufacDate"
                        placeholder="วันที่"
                        class="shadow appearance-none border border-black  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                      <ErrorMessage
                        name="date"
                        class="flex items-center font-medium tracking-wide uppercase text-red-500 text-sm mt-1 ml-1"
                      />
                    </div>
                  </div>
                </div>
                <div class="flex flex-col pt-4">
                  <label for="type" class=""
                    >ประเภท <span class="text-error">*</span></label
                  >
                  <Field
                    name="type"
                    :rules="isRequired"
                    id="type"
                    as="select"
                    v-model="this.productInputValue.productType"
                    placeholder="เลือกประเภทผลงาน"
                    class="shadow border border-black  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    ><option value="" selected>Please select one</option>
                    <option
                      v-for="type in this.allType"
                      :key="type.typeID"
                      :value="type.typeID"
                      >{{ type.typeName }}</option
                    >
                  </Field>
                  <ErrorMessage
                    name="type"
                    class="flex items-center font-medium tracking-wide uppercase text-red-500 text-sm mt-1 ml-1"
                  />
                </div>
                <div class="flex flex-col pt-4">
                  <label for="description" class=""
                    >รายละเอียด <span class="text-error">*</span></label
                  >

                  <Field
                    name="description"
                    :rules="isRequired"
                    id="description"
                    as="textarea"
                    rows="4"
                    v-model="this.productInputValue.prodDescription"
                    placeholder="รายละเอียด เช่น ที่มา แรงบันดาลใจ"
                    class="shadow appearance-none border border-black  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  >
                  </Field>
                  <ErrorMessage
                    name="description"
                    class="flex items-center font-medium tracking-wide uppercase text-red-500 text-sm mt-1 ml-1"
                  />
                </div>
                <div class="flex flex-col pt-4 ">
                  <div class="">สไตล์ <span class="text-error">*</span></div>
                  <div class="grid grid-cols-2 overflow-y-auto h-32 ">
                    <div
                      v-for="style in this.allStyle"
                      :key="style.styleID"
                      :value="style.styleID"
                      class="flex flex-row "
                    >
                      <label>
                        <Field
                          name="style"
                          type="checkbox"
                          :value="style.styleID"
                          :rules="multiCheck"
                          v-model="this.productInputValue.styleID"
                        />
                        {{ style.styleName }}</label
                      >
                    </div>
                  </div>
                  <ErrorMessage
                    name="style"
                    class="flex items-center font-medium tracking-wide uppercase text-red-500 text-sm mt-1 ml-1"
                  />
                  <!-- <label class="">
                <input type="checkbox" value= 0 v-model="this.productInputValue.styleID">Sunday
              </label> -->
                </div>
                <button
                  class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
                >
                  สร้างผลงาน
                </button>
              </Form>
            </div>
          </div>
          <div class="alert bg-success" v-show="sendSuccess">
            <div class="flex-1">
              <div
                class="alert-icon flex items-center bg-green-100 border-2 border-green-500 justify-center h-10 w-10 flex-shrink-0 rounded-full"
              >
                <span class="text-green-500">
                  <svg fill="currentColor" viewBox="0 0 20 20" class="h-6 w-6">
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </div>
              <div class="alert-content ml-4">
                <div class="alert-title font-semibold text-lg text-green-800">
                  สำเร็จ
                </div>
                <div class="alert-description text-sm text-green-600">
                  เพิ่มผลงานเสร็จสิ้น..!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <pre>{{this.allStyle}}</pre> -->
      <!-- <pre>{{ this.productInputValue }}</pre> -->
      <pre>{{ this.image_list }}</pre>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { Form, Field, ErrorMessage } from "vee-validate";
// import axios from "axios";

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  mounted() {
    this.fetchAllType();
    this.fetchAllStyle();
  },
  data() {
    return {
      productInputValue: {
        prodName: "",
        manufacDate: "",
        price: 0.0,
        prodDescription: "",
        productType: "",
        styleID: "",
      },
      preview_list: [],
      image_index: 0,
      image_list: [],
      sendSuccess: false,
    };
  },
  computed: {
    allType() {
      return this.$store.getters.getAllType;
    },
    allStyle() {
      return this.$store.getters.getAllStyle;
    },
  },
  methods: {
    ...mapActions({ fetchAllType: "fetchAllType" }),
    ...mapActions({ fetchAllStyle: "fetchAllStyle" }),

    // submit() {
    //   this.$store.dispatch("addProduct", this.productInputValue);
    // },

    async onSubmit() {
      await this.$store.dispatch("addProduct", {
        product: this.productInputValue,
        image_list: this.image_list,
      });
      // if (user.error) {
      //   alert(user.error);
      // } else {
      //   this.sendSuccess = true;
      //   // alert("เพิ่มผลงานเสร็จสิ้น");
      // }
    },
    isRequired(value) {
      return value ? true : "* This field is required";
    },
    multiCheck(value) {
      return value[0] ? true : "* This field is required";
    },
    previewMultiImage(event) {
      var input = event.target;
      var count = input.files.length;
      var index = 0;
      if (input.files) {
        while (count--) {
          var reader = new FileReader();
          reader.onload = (e) => {
            this.preview_list.push(e.target.result);
          };
          this.image_list.push(input.files[index]);
          reader.readAsDataURL(input.files[index]);
          index++;
        }
      }
    },
  },
};
</script>
