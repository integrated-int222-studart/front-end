<template>
  <nav
    class="min-h-18 bg-gray-800 pt-2  border-b-2 border-black md:pt-1 mt-0 h-auto fixed w-full z-20 top-0  py-2 px-4"
  >
    <div class="flex flex-wrap items-center">
      <div
        class="flex flex-shrink md:w-1/3 pt-2 justify-center md:justify-start text-white"
      >
        <div class="flex px-2 mx-2 relative">
          <router-link to="/admin/adminApprovePage">
            <button class="btn btn-ghost text-white">
              <img src="../../assets/images/logo-white.png" class="h-12" />
            </button>
          </router-link>
        </div>
        <a href="#">
          <span class="text-xl pl-2"><i class="em em-grinning"></i></span>
        </a>
      </div>

      <div
        class="flex flex-1 md:w-1/3 justify-center md:justify-start text-white px-2"
      ></div>

      <div
        class="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end"
      >
        <ul
          class="list-reset flex justify-between flex-1 md:flex-none items-center"
        >
          <li class="flex-1 md:flex-none md:mr-3">
            <div class="relative inline-block">
              <p class=" text-white font-bold">
                Admin Page
              </p>
            </div>
          </li>
          <li class="flex-1 md:flex-none md:mr-3">
            <div class="relative inline-block">
              <button
                @click="logout"
                class="btn btn-md bg-red-500 hover:bg-red-300 text-lg text-white"
              >
                ออกจากระบบ
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  component: {},
  data() {
    return {};
  },

  computed: {},
  methods: {
    logout() {
      this.$store
        .dispatch("logoutAdmin")
        .then(this.$router.push("/admin/login"));
    },
  },
};
</script>

<style scoped>
.btn-md {
  height: 2.5rem;
  line-height: 1.25rem;
  line-height: 2;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  min-height: 2rem;
}
.min-h-18 {
  min-height: 4.25rem;
}
.router-link-active {
  @apply underline;
}
</style>
