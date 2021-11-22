<template>
  <div
    class="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
    id="modal-id"
  >
    <div class="absolute bg-black opacity-80 inset-0 z-0"></div>
    <div
      class="w-full  max-w-lg p-2 relative mx-auto my-auto rounded-xl shadow-lg  bg-white "
    >
      <!--content-->
      <div class="">
        <!--body-->
        <div class="text-center px-5 py-2 flex-auto justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            :class="`text-${this.alert.type}`"
            class="w-8 h-8 -m-1 flex items-center  mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h2 class="text-xl font-bold py-4 ">{{ this.alert.message }}</h2>
        </div>
        <!--footer-->
        <div class="mb-2 p-3 text-center space-x-4 md:block">
          <button
            @click="closeAlertCard"
            :class="`bg-${this.alert.type} border-${this.alert.type} `"
            class="mb-2 md:mb-0 border px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:text-black"
          >
            ตกลง
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["alert"],
  data() {
    return {
      timeout: null,
    };
  },
  computed: {
    typeClass() {
      return `bg-${this.alert.type}`;
    },
  },
  methods: {
    closeAlertCard() {
      this.timeout = setTimeout(() => {
        this.removeAlertCard(this.alert);
      }, 0);
    },
    ...mapActions(["removeAlertCard"]),
  },
  async created() {
    this.timeout = setTimeout(() => {
      this.removeAlertCard(this.alert);
    }, 5000);
  },
};
</script>
