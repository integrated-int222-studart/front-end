<template>
  <div class="overflow-x-auto">
    <table class="table  w-full">
      <thead class="">
        <tr>
          <th>ID</th>
          <th>Product Name</th>
          <th>Description</th>
          <th>Status</th>
          <th>Rejected</th>
          <th>Approve</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="product in this.productTable"
          :key="product.prodID"
          class="hover"
        >
          <AdminEachProduct
            v-if="
              product.adminApproval[0] == null || product.adminApproval == null
            "
            :product="product"
            :approve="this.adminAppoval"
          ></AdminEachProduct>
          <AdminEachProduct
            v-else
            :product="product"
            :approve="product.adminApproval[0]"
          ></AdminEachProduct>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th>ID</th>
          <th>Product Name</th>
          <th>Description</th>
          <th>Status</th>
          <th>Rejected</th>
          <th>Approve</th>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import AdminEachProduct from "../../components/adminComponent/adminEachProduct.vue";

export default {
  components: {
    AdminEachProduct,
  },
  data() {
    return {
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
  mounted() {
    this.isStillLoginAdmin();
    if (this.$store.getters.isAdminAuthenticated) {
      this.fetchApprovalProduct();
    }
  },
  computed: {
    productTable() {
      return this.$store.getters.getListProductApprovals;
    },
  },
  methods: {
    ...mapActions({ isStillLoginAdmin: "isStillLoginAdmin" }),
    ...mapActions({ fetchApprovalProduct: "fetchApprovalProduct" }),
  },
};
</script>
