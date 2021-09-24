<template>
  <div class="products">
    <div class="product-example mt-10 bg-base-100">
      <div class="">
        <p class="text-3xl font-bold">ตัวอย่างผลงาน</p>
      </div>
    </div>

    <!--another grid temp-->
    <div class="md:flex md:items-center  p-2 mt-10">
      <div class="md:flex flex-col md:flex-row md:min-h-screen w-full">
        <div class="flex flex-col w-full md:w-64 text-gray-700 bg-white ">
          <div
            class="flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between "
          >
            <a
              href="#"
              class="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline "
              >ค้นหา</a
            >
            <button class="rounded-lg focus:outline-none focus:shadow-outline">
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                class="inline w-4 h-4 mt-1 ml-1 md:-mt-1"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <button
              class="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
            >
              <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
                <path
                  x-show="!open"
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
                <path
                  x-show="open"
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <nav class="flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto text-left">
            <a
              class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-200 rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              href="#"
              >ประเภท</a
            >
            <a
              class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              href="#"
              >สไตล์</a
            >
            <a
              class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              href="#"
              >About</a
            >
            <a
              class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              href="#"
              >Contact</a
            >
            <div class="">
              <button
                class="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:block hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              >
                <span>Dropdown</span>
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  class="inline w-4 h-4 mt-1 ml-1 md:-mt-1"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </nav>
        </div>
        <!-- <div class="flex flex-wrap items-start"> -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 w-full h-full items-start gap-3">
          <product
            v-for="product in products"
            :key="product.prodID"
            :product="product"
          ></product>
          </div>
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import product from "../components/Product.vue";

export default {
  name: "Products",
  components: {
    product,
  },
  data() {
    return {
      url: "http://localhost:3000/product",
      // http://13.76.182.102:3000/user/allProduct
      // http://localhost:3000/product
    };
  },
  computed: {
    products() {
      return this.$store.getters.getProducts;
    },
  },
  methods: {
    ...mapActions({ getProduct: "fetchProducts" }),
    
  },
  // async created() {
  //   try {
  //     const res = await axios.get(`${this.url}`);
  //     this.products = res.data;
  //   } catch (e) {
  //     console.log(e);
  //   }
  // },
};
</script>
