<template>
  <div class="notification-message ">
    <div class="mb-4">
      <div
        :class="typeClass"
        class="flex w-full text-left shadow-md rounded-lg overflow-hidden mx-auto p-2"
      >
        <div :class="typeClass" class="w-2"></div>
        <div
          class="w-full flex justify-between items-start px-2 py-2 opacity-80 text-black"
        >
          <div class="flex flex-col ">
            <label class="text-black font-bold">{{
              notification.message
            }}</label>
            <p class="text-black ">
              <!-- <pre>{{ notification }}</pre> -->
            </p>
          </div>

          <button @click="closeNotification">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  props: ["notification"],
  data() {
    return {
      timeout: null,
    };
  },
  computed: {
    ...mapGetters(["getNotificationList"]),

    typeClass() {
      return `bg-${this.notification.type}`;
    },
  },
  methods: {
    closeNotification() {
      this.timeout = setTimeout(() => {
        this.removeNotification(this.notification);
      }, 0);
    },
    ...mapActions(["removeNotification"]),
  },
  async created() {
    this.timeout = setTimeout(() => {
      this.removeNotification(this.notification);
    }, 4000);
  },
};
</script>
