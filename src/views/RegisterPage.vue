<template>
  <div class="register-page">
    <div class="w-full flex flex-wrap my-10">
      <div class="container mx-auto px-6">
        <div class="grid place-items-center items-start">
          <div class="flex flex-col justify-center md:w-6/12 lg:w-4/12">
            <register></register>
            <div class="text-center pt-12 pb-12">
              <p>
                เป็นสมาชิกแล้ว?
                <router-link to="/login">
                  <p class="underline font-semibold">
                    เข้าสู่ระบบ
                  </p>
                </router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Register from "../components/Register.vue";

export default {
  components: { Register },
};
</script>
