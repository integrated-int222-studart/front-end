<template>
  <div class="edit-product">
    <div class="heading mt-10">
      <p class="text-3xl font-bold">แก้ไขผลงาน</p>
    </div>

    <!-- edit form -->
    <main class="p-2 m-2 md:p-4 md:m-4">
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
                  v-model="this.inputData.prodName"
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
                      v-model="this.inputData.price"
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
                      v-model="this.inputData.manufacDate"
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
                  v-model="this.inputData.productType"
                  placeholder="เลือกประเภทผลงาน"
                  class="shadow border border-black  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="" selected>Please select one</option>
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
                  v-model="this.inputData.prodDescription"
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
                    class="flex flex-row items-center"
                  >
                    <label>
                      <Field
                        name="style"
                        type="checkbox"
                        :rules="multiCheck"
                        :value="style.styleID"
                        v-model="this.inputData.styleID"
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
              <button
                class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
              >
                แก้ไขผลงาน
              </button>
            </Form>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { Form, Field, ErrorMessage } from "vee-validate";
// import FormProductInput from "../components/FormProductInput.vue";

export default {
  props: ["prod_id"],
  data() {
    return {
      //   productInputForm: {
      //     prodName: "",
      //     manufacDate: "",
      //     price: 0.0,
      //     prodDescription: "",
      //     productType: "",
      //     styleID: "",
      //   },
      inputData: {
        prodName: "",
        manufacDate: "",
        price: 0.0,
        prodDescription: "",
        productType: "",
        styleID: [],
      },
    };
  },
  async mounted() {
    // await this.fetchProductById(this.$route.params.prod_id);

    await this.fetchAllType();
    await this.fetchAllStyle();
    // await this.fetchEditProductById(this.prod_id);
  },
  components: {
    Form,
    Field,
    ErrorMessage,
    // FormProductInput,
  },
  computed: {
    allType() {
      return this.$store.getters.getAllType;
    },
    allStyle() {
      return this.$store.getters.getAllStyle;
    },
    // getProductById() {
    //   return this.$store.getters.getProductById;
    // },
    getEditProduct() {
      return this.$store.getters.getEditProduct;
    },
  },
  methods: {
    ...mapActions({ fetchAllType: "fetchAllType" }),
    ...mapActions({ fetchAllStyle: "fetchAllStyle" }),
    // ...mapActions({ fetchProductById: "fetchProductById" }),
    ...mapActions({ fetchEditProductById: "fetchEditProductById" }),

    async onSubmit() {
      // let styleID = []
      // styleID.push()
      // console.log(this.styleID);
      await this.$store.dispatch("updateEditProductById", {
        product: this.inputData,
        prodID: this.prod_id,
      });
      // if (user.error) {
      //   alert(user.error);
      // } else {
      //   this.sendSuccess = true;
      // }
    },
    isRequired(value) {
      return value ? true : "* This field is required";
    },
    multiCheck(value) {
      return value[0] ? true : "* This field is required";
    },
  },
  async created() {
    // this.inputData = await this.fetchEditProductById(this.prod_id);
    await this.fetchEditProductById(this.prod_id);
    // this.inputData = await this.getEditProduct;
    this.inputData.prodName = await this.getEditProduct.prodName;
    this.inputData.manufacDate = await this.getEditProduct.manufacDate;
    this.inputData.price = await this.getEditProduct.price;
    this.inputData.prodDescription = await this.getEditProduct.prodDescription;
    this.inputData.productType = await this.getEditProduct.productType;
    let set = new Array();
    this.getEditProduct.style.forEach((id) => set.push(id.styleID));
    this.inputData.styleID = set;
  },
};
</script>
