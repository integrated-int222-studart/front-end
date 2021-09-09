<template>
  <div class="product bg-gray-100 justify-center items-center">
    <!-- <div class="h-full w-full cursor-pointer p-3 shadow-lg overflow-hidden"> -->
    <!-- class="object-cover w-80 h-80 " -->

    <!-- <img
        class="object-cover mx-auto min-w-xs min-h-80 max-w-xs max-h-80 h-full w-full "
        :src="this.product.imgurl"
        onerror="this.src='https://source.unsplash.com/random'"
        alt=""
      /> -->
    <!-- <div class="flex justify-between p-2 mt-6 bg-white">
        <p class="mt-4 ">{{ product.prodName }}</p>
        <p class="mt-4 ">{{ product.prodID }}</p>
      </div> -->
    <!-- </div> -->

    <!-- </div> -->
    <main class="">
      <div class="container">
        <div class="md:flex items-center ">
          <div class=" h-full w-full ">
            <img
              src="https://source.unsplash.com/random/"
              class="object-cover rounded-md mx-auto  h-full w-full "
              alt=""
            />
          </div>
          <!-- <div class="w-full md:w-1/2 md:ml-10">
            <div class="mb-10 md:text-left">
              <h1 class="font-bold uppercase text-2xl mb-5">
                Mens's Ragged <br />Waterproof Jacket
              </h1>
              <p class="text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Eos,
                voluptatum dolorum! Laborum blanditiis consequatur, voluptates,
                sint enim fugiat saepe, dolor fugit, magnam explicabo eaque quas
                id quo porro dolorum facilis...
              </p>
            </div>
          </div> -->
        </div>

        <!-- <div class="mt-16">
          <h3 class="text-gray-600 text-2xl font-medium">More Products</h3>

          <main class="grid place-items-center items-start ">
            <div>
              <div
                class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
              ></div>
            </div>
          </main>
        </div> -->
      </div>
    </main>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      default: "",
    },
  },
  data() {
    return {};
  },
  methods: {
    getRandomNumber() {
      return Math.floor(Math.random() * 1000);
    },
  },
};
</script>
