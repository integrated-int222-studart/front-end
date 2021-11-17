<template>
  <th>
    <label>
      <input type="checkbox" class="checkbox" />
    </label>
  </th>
  <td>
    {{ this.product.prodID }}
  </td>
  <td>
    <div class="flex items-center space-x-3">
      <div class="avatar">
        <div class="w-12 h-12 ">
          <img
            :src="this.product.images[0].url"
            alt="Avatar Tailwind CSS Component"
          />
        </div>
      </div>
      <div>
        <div class="font-bold">
          {{ this.product.prodName }}
        </div>
        <div class="text-sm opacity-50">
          type: {{ this.product.productType }}
        </div>
      </div>
    </div>
  </td>
  <td>
    <div class="truncate max-w-xs">
      {{ this.product.prodDescription }}
      <br />
      <span
        v-if="this.product.status == 0"
        class="badge badge-outline badge-md badge-error"
        >hidden</span
      >
      <span
        v-if="this.product.status == 1"
        class="badge badge-outline badge-md bg-success border-0 text-green-900 "
        >showed</span
      >
    </div>
  </td>
  <!-- <td>props{{ this.product.status }} this{{ this.productApproval.status }}</td> -->
  <td>
    <span
      v-if="this.approve.approval.status == 0"
      class="badge badge-outline badge-md bg-warning border-0 text-yellow-600"
      >Pending</span
    >
    <span
      v-if="this.approve.approval.status == 1"
      class="badge badge-outline badge-md bg-success border-0 text-green-900 "
      >Approved</span
    >
    <span
      v-if="this.approve.approval.status == 2"
      class="badge badge-outline badge-md badge-error"
      >Rejected</span
    >
  </td>

  <td>
    <button @click="clickReject()" class="btn btn-ghost">
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
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </button>
  </td>
  <td>
    <button @click="clickApprove()" class="btn btn-ghost">
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
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </button>
  </td>
</template>

<script>
export default {
  props: ["product", "approve"],
  data() {
    return {};
  },
  mounted() {},
  computed: {},
  methods: {
    clickReject() {
      let value = {
        prodID: this.product.prodID,
        status: 0,
      };
      this.$store.dispatch("updateApproveProduct", value);
    },
    clickApprove() {
      let value = {
        prodID: this.product.prodID,
        status: 1,
      };
      this.$store.dispatch("updateApproveProduct", value);
    },
  },
  created() {
    console.log("created");
  },
};
</script>
