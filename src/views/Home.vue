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
    <div class="divider mx-12 "></div>
    <section
      class="my-10"
      style="background-image: ../assets/images/painting_girl.png"
    >
      <div class="max-w-5xl px-6 py-16 mx-auto">
        <div class="">
          <p class="text-2xl font-semibold text-gray-800 md:text-4xl">
            เกี่ยวกับ
          </p>
        </div>

        <div class="grid gap-8 mt-10 grid-cols-1 md:grid-cols-3">
          <div class="px-6 py-8 overflow-hidden bg-white rounded-md shadow-lg ">
            <div class="w-full aspect-w-1 aspect-h-1 shadow-lg">
              <img
                class="object-cover"
                src="../assets/images/Left_hander-rafiki.png"
              />
            </div>
            <h2 class="mt-4 text-xl font-bold text-gray-800">ศิลปะ</h2>
            <p class="mt-4 ttext-gray-700">
              เราเริ่มต้นสร้างเว็บไซต์นี้จากความเชื่อว่าคนทุกคนมักจะมีความศิลปะอยู่ในตัวเอง
              เราจึงต้องการก่อเกิดสังคมทางด้านศิลปะให้ผู้ที่อยากปล่อยของได้มีพื้นที่
            </p>
          </div>

          <div class="px-6 py-8 overflow-hidden bg-white rounded-md shadow-md">
            <div class="w-full aspect-w-1 aspect-h-1 shadow-lg">
              <img
                class="object-cover"
                src="../assets/images/Left_hander-cuate.png"
              />
            </div>
            <h2 class="mt-4 text-xl font-bold text-gray-800">การศึกษา</h2>
            <p class="mt-4 text-gray-700 ">
              เราต้องการสนันสนุน
              <b>นักเรียน/นักศึกษา</b>
              ได้มีพื้นที่ในการปล่อยของเพื่อให้ตนเองโดดเด่นและสามารถพัฒนาทักษะความสามารถต่อในสาขาอาชีพนี้
            </p>
          </div>

          <div class="px-6 py-8 overflow-hidden bg-white rounded-md shadow-md">
            <div class="w-full aspect-w-1 aspect-h-1 shadow-lg">
              <img
                class="object-cover"
                src="../assets/images/Social_share-pana.png"
              />
            </div>
            <h2 class="mt-4 text-xl font-bold text-gray-800">แบ่งปัน</h2>
            <p class="mt-4 text-gray-700">
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
    <section class="my-10">
      <div class="max-w-5xl px-6 py-16 mx-auto">
        <div class="">
          <p class="text-2xl font-semibold text-gray-800 md:text-4xl">
            ผู้จัดทำ
          </p>
        </div>

        <div class="grid gap-8 mt-10 grid-cols-1 md:grid-cols-3">
          <div class="px-6 py-8 overflow-hidden bg-white rounded-md shadow-lg">
            <div class="w-full aspect-w-1 aspect-h-1 shadow-lg">
              <img class="object-cover" src="../assets/images/Tanawat.jpg" />
            </div>
            <h2 class="mt-4 text-xl font-bold text-gray-800">62130500035</h2>
            <h2 class="mt-4 text-xl font-bold text-gray-800">
              ธนวรรธน์ ศรีจรัสตานนท์
            </h2>
            <p class="mt-4 text-gray-400 ">
              Front-end
            </p>
          </div>
          <div class="px-6 py-8 overflow-hidden bg-white rounded-md shadow-lg">
            <div class="w-full aspect-w-1 aspect-h-1 shadow-lg">
              <img
                class="w-full h-full object-cover "
                src="../assets/images/teinProfile.jpg"
              />
            </div>
            <h2 class="mt-4 text-xl font-bold text-gray-800">62130500066</h2>
            <h2 class="mt-4 text-xl font-bold text-gray-800">
              พันธวิศ เห่งนาเลน
            </h2>
            <p class="mt-4 text-gray-400">
              Back-end
            </p>
            <p class="text-gray-400 ">
              Database
            </p>
          </div>
          <div class="px-6 py-8 overflow-hidden bg-white rounded-md shadow-lg ">
            <div class="w-full aspect-w-1 aspect-h-1 shadow-lg">
              <img
                class="object-cover"
                src="../assets/images/tar.jpg"
                alt="Painting Girl"
              />
            </div>
            <h2 class="mt-4 text-xl font-bold text-gray-800">62130500087</h2>
            <h2 class="mt-4 text-xl font-bold text-gray-800">
              ศุภกิตติ์ เทพพงษ์
            </h2>
            <p class="mt-4 text-gray-400 ">
              DevOps
            </p>
            <p class="text-gray-400 ">
              Database
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
              <img src="../assets/images/logo-black.png" class="h-32" />
            </div>
            <div class="flex flex-row text-black">
              <p>INT222 Information Technology Integrated Project ||</p>
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
