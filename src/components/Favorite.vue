<template>
  <div>
    <button
      class="btn btn-ghost"
      v-if="this.status == 'like'"
      @click="activeFavorite"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8 group-hover:opacity-70"
        fill="none"
        viewBox="0 0 24 24"
        stroke="gray"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </button>

    <button
      class="btn btn-ghost"
      v-if="this.status == 'unlike'"
      @click="unFavorite"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="fill-current text-red-500  h-8 w-8 group-hover:opacity-70 "
        viewBox="0 0 24 24"
        stroke="red"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["status", "product"],
  data() {
    return {};
  },
  mounted() {},
  computed: {},
  methods: {
    ...mapActions({
      addFavoriteByProdustId: "addFavoriteByProdustId",
      removeFavoriteByProdustId: "removeFavoriteByProdustId",
    }),
    activeFavorite() {
      this.addFavoriteByProdustId(this.product);
    },
    unFavorite() {
      this.removeFavoriteByProdustId(this.product.prodID);
    },
  },
};
</script>
