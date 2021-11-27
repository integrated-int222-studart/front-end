<template>
  <div class="profile">
    <!--  -->
    <main class="p-8 m-6">
      <div class="container mx-auto px-6">
        <!-- profile card -->
        <div class="container mx-auto px-6 ">
          <div class="flex-none lg:flex justify-between items-start ">
            <!-- img -->
            <div class="h-full w-full lg:w-1/2">
              <div>
                <div
                  class="aspect-w-1 aspect-h-1 flex flex-col mx-auto items-center justify-center"
                >
                  <img
                    v-if="this.userById.imageURL"
                    class="rounded-full object-cover border-2 border-black"
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
              </div>
            </div>
            <!-- content -->
            <div
              class="h-full w-full p-3 mt-6 ml-0 md:ml-0 lg:ml-10 md:mt-10 lg:mt-0 "
            >
              <div class="text-left">
                <div class="grid place-items-center">
                  <div class="flex flex-col w-full h-full py-2 ">
                    <h1 class="font-bold text-4xl mb-3">
                      {{ this.userById.username }}
                    </h1>
                    <div class="mb-3">
                      <div class="badge badge-outline badge-md">
                        {{ this.userById.status }}
                      </div>
                      <span class="ml-2 text-md" v-if="this.userById.school">
                        {{ this.userById.school }}
                      </span>
                    </div>
                    <div class="text-sm cursor-pointer underline mb-3">
                      <p>
                        {{ this.userById.email }}
                      </p>
                    </div>

                    <div class="flex flex-col text-sm mb-5 h-32">
                      <p class="text-md">
                        คำอธิบาย
                      </p>
                      <p
                        class="text-sm mb-5 overflow-ellipsis overflow-y-auto h-32"
                      >
                        {{ this.userById.description }}
                      </p>
                    </div>
                    <div
                      class=""
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
                        class="btn "
                      >
                        Edit mode
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--  -->
          </div>
        </div>

        <!-- nav -->
        <div class="mt-16">
          <h3 class="text-2xl font-semibold">More Products</h3>
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
            class="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 w-full h-full items-center gap-3"
          >
            <div v-if="this.filter.length == 0" class="col-span-5">
              <div class="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
                <div class="border-t border-gray-200 text-center pt-8">
                  <h1 class="text-9xl font-bold text-primary py-8">
                    ไม่มีผลงาน
                  </h1>

                  <p class="text-xl pb-8 px-12 font-medium">
                    ยังไม่มีผลงานที่
                    <span
                      class="text-2xl font-extrabold"
                      v-if="this.status == 'create'"
                      >สร้าง</span
                    >
                    <span
                      class="text-2xl font-extrabold"
                      v-if="this.status == 'collection'"
                      >สะสม</span
                    >
                    <span
                      class="text-2xl font-extrabold"
                      v-if="this.status == 'favorite'"
                      >ชื่นชอบ</span
                    >
                  </p>
                </div>
              </div>
            </div>

            <product
              v-for="product in this.filter"
              :key="product.prodID"
              :product="product"
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
                  class="btn btn-ghost btn-sm  border-2 border-gray-300 bg-gray-100 mr-2 shadow-md text-xs"
                  v-if="this.status == 'create'"
                  @click="this.$router.push(`/edit-product/${product.prodID}`)"
                >
                  Edit
                </button>

                <button
                  class="btn btn-error btn-sm bg-red-500 border-red-700 shadow-md text-xs text-gray-50"
                  v-if="this.status == 'create'"
                  @click="this.delete(product)"
                >
                  Delete
                </button>
                <DownloadFile
                  v-if="this.status == 'collection'"
                  :prod_id="product.prodID"
                  :prod_name="product.prodName"
                ></DownloadFile> </template
            ></product>
          </div>
          <div class="text-left"></div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import ApproveStatus from "../components/ApprovalBadge.vue";
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
  },
  mounted() {
    this.fetchUserByUsername(this.$route.params.username);
  },

  computed: {
    userById() {
      return this.$store.getters.getUserById;
    },
    filter() {
      var result = this.productsByCreate.filter(
        (product) => product.status != 2
      );
      if (this.$store.getters.getCurrentUsername != this.userById.username) {
        if (this.status == "collection") {
          result = this.productsByCollection.filter(
            (product) => product.status == 1 || product.status == 2
          );
        }
        if (this.status == "favorite") {
          result = this.productsByFavorite.filter(
            (product) => product.status == 1
          );
        }
        if (this.status == "create") {
          result = this.productsByCreate.filter(
            (product) => product.status == 1
          );
        }
      }

      if (this.$store.getters.getCurrentUsername == this.userById.username) {
        if (this.status == "collection") {
          result = this.productsByCollection.filter(
            (product) => product.status == 1 || product.status == 2
          );
        }
        if (this.status == "favorite") {
          result = this.productsByFavorite.filter(
            (product) => product.status == 1
          );
        }
        if (this.status == "created") {
          result = this.productsByCreate.filter(
            (product) => product.status != 2
          );
        }
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
