<script setup lang="ts"></script>
<template>
  <div class="w-[100%] h-[100vh] bg-white">
    <div class="h-10 bg-blue-500 flex">
      <div
        class="w-[95%] text-gray-100 flex justify-center items-center decoration-[#fff] font-medium"
      >
        FREE US SHIPPING ON ALL ORDERS
      </div>
      <div
        class="w-[5%] text-gray-100 flex justify-center items-center decoration-[#fff] font-medium"
      >
        <font-awesome-icon icon="xmark" class="text-gray-100 size-4" />
      </div>
    </div>
    <div class="h-[80px] w-100 shadow-xl flex bg-gray-100 justify-center">
      <div class="w-[10%] flex text-black justify-center items-center text-lg font-bold">
        <img src="https://tailwindcss.com/favicons/favicon.ico?v=4" alt="err" />
        Dhurandars
      </div>
      <div class="w-[50%] flex text-black gap-[8%] justify-center items-center">
        <p class="font-bold">Products</p>
        <p class="font-bold">Support</p>
        <p class="font-bold">FAQ</p>
        <img src="../assets/svg/searchIcon.svg" alt="" class="size-4" />
      </div>
      <div class="w-[10%] flex text-black justify-center items-center gap-3">
        <button class="bg-[#3bcf8a] rounded-lg px-5 py-2 text-white font-bold text-nowrap">
          Shop Now
        </button>
        <div class="flex items-center justify-center gap-1">
          <p class="font-bold">Cart</p>
          <img src="../assets/svg/cartIcon.svg" class="size-4" alt="err" />
        </div>
      </div>
    </div>
    <div class="h-[60px] w-100 shadow-xl flex text-black justify-center items-center gap-[7%]">
      <p class="text-blue-500 font-bold">Bundles</p>
      <p class="text-gray-400 font-bold">Sanitizing Devices</p>
      <p class="text-gray-400 font-bold">Accessories</p>
      <p class="text-gray-400 font-bold">Gift Cards</p>
    </div>
  </div>
</template>
<style></style>
