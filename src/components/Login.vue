<template>
  <div class="login w-full flex flex-wrap my-10">
    <!-- Login Section -->
    <div class="container mx-auto px-6">
      <div class="grid place-items-center items-start min-h-screen">
        <div class="flex flex-col justify-center w-4/12">
          <p class="text-3xl font-bold">เข้าสู่ระบบ</p>
          <form class="flex flex-col pt-3" onsubmit="event.preventDefault();">
            <div class="flex flex-col pt-4">
              <label for="email" class="text-lg">Email</label>
              <input
                v-model="this.userLogin.email"
                type="email"
                id="email"
                placeholder="your@email.com"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div class="flex flex-col pt-4">
              <label for="password" class="text-lg">Password</label>
              <input
                v-model="this.userLogin.password"
                type="password"
                id="password"
                placeholder="Password"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <button @click="submit" class="btn btn-primary mt-8">Log IN</button>
          </form>
          <div class="text-center pt-12 pb-12">
            <p>
              Don't have an account?
              <a href="register.html" class="underline font-semibold"
                >Register here.</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userLogin: {
        email: "",
        password: "",
      },
      checkValidate: {},
    };
  },
  methods: {
    submit() {
      this.$store.dispatch("login", this.userLogin);
      console.log("Go to login vuex",this.userLogin);
    },
  },
};
</script>
