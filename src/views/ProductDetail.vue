<template>
  <div class="product-detail">
    <div class="">
      <p class="text-4xl font-bold">Product Details</p>
      <!-- <pre>{{ this.productByid }}</pre> -->
      <p>{{ $route.params.id }}</p>
    </div>
    <!-- component -->
    <main class="p-2 m-2 md:p-8 md:m-6">
      <div class="container mx-auto px-6">
        
        <div class="md:flex items-center ">
          <div class=" h-full w-full md:w-1/2 ">
              <img
                src="https://source.unsplash.com/random/"
                class="object-cover rounded-md mx-auto min-w-xs max-w-xs min-h-80 max-h-80 h-full w-full "
                alt=""
              />
              <!-- min-w-xs min-h-80 max-w-xs max-h-80 -->
          </div>
          <div class="w-full md:w-1/2 md:ml-10">
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
          </div>
        </div>
        
        
        <div class="mt-16">
          <h3 class="text-gray-600 text-2xl font-medium">More Products</h3>

          <main class="grid place-items-center items-start ">
            <div>
              <div
                class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
              ></div>
            </div>
          </main>
        </div>

      </div>
    </main>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  props: ["id"],
  data() {
    return {
      productByid: {},
    };
  },
  methods: {},
  //   async created() {
  //     try {
  //       const res = await axios.get(`http://localhost:3000/product/${this.id}`);
  //       this.productByid = res.data;
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   },
};
</script>

