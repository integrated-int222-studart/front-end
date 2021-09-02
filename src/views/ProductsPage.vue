<template>
  <div class="products">
    <div class="product-example mt-10 bg-base-100">
      <div class="">
        <p class="text-3xl font-bold">ตัวอย่างผลงาน</p>
      </div>
    </div>
  </div>

  <!--another grid temp-->
  <div class="md:flex md:items-center  p-2 mt-10">
    <div class="md:flex flex-col md:flex-row md:min-h-screen w-full">
      <div class="flex flex-col w-full md:w-64 text-gray-700 bg-white ">
        <div
          class="flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between"
        >
          <a
            href="#"
            class="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
            >ค้นหา</a
          >
          <button
            class="rounded-lg focus:outline-none focus:shadow-outline"
          >
            <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
          </button>
          <button
            class="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
          >
            <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
              <path
                x-show="!open"
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
              <path
                x-show="open"
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <nav class="flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto">
          <a
            class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-200 rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            href="#"
            >Blog</a
          >
          <a
            class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            href="#"
            >Portfolio</a
          >
          <a
            class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            href="#"
            >About</a
          >
          <a
            class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            href="#"
            >Contact</a
          >
          <div class="relative">
            <button
              class="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:block hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            >
              <span>Dropdown</span>
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </nav>
      </div>
      <main class="grid place-items-center items-start min-h-screen">
        <div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <div class="bg-gray-100 flex justify-center items-center ">
              <div
                class="w-80 cursor-pointer p-3 shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl duration-500"
              >
                <img
                  class="object-cover w-80 h-80 "
                  src="https://images.unsplash.com/photo-1630429326301-54f82cda12b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                  alt=""
                />
                <div class="flex justify-between p-4 bg-white">
                  <p class="mt-4 ">Planta Minimalista</p>
                  <p class="mt-4 ">250 บาท</p>
                </div>
              </div>
            </div>
            <!--2-->
            <div class="bg-gray-100 flex justify-center items-center">
              <div
                class="w-80 cursor-pointer p-3 shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl duration-500"
              >
                <img
                  class="object-cover w-80 h-80 "
                  src="https://images.unsplash.com/photo-1463320898484-cdee8141c787?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  alt=""
                />
                <div class="flex justify-between p-4 bg-white">
                  <p class="mt-4 ">Planta Minimalista</p>
                  <p class="mt-4 ">250 บาท</p>
                </div>
              </div>
            </div>
            <!--3-->
            <div class="bg-gray-100 flex justify-center items-center">
              <div
                class="w-80 cursor-pointer p-3 shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl duration-500"
              >
                <img
                  src="https://images.unsplash.com/photo-1630384636889-293f0213abb6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80"
                  class="object-cover w-80 h-80 "
                  alt=""
                />
                <div class="flex justify-between p-4 bg-white">
                  <p class="mt-4 ">Planta Minimalista</p>
                  <p class="mt-4 ">250 บาท</p>
                </div>
              </div>
            </div>
            <!---->
            <div class="bg-gray-100 flex justify-center items-center">
              <div
                class="w-80 cursor-pointer p-3 shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl duration-500"
              >
                <img
                  class="object-cover w-80 h-80 "
                  src="https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt=""
                />
                <div class="flex justify-between p-4 bg-white">
                  <p class="mt-4 ">Planta Minimalista</p>
                  <p class="mt-4 ">250 บาท</p>
                </div>
              </div>
            </div>
            <div class="bg-gray-100 flex justify-center items-center">
              <div
                class="w-80 cursor-pointer p-3 shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl duration-500"
              >
                <img
                  src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  class="object-cover w-80 h-80 "
                  alt=""
                />
                <div class="flex justify-between p-4 bg-white">
                  <p class="mt-4 ">Planta Minimalista</p>
                  <p class="mt-4 ">250 บาท</p>
                </div>
              </div>
            </div>
            <Product/>
            <div class="bg-gray-100 flex justify-center items-center">
              <div
                class="w-80 cursor-pointer p-3 shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl duration-500"
              >
                <img
                  class="object-cover w-80 h-80 "
                  src="https://images.unsplash.com/photo-1630497971337-737a28a697d6?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
                <div class="flex justify-between p-4 bg-white">
                  <p class="mt-4 ">Planta Minimalista</p>
                  <p class="mt-4 ">250 บาท</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import product from "../components/Product.vue";
export default {
  name: "Products",
  components: {
    product,
  },
};
</script>
