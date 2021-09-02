<template>
  <div class="navbar shadow-lg text-black border-b-4">
    <div class="flex-1 px-2 mx-2">
      <span class="text-2xl font-bold "> Studart </span>
    </div>
    <div class="flex-none hidden  mx-2 lg:flex">
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
          ><button
            class="btn btn-md btn-wide btn-primary rounded-btn text-lg mx-2 text-black"
          >
            ลงทะเบียน
          </button></router-link
        >
        <router-link to="/profile">
          <div class="avatar">
            <div class="rounded-full w-14 h-14">
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
</template>

<script>
export default {
  name: "Navbar",
};
</script>
