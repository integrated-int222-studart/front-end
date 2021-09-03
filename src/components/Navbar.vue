<template>
  <div class="bg-base-200 min-h-16 fixed">
    <div
      class="w-screen flex justify-between items-center shadow-lg text-black border-b-4 p-2"
    >
      <div class="flex px-2 mx-2 ">
        <router-link to="/"
          ><span class="text-2xl font-bold "> Studart </span></router-link
        >
      </div>
      <div class="flex flex-no-shrink items-stretch h-12">
        <button
          class="block lg:hidden cursor-pointer ml-auto relative w-14 h-14 p-4 "
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
      <div class="flex-none hidden  mx-2 lg:flex ">
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
          <router-link to="/profile">
            <div class="avatar">
              <div class="rounded-full w-8 h-8">
                <button>
                  <img
                    src="http://daisyui.com/tailwind-css-component-profile-1@56w.png"
                  />
                </button>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>

  <!-- navbar goes here -->
  <nav class="bg-gray-100 fixed inset-x-0">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between">
        <div class="flex space-x-4">
          <!-- logo -->
          <div>
            <a
              href="#"
              class="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
            >
              <svg
                class="h-6 w-6 mr-1 text-blue-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
              <span class="font-bold">Better Dev</span>
            </a>
          </div>

          <!-- primary nav -->
          <div class="hidden md:flex items-center space-x-1">
            <a href="#" class="py-5 px-3 text-gray-700 hover:text-gray-900"
              >Features</a
            >
            <a href="#" class="py-5 px-3 text-gray-700 hover:text-gray-900"
              >Pricing</a
            >
          </div>
        </div>

        <!-- secondary nav -->
        <div class="hidden md:flex items-center space-x-1">
          <a href="" class="py-5 px-3">Login</a>
          <a
            href=""
            class="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
            >Signup</a
          >
        </div>

        <!-- mobile button goes here -->
        <div class="md:hidden flex items-center">
          <button class="mobile-menu-button">
            <svg
              class="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- mobile menu -->
    <div class="mobile-menu hidden md:hidden">
      <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Features</a>
      <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Pricing</a>
    </div>
  </nav>

  <!-- content goes here -->
  <div class="py-32 text-center">
    <h2 class="font-extrabold text-4xl">Navbars in Tailwind!</h2>
  </div>
  <div class="py-32 text-center">
    <h2 class="font-extrabold text-4xl">Navbars in Tailwind!</h2>
  </div>
  <div class="py-32 text-center">
    <h2 class="font-extrabold text-4xl">Navbars in Tailwind!</h2>
  </div>
  <div class="py-32 text-center">
    <h2 class="font-extrabold text-4xl">Navbars in Tailwind!</h2>
  </div>
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
