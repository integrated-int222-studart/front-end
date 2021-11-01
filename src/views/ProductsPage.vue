<template>
  <div class="products">
    <!-- <div class="product-example mt-10 bg-base-100">
      <div class="">
        <p class="text-3xl font-bold">ตัวอย่างผลงาน</p>
      </div>
    </div> -->

    <div class="mt-10">
      <div class="flex justify-end flex-1 px-2">
        <div class="flex items-stretch">
          <span
            class="flex shadow bg-white rounded-box cursor-pointer border-2  border-gray-300 hover:border-black p-1"
          >
            <input
              v-model="search"
              type="text"
              name="search"
              placeholder="ค้นหา"
              class="flex-grow px-4 border-0 border-white focus:border-white"
            />
          </span>

          <div class="dropdown dropdown-end ">
            <div
              tabindex="0"
              class="btn bg-white cursor-pointer border border-gray-300  rounded-md text-black hover:bg-gray-200 px-8 mx-6"
            >
              <p>ค้นหาประเภท</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <ul
              tabindex="0"
              class="p-4 shadow menu dropdown-content bg-base-100 rounded-box "
            >
              <li
                v-for="type in this.allType"
                :key="type.typeID"
                class="py-3 px-8 cursor-pointer rounded-box hover:bg-gray-200"
                @click="this.category = type.typeName"
              >
                {{ type.typeName }}
              </li>
            </ul>
          </div>

          <div
            class="btn btn-ghost rounded-btn"
            v-if="this.category || this.search"
            @click="clearFiltered"
          >
            clear
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>

    <!--another grid temp-->
    <div class="md:flex md:items-center  p-2 mt-10">
      <div class="md:flex flex-col md:flex-row md:min-h-screen w-full">
        <!-- <div class="flex flex-col w-full md:w-64 text-gray-700 bg-white ">
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
          <nav
            class="flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto text-left"
          >
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
        </div> -->
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 w-full h-full items-start gap-3"
        >
          <product
            v-for="product in filteredResult"
            :key="product.prodID"
            :product="product"
          >
          </product>
        </div>
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
      search: "",
      category: "",
    };
  },
  mounted() {
    this.getProduct();
    this.fetchAllType();
  },
  computed: {
    products() {
      return this.$store.getters.getProducts;
    },
    allType() {
      return this.$store.getters.getAllType;
    },
    filteredList() {
      return this.products.filter((product) => {
        return product.prodName
          .toLowerCase()
          .includes(this.search.toLowerCase());
      });
    },
    filteredCategory() {
      return this.products.filter((product) => {
        return product.type.typeName
          .toLowerCase()
          .includes(this.category.toLowerCase());
      });
    },
    filteredResult() {
      var result = this.products;
      if (this.filteredList) {
        result = result.filter((product) =>
          product.prodName.toLowerCase().includes(this.search.toLowerCase())
        );
      }
      if (this.filteredCategory) {
        result = result.filter((product) =>
          product.type.typeName
            .toLowerCase()
            .includes(this.category.toLowerCase())
        );
      }
      return result;
    },
  },
  methods: {
    ...mapActions({ getProduct: "fetchProducts" }),
    ...mapActions({ fetchAllType: "fetchAllType" }),
    clearFiltered() {
      this.category = "";
      this.search = "";
    },
  },
};
</script>

<style scoped>
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>
