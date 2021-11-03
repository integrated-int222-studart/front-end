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
              <p class="font-bold uppercase text-2xl mb-5">
                ชื่อผู้ใช้ : {{ this.userById.username }}
              </p>
              <div class="text-sm mb-5 cursor-pointer">
                <!-- ติดต่อ: {{ this.userById.email }} -->
                <p>
                  {{ this.userById.email }}
                  <span>
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                </p>
              </div>
              <p class="text-sm mb-5">
                <!-- ติดต่อ: {{ this.userById.email }} -->
                <span
                  >{{ this.userById.firstName }}
                  {{ this.userById.lastName }}</span
                >
              </p>
              <div class="text-sm">
                รายละเอียด:
                <p class="ml-4">
                  <span>{{ this.userById.description }}</span>
                </p>
              </div>

              <div
                v-if="
                  this.$store.getters.getCurrentUsername ==
                    this.userById.username
                "
              >
                <button @click="editProfile" class="btn btn-primary">
                  Edit mode
                </button>
              </div>

              <!-- <pre>{{ this.userById }}</pre> -->
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
