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
            <div class="h-full w-full">
              <div>
                <div
                  class="border-2 border-black aspect-w-1 aspect-h-1 flex flex-col mx-auto items-center justify-center shadow-lg"
                >
                  <img
                    :src="this.productById.images[image_index].url"
                    class="object-contain mx-auto"
                  />
                </div>
                <!-- <div
                  class="aspect-w-1 aspect-h-1 border-2 border-black rounded"
                >
                  <img
                    :src="this.show_image"
                    class="object-cover h-full w-full "
                    alt=""
                  />
                </div> -->
                <div class="mt-6 grid grid-cols-5 gap-3">
                  <div
                    v-for="(item, index) in this.productById.images"
                    :key="index"
                    @click="changeIndex(index)"
                  >
                    <div
                      class="border-2 border-black aspect-w-1 aspect-h-1 w-full mx-auto items-center justify-center shadow-lg"
                    >
                      <img
                        :src="item.url"
                        class="object-cover mx-auto w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <!-- <div class="aspect-w-1 aspect-h-1 border-2 border-black rounded">
                <img
                  src="https://source.unsplash.com/random/"
                  class="object-cover h-full w-full "
                  alt=""
                />
              </div> -->
            </div>

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
                    <h2 class="mb-5 text-2xl">
                      <div
                        class="badge badge-outline badge-lg mr-1"
                        v-for="style in this.productById.style"
                        :key="style.styleID"
                        :value="style.styleID"
                      >
                        {{ style.styleName }}
                      </div>
                    </h2>
                    <h1 class="font-bold uppercase text-2xl mb-5">
                      ราคา: {{ this.productById.price }} บาท
                    </h1>
                    <button class="btn btn-md btn-primary rounded-btn text-lg">
                      ซื้อสินค้า
                    </button>
                    <!-- <pre class="max-w-xl overflow-hidden">{{
                      this.productById
                    }}</pre> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
  data() {
    return {
      preview_list: [],
      image_index: 0,
      show_image: "",
    };
  },
  mounted() {
    this.fetchProductById(this.$route.params.id);
  },

  computed: {
    // changeImage() {
    //   return (this.show_image = this.productById);
    // },
    productById() {
      return this.$store.getters.getProductById;
    },
  },
  methods: {
    ...mapActions({ fetchProductById: "fetchProductById" }),
    changeIndex(index) {
      this.image_index = index;
      console.log(this.image_index);
    },
  },
};
</script>
