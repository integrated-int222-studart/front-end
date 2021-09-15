<template>
  <div class="image-upload">
    <!-- <div class="w-full h-64">
              <img
                class="h-full w-full rounded-md object-cover max-w-lg mx-auto"
                src="https://images.unsplash.com/photo-1600551008016-8bef86c12cc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80"
                alt="Profile"
              />
            </div> -->
    <div v-if="!preview">
      <label
        class="border-2 border-black flex flex-col aspect-w-1 aspect-h-1 mx-auto items-center justify-center cursor-pointer rounded-lg shadow-lg"
        for="my-file"
      >
        <div class="flex justify-center items-center">
          <svg
            class="w-8 h-8"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"
            />
          </svg>
          <span class="text-base font-medium leading-normal"
            >Upload a Image</span
          >
        </div>
      </label>
      <input
        type="file"
        accept="image/*"
        @change="previewImage"
        class="hidden form-control-file"
        id="my-file"
      />
    </div>

    <!--  -->
    <div v-if="preview">
      <div
        class="border-2 border-black aspect-w-1 aspect-h-1 flex flex-col mx-auto items-center justify-center shadow-lg"
      >
        <img :src="preview" class="object-cover mx-auto w-full h-full" />
      </div>
      <label
        class="flex flex-col items-center px-3 py-1 mt-2 bg-white text-blue rounded-lg shadow-lg tracking-wide border border-blue cursor-pointer hover:bg-blue hover:text-white"
        for="my-file"
      >
        <svg
          class="w-6 h-6"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"
          />
        </svg>
        <span class="text-sm leading-normal">Upload new Image</span>
      </label>
      <input
        type="file"
        accept="image/*"
        @change="previewImage"
        class="hidden form-control-file"
        id="my-file"
      />
    </div>
  </div>
</template>

<script>
// import axios from 'axios';

export default {
  data() {
    return {
      preview: null,
      image: null,
      preview_list: [],
      image_list: [],
    };
  },
  methods: {
    previewMultiImage(event) {
      var input = event.target;
      var count = input.files.length;
      var index = 0;
      if (input.files) {
        while (count--) {
          var reader = new FileReader();
          reader.onload = (e) => {
            this.preview_list.push(e.target.result);
          };
          this.image_list.push(input.files[index]);
          reader.readAsDataURL(input.files[index]);
          index++;
        }
      }
    },
    previewImage(event) {
      var input = event.target;
      if (input.files) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.preview = e.target.result;
        };
        this.image = input.files[0];
        reader.readAsDataURL(input.files[0]);
      }
    },
  },
};
</script>
