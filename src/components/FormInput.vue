<template>
  <!--form input-->
  <div class="form-input">
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
                  >วันที่สร้างผลงาน <span class="text-error">*</span></label
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
              >ชื่อผลงาน <span class="text-error">*</span></label
            >

            <Field
              name="type"
              :rules="isRequired"
              id="type"
              as="select"
              v-model="this.productInputValue.productType"
              placeholder="เลือกประเภทผลงาน"
              class="shadow appearance-none border border-black  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
    <!-- <pre>{{this.allStyle}}</pre> -->
    <pre>{{ this.productInputValue }}</pre>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { Form, Field, ErrorMessage } from "vee-validate";

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
      let user = await this.$store.dispatch(
        "addProduct",
        this.productInputValue
      );
      if (user.error) {
        alert(user.error);
      } else {
        this.sendSuccess = true;
        // alert("เพิ่มผลงานเสร็จสิ้น");
      }
    },
    isRequired(value) {
      return value ? true : "* This field is required";
    },
    multiCheck(value) {
      return value[0] ? true : "* This field is required";
    },
  },
};
</script>
