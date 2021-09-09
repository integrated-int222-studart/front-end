<template>
  <div class="profile">
    <!-- <p class="text-3xl font-bold">Profile page</p> -->

    <!--test-->
    <!-- tailwind.config.js -->

    <!-- component -->

    <div class="">
      <!-- <header>
      <div class="container mx-auto px-6 py-3">
        <div class="flex items-center justify-between">
          <div
            class="w-full text-gray-700 md:text-center text-2xl font-semibold"
          >
            Profile page
          </div>
        </div>
      </div>
    </header> -->

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
            <div class="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
              <h3 class="text-gray-700 uppercase text-lg">{ Profile Name }</h3>
              <span class="text-gray-500 mt-3">describetion</span>
              <hr class="my-3" />
              <span class="text-gray-500 mt-3"
                >Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries</span
              >
            </div>
          </div>
          <div class="mt-16">
            <!-- <h3 class="text-gray-600 text-2xl font-medium">More Products</h3> -->
            <nav class="sm:flex sm:justify-center sm:items-center mt-4">
              <div class="flex flex-col sm:flex-row">
                <a
                  class="mt-3 text-gray-600 text-xl hover:underline sm:mx-3 sm:mt-0"
                  href="#"
                  >สร้าง</a
                >
                <a
                  class="mt-3 text-gray-600 text-xl hover:underline sm:mx-3 sm:mt-0"
                  href="#"
                  >สะสม</a
                >
                <a
                  class="mt-3 text-gray-600 text-xl hover:underline sm:mx-3 sm:mt-0"
                  href="#"
                  >ชื่นชอบ</a
                >
              </div>
            </nav>
            <main class="grid place-items-center items-start min-h-screen">
              <div>
                <div
                  class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
                >
                  <product
                    v-for="product in products"
                    :key="product.prodID"
                    :product="product"
                  ></product>
                </div>
              </div>
            </main>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import product from "../components/Product.vue";

export default {
  name: "ProfilePage",
  components: {
    product,
  },
  data() {
    return {
      products: [],
    };
  },
  async created() {
    try {
      const res = await axios.get("http://localhost:3000/product");
      this.products = res.data;
    } catch (e) {
      console.log(e);
    }
  },
};
</script>
