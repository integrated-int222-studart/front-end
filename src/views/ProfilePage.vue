<template>
  <div class="profile">
    <main class="p-8 m-6">
      <div class="container mx-auto px-6">
        <div class="flex-none lg:flex justify-between items-start ">
          <div class="w-1/2">
            <div class="aspect-w-1 aspect-h-1">
              <img
                v-if="this.userById.imageURL"
                class="rounded-full object-cover"
                :src="this.userById.imageURL"
              />
              <svg
                v-if="!this.userById.imageURL"
                viewBox="0 0 32 32"
                class="fill-current cursor-pointer text-black "
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style="display: block; fill: currentcolor;"
              >
                <path
                  d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"
                ></path>
              </svg>
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

        <div class="mt-16">
          <h3 class="text-2xl font-medium">More Products</h3>
          <nav class="sm:flex sm:justify-center sm:items-center m-4">
            <div class="flex flex-col sm:flex-row">
              <button
                class="mt-3 text-xl hover:underline sm:mx-3 sm:mt-0"
                @click="showProductByStatus('create')"
              >
                สร้าง
              </button>
              <button
                class="mt-3 text-xl hover:underline sm:mx-3 sm:mt-0"
                @click="showProductByStatus('collection')"
              >
                สะสม
              </button>
              <button
                class="mt-3 text-xl hover:underline sm:mx-3 sm:mt-0"
                @click="showProductByStatus('favorite')"
              >
                ชื่นชอบ
              </button>
            </div>
          </nav>
          <!-- component -->
          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 w-full h-full items-center gap-3"
          >
            <product
              v-for="product in this.filter"
              :key="product.prodID"
              :product="product"
            >
              >
              <template
                v-if="
                  this.status == 'create' &&
                    this.$store.getters.getCurrentUsername ==
                      this.userById.username
                "
                v-slot:badge-status
              >
                <ApproveStatus
                  v-if="
                    product.adminApproval[0] == [] ||
                      product.adminApproval == [] ||
                      product.adminApproval.length == 0
                  "
                  :approve="this.adminAppoval"
                ></ApproveStatus>
                <ApproveStatus
                  v-else
                  :approve="product.adminApproval[0]"
                ></ApproveStatus>
              </template>

              <template
                v-slot:btn-status
                v-if="
                  this.$store.getters.getCurrentUsername ==
                    this.userById.username
                "
              >
                <button
                  class="btn btn-ghost"
                  v-if="this.status == 'create'"
                  @click="this.$router.push(`/edit-product/${product.prodID}`)"
                >
                  Edit
                </button>

                <button
                  class="btn btn-ghost"
                  v-if="this.status == 'create'"
                  @click="this.delete(product)"
                >
                  Delete
                </button>
                <DownloadFile
                  v-if="this.status == 'collection'"
                  :prod_id="product.prodID"
                  :prod_name="product.prodName"
                ></DownloadFile>
                <Favorite
                  v-if="this.status == 'favorite'"
                  :product="product"
                  :status="'unlike'"
                /> </template
            ></product>
          </div>
          <div class="text-left"></div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
// import axios from "axios";
import { mapActions } from "vuex";
import ApproveStatus from "../components/ApprovalBadge.vue";
import Favorite from "../components/Favorite.vue";
import DownloadFile from "../components/DownloadImages.vue";
import product from "../components/Product.vue";

export default {
  name: "ProfilePage",
  props: ["username"],
  data() {
    return {
      status: "create",
      productsByStatus: "",
      adminAppoval: {
        adminID: null,
        email: null,
        approval: {
          approvalID: null,
          adminID: null,
          prodID: null,
          approveDate: null,
          status: 0,
        },
      },
    };
  },
  components: {
    product,
    ApproveStatus,
    DownloadFile,
    Favorite,
  },
  mounted() {
    this.fetchUserByUsername(this.$route.params.username);
  },

  computed: {
    userById() {
      return this.$store.getters.getUserById;
    },
    filter() {
      var result = this.productsByCreate;
      if (this.status == "collection") {
        result = this.productsByCollection;
      } else if (this.status == "favorite") {
        result = this.productsByFavorite;
      } else {
        result = this.productsByCreate;
      }
      return result;
    },
    productsByCollection() {
      return this.$store.getters.getCollectionByUserId;
    },
    productsByCreate() {
      return this.$store.getters.getProductByUserId;
    },
    productsByFavorite() {
      return this.$store.getters.getFavoriteByUserId;
    },
  },
  methods: {
    ...mapActions({ fetchUserByUsername: "fetchUserByUsername" }),
    ...mapActions({ fetchProductByUserId: "fetchProductByUserId" }),
    ...mapActions({ fetchCollectionsByUserId: "fetchCollectionsByUserId" }),
    ...mapActions({ fetchFavoriteByUserId: "fetchFavoriteByUserId" }),

    gotoProductDetail(prodid) {
      this.$router.push(`/productdetail/${prodid}`);
    },
    gotoEditProduct(prodid) {
      this.$router.push(`/editproduct/${prodid}`);
    },

    delete(product) {
      this.$store.dispatch("removeProduct", product);
    },
    async showProductByStatus(status) {
      this.status = status;

      if (this.status == "collection") {
        await this.fetchCollectionsByUserId(this.userById.userID);
      } else if (this.status == "favorite") {
        await this.fetchFavoriteByUserId(this.userById.userID);
      } else {
        await this.fetchProductByUserId(this.userById.userID);
      }
    },
  },
  async created() {
    await this.fetchUserByUsername(this.$route.params.username);
  },
};
</script>
