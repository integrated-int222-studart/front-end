<template>
  <product
    v-for="product in this.random_products.slice(0, this.size)"
    :key="product.prodID"
    :product="product"
  ></product>
</template>

<script>
import product from "../components/Product.vue";
import { mapActions } from "vuex";
export default {
  props: {
    size: {
      type: Number,
      default: 5,
    },
  },
  components: {
    product,
  },
  mounted() {
    this.fetchRandomProduct();
  },
  computed: {
    random_products() {
      return this.$store.getters.getRandomProducts;
    },
    // ...mapGetters("getRandomProducts"),
  },
  methods: {
    ...mapActions({ fetchRandomProduct: "fetchRandomProduct" }),
  },
};
</script>
