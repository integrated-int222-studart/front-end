<template>
  <div class="profile">
    <main class="p-8 m-6">
      <div class="container mx-auto px-6">
        <div class="md:flex md:items-center">
          <div class="w-full h-64 md:w-1/2 lg:h-96">
            <img
              class="h-full w-full rounded-md object-cover max-w-lg mx-auto"
              src="https://images.unsplash.com/photo-1600551008016-8bef86c12cc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80"
              alt="Profile"
            />
          </div>
          <div class="w-full md:w-1/2 mt-10 p-3 md:ml-10">
            <div class="mb-10 md:text-left">
              <h1 class="font-bold uppercase text-2xl mb-5">
                ไอหนุ่ม
              </h1>
              <p class="text-sm mb-5 cursor-pointer">
                ศิลปิน: { { product.owner }}
              </p>
              <p class="text-sm">
                รายละเอียด: { { product.description }}
                <br />
                Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Eos,
                voluptatum dolorum! Laborum blanditiis consequatur, voluptates,
                sint enim fugiat saepe, dolor fugit, magnam explicabo eaque quas
                id quo porro dolorum facilis...
              </p>
            </div>
          </div>
        </div>
        <div class="mt-16">
          <h3 class="text-2xl font-medium">More Products</h3>
          <nav class="sm:flex sm:justify-center sm:items-center m-4">
            <div class="flex flex-col sm:flex-row">
              <a class="mt-3 text-xl hover:underline sm:mx-3 sm:mt-0" href="#"
                >สร้าง</a
              >
              <a class="mt-3 text-xl hover:underline sm:mx-3 sm:mt-0" href="#"
                >สะสม</a
              >
              <a class="mt-3 text-xl hover:underline sm:mx-3 sm:mt-0" href="#"
                >ชื่นชอบ</a
              >
            </div>
          </nav>
          <!-- component -->
          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 w-full h-full items-center gap-3"
          >
            <product
              v-for="product in this.products"
              :key="product.prodID"
              :product="product"
            ></product>
          </div>
        </div>
      </div>
    </main>
    <pre>{{ this.products }}</pre>
  </div>
</template>

<script>
import { mapActions } from "vuex";
// import axios from "axios";
import product from "../components/Product.vue";

// import { useStore } from "vuex";

export default {
  name: "ProfilePage",
  components: {
    product,
  },
  // mounted() {
  //   this.getProduct();
  // },
  computed: {
    products() {
      return this.$store.getters.getProducts;
    },
  },
  methods: {
    ...mapActions({ getProduct: "fetchProducts" }),

    gotoProductDetail(prodid) {
      this.$router.push(`/productdetail/${prodid}`);
    },
  },
};
</script>
