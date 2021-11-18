<template>
  <div>
    <!--Nav-->
    <AdminNavbar />

    <main class="bg-gray-800">
      <div class="flex flex-col md:flex-row">
        <AdminSidebar />
        <div class="main-content flex-1 bg-gray-100 pb-24 md:pb-5">
          <div class="bg-gray-800 pt-3">
            <div
              class="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white"
            >
              <h3 class="font-bold pl-2">Admin Approval Table</h3>
            </div>
          </div>
          <div class="m-2 shadow-2xl">
            <AdminTable />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import AdminNavbar from "../../components/adminComponent/adminNavbar.vue";
import AdminSidebar from "../../components/adminComponent/adminSidebar.vue";
import AdminTable from "../../components/adminComponent/adminTable.vue";

export default {
  components: {
    AdminNavbar,
    AdminSidebar,
    AdminTable,
  },
  mounted() {},
  computed: {
    adminProfile() {
      return this.$store.getters.getCurrentAdmin;
    },
  },
  methods: {},
};
</script>
