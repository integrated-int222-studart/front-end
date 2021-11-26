<template>
  <div class="product-detail">
    <!-- component -->
    <main class="p-2 m-2 md:p-8 md:m-6">
      <div class="container mx-auto">
        <!--  -->
        <div class="container mx-auto px-6 ">
          <div class="flex-none lg:flex justify-between items-start ">
            <!-- img -->
            <div class="h-full w-full">
              <div>
                <div
                  class="border-2 border-gray-400 aspect-w-1 aspect-h-1 flex flex-col mx-auto items-center justify-center shadow-lg"
                >
                  <img
                    :src="this.productById.images[image_index].url"
                    class="object-contain mx-auto"
                  />
                </div>
                <div class="mt-6 grid grid-cols-5 gap-3">
                  <div
                    v-for="(item, index) in this.productById.images"
                    :key="index"
                    @click="image_index = index"
                    class="transform transition duration-500 hover:scale-105"
                  >
                    <div
                      class="border-2 border-gray-400 aspect-w-1 aspect-h-1 w-full mx-auto items-center justify-center shadow-lg rounded-md"
                    >
                      <img
                        :src="item.url"
                        class="object-cover mx-auto w-full h-full rounded-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- content -->
            <div
              class="h-full w-full p-3 mt-6 ml-0 md:ml-0 lg:ml-10 md:mt-10 lg:mt-0 bg-gray-100"
            >
              <div class="text-left">
                <div class="grid place-items-center">
                  <div class="flex flex-col w-full h-full py-2 ">
                    <h1 class="font-bold text-4xl mb-1">
                      {{ this.productById.prodName }}
                    </h1>
                    <div
                      class="flex justify-between text-gray-700 item-center mb-5"
                    >
                      <p class="">
                        {{ this.productById.type.typeName }}
                      </p>
                    </div>
                    <div @click="gotoProfile(this.username)">
                      <span class="text-sm ">
                        ศิลปิน :
                      </span>
                      <span class="text-sm mb-5 cursor-pointer underline">
                        {{ this.username }}
                      </span>
                    </div>

                    <div class="flex flex-col text-sm mb-5 h-32">
                      <p class="text-md">
                        คำอธิบาย
                      </p>
                      <p
                        class="text-sm mb-5 overflow-ellipsis overflow-y-auto h-32"
                      >
                        {{ this.productById.prodDescription }}
                      </p>
                    </div>
                    <h2 class="mb-3 text-2xl">
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
                    <div class="flex align-bottom">
                      <button
                        class="btn btn-md btn-primary rounded-btn text-lg shadow-lg"
                        @click="addToCollectionButton()"
                      >
                        ซื้อสินค้า
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- end content -->
          </div>
        </div>

        <div class="mt-16">
          <h3 class="text-gray-600 text-2xl font-medium">More Products</h3>

          <main class="grid place-items-center items-start ">
            <div
              class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 w-full h-full items-center gap-3"
            >
              <MoreProduct></MoreProduct>
            </div>
          </main>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import MoreProduct from "../components/MoreProduct.vue";
import { mapActions } from "vuex";

export default {
  props: ["id"],
  data() {
    return {
      preview_list: [],
      image_index: 0,
      show_image: "",
    };
  },
  components: {
    MoreProduct,
  },
  async mounted() {
    await this.fetchProductById(this.$route.params.id);
  },

  computed: {
    productById() {
      return this.$store.getters.getProductById;
    },
    username() {
      return this.$store.getters.getUsername;
    },
  },
  methods: {
    ...mapActions({ fetchProductById: "fetchProductById" }),
    addToCollectionButton() {
      this.$store.dispatch("addProductCollection", this.$route.params.id);
      this.$router.push(`/profile/${localStorage.getItem("username")}`);
    },
    gotoProfile(username) {
      this.$router.push(`/profile/${username}`);
    },
  },
};
</script>
