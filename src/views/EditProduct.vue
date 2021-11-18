<template>
  <div class="add-product">
    <div class="heading mt-10">
      <p class="text-3xl font-bold">{{ this.$route.params.prod_id }}</p>
    </div>
    <main class="p-2 m-2 md:p-4 md:m-4">
      <EditProductInput
        :prod_id="this.$route.params.prod_id"
      ></EditProductInput>
    </main>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import EditProductInput from "../components/EditProductInput.vue";

export default {
  data() {
    return {};
  },
  async mounted() {
    await this.fetchEditProductById(this.$route.params.prod_id);
  },
  components: {
    EditProductInput,
  },
  computed: {
    getEditProduct() {
      return this.$store.getters.getEditProduct;
    },
  },
  methods: {
    ...mapActions({ fetchEditProductById: "fetchEditProductById" }),
  },
};
</script>
