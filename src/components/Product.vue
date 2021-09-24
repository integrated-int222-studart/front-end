<template>
  <div class="product bg-gray-100 ">
    <div class="cursor-pointer p-3 shadow-lg " @click="gotoProductDetail(product.prodID)">
      <div class=" h-full w-full aspect-w-1 aspect-h-1 ">
        <img
          :src="this.product.imgurl"
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
        <p class="mt-4 ">{{ product.price }}</p>
      </div>
      
    </div>
    <div @click="this.delete">
        <button>Delete</button>
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
    return {
      url: "http://13.76.182.102:3000/upload/photo/1"
    };
  },
  methods: {
    delete(){
      this.$store.dispatch("removeProduct",this.product);
    },
    gotoProductDetail(prodid) {
      this.$router.push(`/productdetail/${prodid}`);
    },
  },
};
</script>

