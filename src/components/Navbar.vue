<template>
  <nav class="bg-base-300 min-h-16 fixed z-10 top-0">
    <div
      class="w-screen flex min-h-16 justify-between items-center shadow-lg text-black border-b-4 border-primary-focus py-2 px-4"
    >
      <div class="flex px-2 mx-2 ">
        <router-link to="/">
          <span class="text-2xl font-bold "> Studart </span>
        </router-link>
      </div>
      <div class="flex mx-2 lg:hidden">
        <button class="block lg:hidden cursor-pointer ml-auto relative w-8 h-8">
          <svg
            class="fill-current text-base-content"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="flex items-center">
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
            <router-link to="/login"
              ><button
                class="btn btn-ghost btn-md rounded-btn text-lg font-normal mx-2"
              >
                เข้าสู่ระบบ
              </button></router-link
            >
            <router-link to="/register"
              ><button class="btn btn-md btn-primary rounded-btn text-lg mx-2">
                ลงทะเบียน
              </button></router-link
            >
          </div>
        </div>

        <div class="hidden lg:flex  px-2 mx-2 ">
          <router-link to="/profile">
            <button class="block cursor-pointer ml-auto relative w-8 h-8">
              <svg
                viewBox="0 0 32 32"
                class="fill-current cursor-pointer text-black hover:text-gray-500"
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style="display: block; height: 100%; width: 100%; fill: currentcolor;"
              >
                <path
                  d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"
                ></path>
              </svg>
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
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
</style>
