<template>
  <div>
    <div class="image-upload">
      <div class="col-md-5">
        <div v-if="!preview_list[image_index]">
          <label
            class="border-2 border-black flex flex-col aspect-w-1 aspect-h-1 mx-auto items-center justify-center cursor-pointer rounded-lg shadow-lg"
            for="my-multi-file"
          >
            <div class="flex flex-col justify-center items-center">
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
              <span class="text-base font-medium leading-normal mx-4"
                >Upload a Image(s)</span
              >
            </div>

            <input
              type="file"
              accept="image/*"
              multiple="multiple"
              @change="previewMultiImage"
              class="form-control-file hidden"
              id="my-multi-file"
            />
          </label>
          <p class="text-left text-base font-medium leading-normal italic">
            *recommended aspect ratio 1:1
          </p>
        </div>

        <div
          class="border-2 border-black aspect-w-1 aspect-h-1 flex flex-col mx-auto items-center justify-center shadow-lg"
          v-if="preview_list[image_index]"
        >
          <img
            :src="preview_list[image_index]"
            class="object-contain mx-auto"
          />
        </div>
        <div class="mt-6 grid grid-cols-5 gap-3">
          <template v-if="preview_list.length">
            <div
              v-for="(item, index) in preview_list"
              :key="index"
              @click="image_index = index"
            >
              <div
                class="border-2 border-black aspect-w-1 aspect-h-1 w-full mx-auto items-center justify-center shadow-lg"
              >
                <img :src="item" class="object-cover mx-auto w-full h-full" />

                <div class=" indicator cursor-pointer">
                  <div
                    class="indicator-item badge bg-error text-black"
                    @click="preview_list.splice(index, 1)"
                  >
                    <p class="absolute text-xl">-</p>
                  </div>
                </div>
              </div>
            </div>
          </template>

          <!-- input -->
          <div
            class="border-2 border-black aspect-w-1 aspect-h-1 w-full mx-auto items-center justify-center shadow-lg"
          >
            <label for="my-multi-file" class="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="{2}"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </label>
            <input
              type="file"
              accept="image/*"
              multiple="multiple"
              @change="previewMultiImage"
              class="form-control-file hidden"
              id="my-multi-file"
            />
          </div>
        </div>
      </div>
    </div>
    <pre>{{ this.image_list }}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      preview_list: [],
      image_index: 0,
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
  },
};
</script>
