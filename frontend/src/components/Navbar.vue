<template>
  <nav
    class="sticky top-0 flex bg-white text-black items-center justify-between py-4 border border-b-gray-300"
  >
    <div class="w-[20%] flex items-center justify-around">
      <img
        src="https://greencart-gs.vercel.app/assets/logo-CMLzTNjw.svg"
        alt="logo"
        class="h-[35px]"
      />
    </div>
    <div class="w-[50%] flex justify-center items-center gap-6">
      <button class="border border-gray-300 rounded-xl px-3 py-[3px] text-gray-800 text-[11px]">
        Seller Dashboard
      </button>
      <RouterLink :to="'/home'" class="font-normal text-[15px]">Home</RouterLink>
      <RouterLink :to="'/All Products'" class="font-normal text-[15px]">All Products</RouterLink>
      <div class="flex items-center border rounded-[15px] px-3 py-[4px] border-gray-300">
        <input type="text" class="w-90 outline-none" placeholder="Search Products" />
        <img class="size-4" src="../assets/svg/searchIcon.svg" alt="" />
      </div>
      <RouterLink :to="'/cart'">
        <div class="size-5 relative h-9">
          <img src="../assets/svg/cartIcon.svg" alt="Cart" class="w-full h-full" />
          <span
            class="absolute top-0 right-0 left-4 bg-[#4fbf8b] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center"
          >
            0
          </span>
        </div>
      </RouterLink>
      <div class="size-9 flex justify-center items-center border rounded-full p-2">
        <img src="../assets/svg/profileIcon.svg" alt="profile" />
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
<style scoped></style>
