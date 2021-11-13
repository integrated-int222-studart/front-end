<template>
  <div
    class="FormProductInput h-full w-full  mt-6 ml-0 md:ml-10 md:mt-0 text-left"
  >
    <pre>{{ this.editform }}</pre>
    <div class="grid place-items-center">
      <div class="w-full h-full px-10 py-2">
        <h1 class="text-xl font-semibold">
          สร้างผลงาน 👋
          <p class="font-normal inline-block w-full">
            กรุณากรอกข้อมูลของผลงานที่ต้องการขาย
          </p>
        </h1>
        <!-- create  -->
        <Form
          @submit="onSubmit"
          class="flex flex-col pt-3"
          v-if="this.editform == false"
        >
          <p>CREATE</p>

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
          <slot name="submit">
            <button
              class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
            >
              สร้างผลงาน
            </button>
          </slot>
        </Form>
        <!-- edit -->
        <!-- <pre>{{ this.editProduct.prodName }}</pre> -->
        <Form
          @submit="onSubmit"
          class="flex flex-col pt-3"
          v-if="this.editform == true"
        >
          <pre>{{ this.editInputProduct }}</pre>
          <p>EDIT</p>
          <!-- <pre>{{ this.editProduct }}</pre> -->
          <div class="flex flex-col pt-4">
            <label for="productname" class=""
              >ชื่อผลงาน <span class="text-error">*</span></label
            >
            <Field
              name="productname"
              :rules="isRequired"
              id="productname"
              type="text"
              v-model="this.editInputProduct.prodName"
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
          </div>
          <slot name="submit">
            <button
              class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
            >
              สร้างผลงาน
            </button>
          </slot>
        </Form>
        <!-- <pre>{{ this.product }}</pre> -->

        <!-- edit v-model  -->
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
              :value="this.getEditProduct.prodName"
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
                  :value="this.getEditProduct.price"
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
                  :value="this.getEditProduct.manufacDate"
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
              :value="this.getEditProduct.productType"
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
              :value="this.getEditProduct.prodDescription"
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
                    :value="this.getEditProduct.styleID"
                  />
                  <!-- :rules="multiCheck" -->
                  <!-- :value="style.styleID" -->
                  {{ style.styleName }}</label
                >
              </div>
            </div>
            <ErrorMessage
              name="style"
              class="flex items-center font-medium tracking-wide uppercase text-red-500 text-sm mt-1 ml-1"
            />
            <!-- <label class="">
                <input type="checkbox" value= 0 :value="this.getEditProduct.styleID">Sunday
              </label> -->
          </div>
          <button
            class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
          >
            สร้างผลงาน
          </button>
        </Form>
        <!-- <pre>{{ this.editInputProduct }}</pre> -->
        <!-- <pre>{{ this.test }}</pre> -->
        <!-- <pre>{{ this.productInputValue }}</pre> -->
        <!-- <pre>{{ this.editProduct.prodName }}</pre> -->
        <pre>{{ this.id }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { Form, Field, ErrorMessage } from "vee-validate";
// import axios from "axios";

export default {
  props: {
    editform: Boolean,
    id: String,
  },
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  mounted() {
    this.fetchAllType();
    this.fetchAllStyle();
    if (this.editform == true) {
      this.fetchEditProductById(this.id);
    }
  },
  data() {
    return {
      productInputValue: {
        //   this.editProduct?.prodName ||
        prodName: "",
        manufacDate: "",
        price: 0.0,
        prodDescription: "",
        productType: "",
        styleID: "",
      },
      editInputProduct: {
        prodName: "",
        manufacDate: "",
        price: 0.0,
        prodDescription: "",
        productType: "",
        styleID: "",
      },
    };
  },
  computed: {
    allType() {
      return this.$store.getters.getAllType;
    },
    allStyle() {
      return this.$store.getters.getAllStyle;
    },
    getEditProduct() {
      return this.$store.getters.getEditProduct;
    },
  },
  methods: {
    ...mapActions({ fetchAllType: "fetchAllType" }),
    ...mapActions({ fetchAllStyle: "fetchAllStyle" }),
    ...mapActions({ fetchEditProductById: "fetchEditProductById" }),
    async onSubmit() {
      await this.$store.dispatch("addProduct", {
        product: this.productInputValue,
        image_list: this.image_list,
      });
    },

    isRequired(value) {
      return value ? true : "* This field is required";
    },
    multiCheck(value) {
      return value[0] ? true : "* This field is required";
    },
  },
  async created() {
    // this.productInputValue = await this.product;
    // this.editInputProduct = await this.editProduct;
    // await this.editProduct;
    // this.editInputProduct.prodName = await this.getEditProduct.prodName;
  },
};
</script>
