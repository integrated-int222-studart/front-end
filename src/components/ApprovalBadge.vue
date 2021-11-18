<template>
  <div class="text-sm italic text-gray-800 m-2 -ml-1">
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
    <span v-if="this.approve.approval.status == 2" class=""
      >*Please Delete Product</span
    >
  </div>
</template>
<script>
export default {
  props: ["approve"],
};
</script>
