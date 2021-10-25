<template>
  <div class="register-page">
    <!-- <p class="text-3xl font-bold">ลงทะเบียน</p> -->

    <!--  -->
    <div class="w-full flex flex-wrap my-10">
      <div class="container mx-auto px-6">
        <div class="grid place-items-center items-start min-h-screen">
          <div class="flex flex-col justify-center md:w-6/12 lg:w-4/12">
            <register></register>
            <div class="text-center pt-12 pb-12">
              <p>
                Already have an account?
                <router-link to="/login">
                  <p class="underline font-semibold">
                    Login here.
                  </p>
                </router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
  </div>
</template>

<script>
import Register from "../components/Register.vue";

export default {
  components: { Register },
};
</script>
