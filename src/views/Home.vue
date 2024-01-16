<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import SearchArea from '@/components/HomePage/SearchArea'
import Filters from '@/components/HomePage/Filters'
import Countries from '@/components/HomePage/Countries'
</script>

<template>
  <main
    class="bg-black-pearl text-raven py-6 px-4 sm:px-8 lg:max-w-[974px] lg:mx-auto lg:border lg:border-bunker lg:rounded-xl lg:translate-y-[-60px] lg:px-8 lg:py-6 xl:max-w-[1198px]"
  >
    <SearchArea />
    <div class="lg:flex lg:flex-row lg:justify-start lg:items-start lg:gap-8 lg:mt-[23px]">
      <Filters />
      <Countries />
    </div>
  </main>
</template>
