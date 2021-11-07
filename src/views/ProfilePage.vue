<template>
  <div class="profile">
    <main class="p-8 m-6">
      <div class="container mx-auto px-6">
        <!-- <div class="md:flex md:items-center"> -->
        <div class="flex-none lg:flex justify-between items-start ">
          <div class="w-1/2">
            <div
              class="border-2 border-gray-400 aspect-w-1 aspect-h-1 flex flex-col mx-auto items-center justify-center shadow-lg"
            >
              <img class="object-cover" :src="this.userById.imageURL" />
              <!-- src="https://images.unsplash.com/photo-1600551008016-8bef86c12cc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80" -->
            </div>
            <pre>{{ this.userById.imageURL }}</pre>
          </div>

          <div
            class="h-full w-full p-3 mt-6 ml-0 md:ml-0 lg:ml-10 md:mt-10 lg:mt-0"
          >
            <div class="mb-10 md:text-left">
              <p class="font-bold text-4xl mb-3">
                {{ this.userById.username }}
              </p>
              <div class="mb-3">
                <div class="badge badge-outline badge-md">
                  {{ this.userById.status }}
                </div>
              </div>
              <div class="text-sm cursor-pointer underline mb-3">
                <p>
                  {{ this.userById.email }}
                </p>
              </div>

              <div class="flex flex-col text-sm mb-5 h-32">
                <p class="text-base">
                  คำอธิบาย
                </p>
                <p class="text-sm mb-5 overflow-ellipsis overflow-y-auto h-32">
                  {{ this.userById.description }}
                </p>
              </div>

              <div
                class="flex m-auto flex-col md:flex-row"
                v-if="
                  this.$store.getters.getCurrentUsername ==
                    this.userById.username
                "
              >
                <button
                  @click="
                    this.$router.push(
                      `/profile/${this.$route.params.username}/editprofile`
                    )
                  "
                  class="btn btn-primary"
                >
                  Edit mode
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- </div> -->

        <!--  -->
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
              v-for="product in this.productByUserId"
              :key="product.prodID"
              :product="product"
            ></product>
          </div>
          <!-- <pre>{{this.productByUserId}}</pre> -->
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import product from "../components/Product.vue";

export default {
  name: "ProfilePage",
  props: ["username"],
  data() {
    return {};
  },
  components: {
    product,
  },
  mounted() {
    this.fetchUserByUsername(this.$route.params.username);
    this.fetchProductByUserId(this.userById.userID);
  },

  computed: {
    userById() {
      return this.$store.getters.getUserById;
    },
    productByUserId() {
      return this.$store.getters.getProductByUserId;
    },
    //  ...mapGetters({Posts: "StatePosts", User: "StateUser"}),
  },
  methods: {
    ...mapActions({ fetchUserByUsername: "fetchUserByUsername" }),
    ...mapActions({ fetchProductByUserId: "fetchProductByUserId" }),

    gotoProductDetail(prodid) {
      this.$router.push(`/productdetail/${prodid}`);
    },
    editProfile() {
      alert("Edit mode Active");
      console.log("edit mode Active");
    },
  },
};
</script>
