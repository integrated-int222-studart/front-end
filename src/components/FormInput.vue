<template>
  <!--form input-->
  <div class="form-input">
    <div class="grid place-items-center">
      <div class="w-full h-full p-10  bg-white">
        <h1 class="text-xl font-semibold">
          สร้างผลงาน 👋
          <p class="font-normal inline-block w-full">
            กรุณากรอกข้อมูลของผลงานที่ต้องการขาย
          </p>
        </h1>
        <form class="mt-6">
          <div class="flex justify-between ">
            <span class="w-full">
              <label
                for="productname"
                class="block text-xs font-semibold text-gray-600 uppercase"
                >ชื่อผลงาน <span class="text-error">*</span>
              </label>
              <input
                id="productname"
                type="text"
                name="productnamee"
                placeholder="ชื่อผลงาน"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </span>
          </div>
          <label
            for="price"
            class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >ราคา <span class="text-error">*</span>
          </label>
          <input
            id="price"
            type="number"
            name="price"
            placeholder="ราคา(บาท)"
            autocomplete="price"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
          <label
            for="date"
            class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >วันที่สร้างผลงาน <span class="text-error">*</span></label
          >
          <input
            id="date"
            type="date"
            placeholder="วันที่"
            name="password"
            autocomplete="new-password"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
          <label
            for="type"
            class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >ประเภท <span class="text-error">*</span></label
          >
          <select
            id="type"
            name="type"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
            required
            ><option value="" hidden disabled selected
              >Please select one</option
            >
            <option value="type1">{ { table.productType1 }}</option>
            <option value="type2">{ { table.productType2 }}</option>
          </select>
          <label
            for="product-description"
            class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >รายละเอียด</label
          >
          <textarea
            id="product-description"
            name="product-description"
            placeholder="รายละเอียด เช่น ที่มา แรงบันดาลใจ"
            rows="3"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
          />
          <button
            type="submit"
            class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
          >
            สร้างผลงาน
          </button>
          <p
            class="justify-between inline-block mt-4 text-xs text-gray-500 cursor-pointer hover:text-black"
          >
            Already registered?
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';

export default {};
</script>
