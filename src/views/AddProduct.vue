<template>
  <div class="add-product">
    <div class="heading mt-10">
      <p class="text-3xl font-bold">สร้างผลงาน</p>
    </div>
    <!-- add form -->
    <main class="p-2 m-2 md:p-4 md:m-4">
      <form-input></form-input>
    </main>
  </div>
</template>

<script>
import FormInput from "../components/FormInput.vue";

export default {
  data() {
    return {};
  },
  components: {
    FormInput,
  },
};
</script>
