<template>
  <div class="product ">
    <div
      class="cursor-pointer p-3 bg-white shadow-lg transform transition duration-500 hover:scale-105"
    >
      <div
        class=" h-full w-full aspect-w-1 aspect-h-1 shadow-md"
        @click="gotoProductDetail(product.prodID)"
      >
        <img :src="this.product.images[0].url" class="object-cover " alt="" />
      </div>
      <div class="relative text-left text-black px-3 pb-3 mt-6">
        <span class="block font-semibold text-xl truncate">{{
          product.prodName
        }}</span>
        <div class="flex justify-between item-center">
          <p class="text-gray-600 text-xs">
            {{ this.product.type.typeName }}
          </p>
        </div>
        <slot name="badge-status"> </slot>
        <div class="flex justify-between items-center ">
          <p class="text-2xl text-gray-800 ">{{ product.price }} บาท</p>
          <div>
            <slot name="btn-status">
              <favorite
                v-if="myFavoriteList(product).length == 0"
                :product="this.product"
                :status="'like'"
              ></favorite>
              <favorite
                v-if="myFavoriteList(product).length == 1"
                :product="this.product"
                :status="'unlike'"
              ></favorite>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Favorite from "../components/Favorite.vue";
import { mapActions } from "vuex";
export default {
  props: ["product"],
  components: {
    Favorite,
  },
  data() {
    return {
      url: "http://13.76.182.102:3000/upload/photo/1",
    };
  },
  computed: {
    productsByFavorite() {
      return this.$store.getters.getFavoriteByUserId;
    },
    getCurrentUser() {
      return this.$store.getters.getCurrentUser;
    },
  },

  methods: {
    ...mapActions({
      addFavoriteByProdustId: "addFavoriteByProdustId",
      removeFavoriteByProdustId: "removeFavoriteByProdustId",
    }),
    ...mapActions({ fetchCurrentUser: "fetchCurrentUser" }),
    ...mapActions({ fetchFavoriteByUserId: "fetchFavoriteByUserId" }),

    myFavoriteList(product) {
      let fav = this.productsByFavorite.filter(
        (f) => f.prodID == product.prodID
      );
      return fav;
    },
    delete() {
      this.$store.dispatch("removeProduct", this.product);
    },
    async gotoProductDetail(prodid) {
      await this.$router.push(`/productdetail/${prodid}`);
      this.$router.go();
    },

    favAction() {
      this.addFavoriteByProdustId(this.product);
    },
  },
};
</script>
