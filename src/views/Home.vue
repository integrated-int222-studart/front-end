<template>
  <div class="home">
    <!-- component -->
    <div class="w-full">
      <div class="flex max-h-screen sm:h-screen md:h-screen">
        <div
          class="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2"
        >
          <div>
            <span class="text-2xl font-semibold text-gray-800 md:text-4xl"
              >Stud<span class="text-primary">art</span></span
            >
            <h1 class="py-5 text-5xl font-semibold text-gray-800 md:text-6xl">
              แหล่งรวมผลงานศิลปะของ<span class="text-primary"
                >นักเรียน/นักศึกษา</span
              >
            </h1>

            <p class="mt-2 text-sm text-black md:text-lg">
              แหล่งรวมผลงานศิลปะของ
              <strong>นักเรียน/นักศึกษา</strong>
              เพื่อสนับสนุนผู้มีความสามารถด้านศิลปะ
            </p>
            <div class="flex space-x-3 justify-center lg:justify-start mt-6">
              <router-link to="/products">
                <button
                  href="#"
                  class="flex items-center justify-center border border-transparent rounded-md text-lg btn btn-primary shadow-lg font-bold"
                >
                  ดูผลงาน
                </button>
              </router-link>
              <router-link to="/addproduct">
                <button
                  href="#"
                  class="flex items-center justify-center border border-transparent rounded-md text-lg btn btn-primary shadow-lg font-bold"
                >
                  สร้างผลงาน
                </button>
              </router-link>
            </div>
          </div>
        </div>
        <div class="hidden lg:block lg:w-1/2">
          <div class="h-full ">
            <img
              class="w-full object-cover lg:w-full lg:h-full"
              src="../assets/images/painting_girl.png"
              alt="Painting Girl"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- about -->
    <section
      class="bg-red-50 "
      style="background-image: ../assets/images/painting_girl.png"
    >
      <div class="max-w-5xl px-6 py-16 mx-auto">
        <div class="">
          <p class="text-2xl font-semibold text-gray-800 md:text-4xl">
            เกี่ยวกับ
          </p>
        </div>

        <div class="grid gap-8 mt-10 grid-cols-1 md:grid-cols-3">
          <div class="px-6 py-8 overflow-hidden bg-white rounded-md shadow-md ">
            <h2 class="text-xl font-medium text-gray-800">ศิลปะ</h2>
            <p class="mt-4 text-gray-400 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac
              volutpat, viverra magna risus aliquam massa.
            </p>
          </div>

          <div class="px-6 py-8 overflow-hidden bg-white rounded-md shadow-md">
            <h2 class="text-xl font-medium text-gray-800">การศึกษา</h2>
            <p class="mt-4 text-gray-400 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac
              volutpat, viverra magna risus aliquam massa.
            </p>
          </div>

          <div class="px-6 py-8 overflow-hidden bg-white rounded-md shadow-md">
            <h2 class="text-xl font-medium text-gray-800">แบ่งปัน</h2>
            <p class="mt-4 text-gray-400">
              แบ่งปันผลงานศิลปะที่ทรงคุณค่าให้กับผู้อื่นได้ชื่นชม
              รวมถึงสามารถมีส่วนร่วมในการสนับสนุนผลงานของ
              <b>นักเรียน/นักศึกษา </b>หรือบุคคลทั่วไป
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- add more -->
    <div class="product-example mt-10 p-10">
      <div class="">
        <p class="text-2xl font-semibold text-gray-800 md:text-4xl">
          ตัวอย่างผลงาน
        </p>
      </div>
      <!--card product 1-->
      <div class=" container mx-auto mt-4">
        <main class="items-center justify-center">
          <div
            class="grid grid-cols-1 md:grid-cols-3 w-full h-full items-center gap-3"
          >
            <MoreProduct :size="3"></MoreProduct>
          </div>
        </main>
      </div>
    </div>
    <!-- about -->
    <section class="bg-red-50 ">
      <div class="max-w-5xl px-6 py-16 mx-auto">
        <div class="">
          <p class="text-2xl font-semibold text-gray-800 md:text-4xl">
            ผู้จัดทำ
          </p>
        </div>

        <div class="grid gap-8 mt-10 grid-cols-1 md:grid-cols-3">
          <div class="px-6 py-8 overflow-hidden bg-white rounded-md shadow-md">
            <div class="w-full aspect-w-1 aspect-h-1 shadow-md">
              <img class="object-cover" src="../assets/images/Tanawat.jpg" />
            </div>
            <h2 class="mt-3 text-xl font-bold text-gray-800">กาย</h2>
            <p class="mt-4 text-gray-400 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac
              volutpat, viverra magna risus aliquam massa.
            </p>
          </div>
          <div class="px-6 py-8 overflow-hidden bg-white rounded-md shadow-md">
            <div class="w-full aspect-w-1 aspect-h-1 shadow-md">
              <img
                class="w-full h-full object-cover "
                src="../assets/images/teinlama.jpg"
              />
            </div>
            <h2 class="mt-3 text-xl font-bold text-gray-800">เทียน</h2>
            <p class="mt-4 text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac
              volutpat, viverra magna risus aliquam massa.
            </p>
          </div>
          <div class="px-6 py-8 overflow-hidden bg-white rounded-md shadow-md ">
            <div class="w-full aspect-w-1 aspect-h-1 shadow-md">
              <img
                class="object-cover"
                src="../assets/images/painting_girl.png"
                alt="Painting Girl"
              />
            </div>

            <h2 class="mt-3 text-xl font-bold text-gray-800">ต้า</h2>
            <p class="mt-4 text-gray-400 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac
              volutpat, viverra magna risus aliquam massa.
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- footer -->
    <footer class="flex items-center justify-center bg-base-300">
      <div class="md:w-11/12 w-full px-4 text-white flex flex-col">
        <div class="flex flex-col">
          <div class="flex mt-6 mb-6 flex-row justify-between items-center">
            <div class="">
              <img src="../assets/images/logo-white.png" class="h-40" />
            </div>
            <div class="flex flex-row">
              <a
                class="p-4 md:block cursor-pointer text-gray-600 hover:text-white uppercase "
                >เกี่ยวกับ</a
              >
              <a
                class="p-4 md:block cursor-pointer text-gray-600 hover:text-white uppercase"
                >ผลงานทั้งหมด</a
              >
              <a
                class="p-4 md:block cursor-pointer text-gray-600 hover:text-white uppercase"
                >สร้างผลงาน</a
              >
              <a
                class="p-4 md:block cursor-pointer text-gray-600 hover:text-white uppercase"
                >สมาชิก</a
              >
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import MoreProduct from "../components/MoreProduct.vue";
export default {
  name: "Home",
  components: {
    MoreProduct,
  },
};
</script>
