<template>
  <div
    class="h-screen w-full flex flex-col items-center justify-center bg-teal-lightest font-sans"
  >
    <AlertMessage
      v-for="alert in this.getAlertCard"
      :key="alert.id"
      :alert="alert"
    ></AlertMessage>
  </div>
  <!-- <div class="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white m-4">
    <div class="flex flex-col min-h-full">
      <div class="px-6 py-4 border-b">
        <div class="text-xl text-center">Block</div>
        <div class="text-xl text-center">{{ this.getAlertCard.message }}</div>
      </div>
      <div class="px-6 py-10 flex-grow">
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div class="px-5 py-3 border-t bg-gray-100 flex justify-end">
        <button
          class="btn-gradient-default text-gray-600 font-medium text-sm py-1 px-5 rounded mr-3"
        >
          Cancel
        </button>
        <button
          class="btn-gradient-danger text-white font-medium text-sm py-1 px-5 rounded"
        >
          Block
        </button>
      </div>
    </div>
  </div> -->
</template>

<script>
import AlertCard from "./AlertMessage.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    AlertCard,
  },
  computed: {
    ...mapGetters(["getAlertCard"]),
  },
};
</script>
