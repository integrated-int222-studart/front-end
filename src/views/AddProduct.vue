<template>
  <div class="add-product">
    <div class="heading mt-10">
      <p class="text-3xl font-bold">สร้างผลงาน</p>
    </div>
    <!-- add form -->
    <div></div>
    <main class="p-2 m-2 md:p-4 md:m-4">
      <div class="container mx-auto px-6">
        <div class="flex-none lg:flex justify-between items-start  ">
          <div class="h-full w-full p-3 md:p-6">
            <image-upload></image-upload>
          </div>
          <div class="h-full w-full  mt-6 ml-0 md:ml-10 md:mt-0">
            <div class="text-left">
                <form-input></form-input>
            </div>
          </div>
        </div>

      </div>
    </main>
  </div>
</template>

<script>
import FormInput from "../components/FormInput.vue";
import ImageUpload from "../components/ImageUpload.vue";

export default {
  data() {
    return {};
  },
  components: { FormInput, ImageUpload },
};
</script>
