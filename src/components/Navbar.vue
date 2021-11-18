<template>
  <nav class="bg-base-300 min-h-16 fixed z-10 top-0">
    <div
      class="w-screen flex min-h-16 justify-between items-center shadow-lg text-black border-b-2 border-primary-focus py-2 px-4"
    >
      <div class="flex px-2 mx-2 ">
        <router-link to="/">
          <img src="../assets/images/studart.png" class="h-12" />
        </router-link>
      </div>

      <div class="flex items-center">
        <div class="flex mx-2 lg:hidden">
          <div class="dropdown dropdown-end">
            <div tabindex="0" class="">
              <button
                class="block lg:hidden cursor-pointer ml-auto relative w-8 h-8"
              >
                <svg
                  class="fill-current text-base-content"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>
            <ul
              tabindex="0"
              class="p-6 shadow menu dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <router-link to="/">หน้าหลัก</router-link>
              </li>
              <li>
                <router-link to="/products">ผลงานทั้งหมด</router-link>
              </li>
              <li>
                <router-link to="/addproduct">สร้างผลงาน</router-link>
              </li>
              <li v-if="this.$store.getters.isAuthenticated">
                <router-link
                  :to="{
                    name: 'Profile',
                    params: { username: this.current_username },
                  }"
                  >ข้อมูลส่วนตัว</router-link
                >
              </li>
              <div class="divider"></div>
              <li>
                <router-link
                  to="/login"
                  v-if="!this.$store.getters.isAuthenticated"
                >
                  เข้าสู่ระบบ
                </router-link>
              </li>
              <li class="">
                <router-link
                  to="/register"
                  v-if="!this.$store.getters.isAuthenticated"
                  class="bg-primary hover:bg-base-200 text-lg"
                >
                  ลงทะเบียน
                </router-link>
              </li>
              <li v-if="this.$store.getters.isAuthenticated">
                <button
                  @click="logout"
                  class="btn btn-md bg-red-500 hover:bg-red-300 text-lg text-white"
                >
                  ออกจากระบบ
                </button>
              </li>
            </ul>
          </div>
        </div>

        <!-- main desktop -->
        <div class="hidden mx-2 lg:flex ">
          <div class="flex items-stretch">
            <router-link to="/"
              ><button
                class="btn btn-ghost btn-md rounded-btn text-lg font-normal mx-2"
              >
                หน้าหลัก
              </button></router-link
            >
            <router-link to="/products"
              ><button
                class="btn btn-ghost btn-md rounded-btn text-lg font-normal mx-2"
              >
                ผลงาน
              </button></router-link
            >
            <router-link to="/addproduct"
              ><button
                class="btn btn-ghost btn-md rounded-btn text-lg font-normal mx-2"
              >
                สร้างผลงาน
              </button></router-link
            >
            <router-link to="/login" v-if="!this.$store.getters.isAuthenticated"
              ><button
                class="btn btn-ghost btn-md rounded-btn text-lg font-normal mx-2"
              >
                เข้าสู่ระบบ
              </button></router-link
            >
            <router-link
              to="/register"
              v-if="!this.$store.getters.isAuthenticated"
              ><button class="btn btn-md btn-primary rounded-btn text-lg mx-2">
                ลงทะเบียน
              </button></router-link
            >

            <!-- profile after login  -->
            <div
              class="flex items-center mr-2"
              v-if="this.$store.getters.isAuthenticated"
            >
              <div class="dropdown dropdown-end">
                <div tabindex="0" class="">
                  <button class="block cursor-pointer ml-auto relative ">
                    <img
                      v-if="this.$store.getters.getCurrentUser.imageURL"
                      :src="this.$store.getters.getCurrentUser.imageURL"
                      class="rounded-full object-cover w-8 h-8"
                    />

                    <svg
                      v-if="!this.$store.getters.getCurrentUser.imageURL"
                      viewBox="0 0 32 32"
                      class="fill-current cursor-pointer text-black hover:text-gray-500 w-8 h-8"
                      width="100%"
                      height="100%"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      style="display: block; fill: currentcolor;"
                    >
                      <path
                        d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"
                      ></path>
                    </svg>
                  </button>
                </div>
                <ul
                  tabindex="0"
                  class="p-6 shadow menu dropdown-content bg-base-100 rounded-box w-52 "
                >
                  <li>
                    <p>
                      {{ this.$store.getters.getCurrentUser.username }}
                    </p>
                  </li>
                  <div class="divider"></div>
                  <li>
                    <router-link to="/">หน้าหลัก</router-link>
                  </li>
                  <li>
                    <router-link to="/products">ผลงานทั้งหมด</router-link>
                  </li>
                  <li>
                    <router-link to="/addproduct">สร้างผลงาน</router-link>
                  </li>
                  <li>
                    <router-link
                      :to="{
                        name: 'Profile',
                        params: { username: this.current_username },
                      }"
                      >ข้อมูลส่วนตัว</router-link
                    >
                  </li>

                  <div class="divider"></div>
                  <li>
                    <button
                      @click="logout"
                      class="btn btn-md bg-red-500 hover:bg-red-300 text-lg text-white"
                    >
                      ออกจากระบบ
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <!-- end profile after login -->
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Navbar",
  component: {
    mapGetters,
  },
  data() {
    return {
      defaultImg: "../assets/images/user.png",
    };
  },

  computed: {
    current_username() {
      return this.$store.getters.getCurrentUsername;
    },

    ...mapGetters(["getCurrentUser"]),
  },
  methods: {
    logout() {
      this.$store.dispatch("logout").then(this.$router.push("/"));
    },
    gotoProfile() {
      this.$router.push(`/profile/${localStorage.getItem("username")}`);
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

.router-link-active {
  @apply underline;
}
</style>
