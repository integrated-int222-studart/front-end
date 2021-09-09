<template>
  <div class="bg-base-200 min-h-16 fixed">
    <div
      class="w-screen flex justify-between items-center shadow-lg text-black border-b-4 border-red-700 p-2"
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
