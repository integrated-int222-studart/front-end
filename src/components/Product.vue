<template>
  <div class="product  ">
    <div
      class="cursor-pointer p-3 bg-white shadow-lg transform transition duration-500 hover:scale-105"
    >
      <div
        class=" h-full w-full aspect-w-1 aspect-h-1 shadow-md"
        @click="gotoProductDetail(product.prodID)"
      >
        <img :src="this.product.images[0].url" class="object-cover " alt="" />
      </div>
      <div class="relative text-left text-black px-3 pb-3 mt-6">
        <span class="block font-semibold text-xl truncate">{{
          product.prodName
        }}</span>
        <div class="text-sm italic text-gray-800 m-2 -ml-1">
          <div class="badge badge-ghost">{{ owner_username }} status</div>
          <div class="badge badge-ghost">{{ owner_username }} status</div>
        </div>
        <div class="flex justify-between items-center ">
          <p class="text-2xl text-gray-800 mt-0 ">{{ product.price }} บาท</p>
          <slot name="btn-status">
            <div class="btn btn-ghost">
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
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product", "owner_username"],
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
