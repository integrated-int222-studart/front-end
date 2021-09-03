<template>
  <div class="bg-gray-100 flex justify-center items-center">
    <div
      class="w-80 cursor-pointer p-3 shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl duration-500"
    >
      <img
        class="object-cover w-80 h-80 "
        :src= "this.url"
        alt=""
      />
      <div class="flex justify-between p-4 bg-white">
        <p class="mt-4 ">{{ product.prodName }}</p>
        <!-- <p class="mt-4 ">{{ this.url }}</p> -->
        <p class="mt-4 ">{{ getRandomNumber() }}</p>
        <!-- <p class="mt-4 ">{{ product.price }} บาท</p> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    product:{
      default:"",
    }
  },
  data(){
    return{
      random:"",
      url:this.product.imgurl+ this.random,
      }
  },
  methods:{
    getRandomNumber(){
      this.random = (Math.floor(Math.random()*1000));
      this.url = this.product.imgurl+ "?sig=" + this.random
      return (Math.floor(Math.random()*1000));
    }
  }
};
</script>
