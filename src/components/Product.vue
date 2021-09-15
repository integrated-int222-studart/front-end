<template>
  <div class="product bg-gray-100 ">
    <div class="cursor-pointer p-3 shadow-lg ">
      <div class=" h-full w-full aspect-w-1 aspect-h-1 ">
        <img
          src="https://source.unsplash.com/random/"
          class="object-cover "
          alt=""
        />
      </div>
      <!-- <img
        class="object-cover mx-auto min-w-xs min-h-80 max-w-xs max-h-80 h-full w-full "
        :src="this.product.imgurl"
        onerror="this.src='https://source.unsplash.com/random'"
        alt=""
      /> -->
      <div class="flex justify-between p-2 mt-3 bg-white ">
        <p class="mt-4 ">{{ product.prodName }}</p>
        <p class="mt-4 ">{{ product.prodID }}</p>
      </div>
    </div>
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

<style scoped>
.aspect-w-1 {
    position: relative;
    padding-bottom: calc(var(--tw-aspect-h) / var(--tw-aspect-w) * 100%);
}

.aspect-w-1 {
    --tw-aspect-w: 1;
}

.aspect-h-1 {
    --tw-aspect-h: 1;
}
</style>
