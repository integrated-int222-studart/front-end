<template>
  <div class="product  ">
    <div
      class="cursor-pointer p-3 bg-white shadow-lg transform transition duration-500 hover:scale-105"
      @click="gotoProductDetail(product.prodID)"
    >
      <div class=" h-full w-full aspect-w-1 aspect-h-1 border-2 ">
        <img :src="this.product.images[0].url" class="object-cover " alt="" />
      </div>

      <div class="p-2 mt-3 flex text-left justify-between bg-white">
        <div>
          <p class="text-lg font-semibold text-gray-900 mb-0">
            {{ product.prodName }}
          </p>
          <p class="text-md text-gray-800 mt-0">{{ product.price }} บาท</p>
        </div>
        <div class="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 group-hover:opacity-70"
            fill="none"
            viewBox="0 0 24 24"
            stroke="gray"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </div>
      </div>
      <!-- <div class="flex justify-between p-2 mt-3 bg-white ">
        <p class="">{{ product.prodName }}</p>
        <p class="">{{ product.price }}</p>
      </div> -->
    </div>
    <slot></slot>
    <!-- <div @click="this.delete">
      <button>Delete</button>
    </div> -->
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
    return {
      url: "http://13.76.182.102:3000/upload/photo/1",
    };
  },
  computed: {
    // product,
  },
  methods: {
    delete() {
      this.$store.dispatch("removeProduct", this.product);
    },
    gotoProductDetail(prodid) {
      this.$router.push(`/productdetail/${prodid}`);
    },
  },
};
</script>
