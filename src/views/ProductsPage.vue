<template>
  <div class="products mx-3">
    <div class="mt-10  sm:justify-center sm:items-center ">
      <div
        class="flex items-center justify-between md:justify-start flex-col sm:flex-row"
      >
        <div class="mx-6">
          <p class="text-5xl font-bold ">ผลงานทั้งหมด</p>
        </div>
        <div class="flex justify-end flex-1 px-2 ">
          <div class="sm:flex sm:justify-center sm:items-center ">
            <div class="form-control ">
              <div class="relative">
                <input
                  type="text"
                  placeholder="ค้นหาชื่อผลงาน"
                  v-model="search"
                  class="w-full pr-16 input input-ghost input-bordered border-2 shadow-sm border-gray-300 bg-white hover:border-black"
                />
              </div>
            </div>

            <div class="dropdown dropdown-end ">
              <div
                tabindex="0"
                class="btn bg-white cursor-pointer border-2 shadow-sm border-gray-300  rounded-md text-black hover:bg-gray-200 px-8 mx-6"
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
          </div>
          <button
            v-if="this.category || this.search"
            @click="clearFiltered"
            class="btn btn-error text-black"
          >
            clear
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!--another grid temp-->
    <div class="md:flex md:items-center  p-2 mt-10">
      <div class="md:flex flex-col md:flex-row md:min-h-screen w-full">
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 w-full h-full items-start gap-3"
        >
          <product
            v-for="product in filteredResult"
            :key="product.prodID"
            :product="product"
          >
            <template v-slot:btn-status>
              <favorite
                v-if="showFav(product).length == 0"
                :product="product"
                :status="'like'"
              ></favorite>
              <favorite
                v-if="showFav(product).length == 1"
                :product="product"
                :status="'unlike'"
              ></favorite>
            </template>
          </product>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Favorite from "../components/Favorite.vue";
import { mapActions } from "vuex";
import product from "../components/Product.vue";

export default {
  name: "Products",
  components: {
    Favorite,
    product,
  },
  data() {
    return {
      search: "",
      category: "",
      current_user: "",
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
    productsByFavorite() {
      return this.$store.getters.getFavoriteByUserId;
    },
    getCurrentUser() {
      return this.$store.getters.getCurrentUser;
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
      var result = this.products.filter((product) => product.status == 1);
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
    ...mapActions({ fetchCurrentUser: "fetchCurrentUser" }),
    ...mapActions({ fetchFavoriteByUserId: "fetchFavoriteByUserId" }),
    clearFiltered() {
      this.category = "";
      this.search = "";
    },
    showFav(product) {
      let fav = this.productsByFavorite.filter(
        (f) => f.prodID == product.prodID
      );
      return fav;
    },
  },
  async created() {
    if (this.$store.getters.isAuthenticated) {
      await this.fetchCurrentUser();
      await this.fetchFavoriteByUserId(this.getCurrentUser.userID);
    }
    this.current_user = await this.getCurrentUser;
  },
};
</script>

<style scoped>
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>
