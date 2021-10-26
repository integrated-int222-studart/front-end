<template>
  <div class="product-detail">
    <div class="">
      <p class="text-4xl font-bold">Product Details</p>
      <p>{{ $route.params.id }}</p>
    </div>
    <!-- component -->
    <main class="p-2 m-2 md:p-8 md:m-6">
      <div class="container mx-auto">
        <!--  -->
        <div class="container mx-auto px-6">
          <div class="flex-none lg:flex justify-between items-start  ">
            <!-- img upload -->
            <div class="h-full w-full">
              <!-- <h1 class="font-bold uppercase text-2xl mb-5">
                ชื่อผลงาน: {{ this.productById.prodName }}
              </h1> -->
              <div class="aspect-w-1 aspect-h-1 border-2 border-black rounded">
                <img
                  src="https://source.unsplash.com/random/"
                  class="object-cover h-full w-full "
                  alt=""
                />
              </div>
            </div>
            <!-- form -->
            <div class="h-full w-full p-3 mt-6 ml-0 md:ml-10 md:mt-0">
              <div class="text-left">
                <div class="grid place-items-center">
                  <div class="flex flex-col w-full h-full py-2 ">
                    <h1 class="font-bold uppercase text-2xl mb-5">
                      ชื่อผลงาน: {{ this.productById.prodName }}
                    </h1>
                    <p class="text-sm mb-5 cursor-pointer">
                      ศิลปิน: {{ this.productById.ownerID }}
                    </p>

                    <p class="text-sm mb-5 overflow-y-auto h-32">
                      รายละเอียด: {{ this.productById.prodDescription }}
                    </p>
                    <h1 class="font-bold uppercase text-2xl mb-5">
                      ราคา: {{ this.productById.ownerID }} บาท
                    </h1>
                    <button class="btn btn-md btn-primary rounded-btn text-lg">
                      ซื้อสินค้า
                    </button>
                    <pre>{{ this.productById }}</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--  -->

        <div class="mt-16">
          <h3 class="text-gray-600 text-2xl font-medium">More Products</h3>

          <main class="grid place-items-center items-start ">
            <div>
              <div
                class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
              ></div>
            </div>
          </main>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapActions } from "vuex";
// import axios from "axios";

export default {
  props: ["id"],
  mounted() {
    this.fetchProductById(this.$route.params.id);
  },

  computed: {
    productById() {
      return this.$store.getters.getProductById;
    },
  },
  methods: {
    ...mapActions({ fetchProductById: "fetchProductById" }),
  },

  //   async created() {
  //     try {
  //       const res = await axios.get(`http://localhost:3000/product/${this.id}`);
  //       this.productByid = res.data;
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   },
};
</script>
