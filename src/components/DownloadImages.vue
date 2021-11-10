<template>
  <a
    :href="this.downloadUrl + prod_id"
    class="btn "
    @click.prevent="downloadFile(prod_id, prod_name)"
    download
  >
    <!-- <a @click.prevent="downloadFile(prod_id)" class="btn " download> -->
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
        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
      /></svg
  ></a>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";
export default {
  props: ["prod_id", "prod_name"],
  data() {
    return {
      downloadUrl: `${process.env.VUE_APP_REST_API}/image/download/`,
    };
  },
  methods: {
    async downloadFile(id, name) {
      this.addNotification({
        type: "success",
        message: "ดาวน์โหลดเรียบร้อย",
      });

      axios.defaults.headers.common["Authorization"] =
        "Bearer " + localStorage.getItem("userToken");

      await axios
        .request({
          url: this.downloadUrl + id,
          method: "GET",
          responseType: "blob",
        })
        .then(async (response) => {
          console.log(new Blob([response.data]));
          var fileURL = window.URL.createObjectURL(new Blob([response.data]));
          var fileLink = document.createElement("a");
          fileLink.href = fileURL;
          fileLink.setAttribute("download", `${name}.zip`);
          document.body.appendChild(fileLink);

          fileLink.click();
        });
    },
    ...mapActions(["addNotification"]),
  },
};
</script>
