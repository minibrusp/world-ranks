<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    class="sm:flex sm:flex-col sm:justify-start sm:items-start sm:mt-6 sm:mb-[6px] sm:max-w-[640px] lg:mt-0 lg:max-w-[203px] xl:max-w-[260px]"
  >
    <!-- sort by  -->
    <Sort />
    <!-- region  -->
    <Region />
    <!-- status  -->
    <Status />
  </div>
</template>

<script setup>
import Sort from '@/components/HomePage/Filters/Sort'
import Region from '@/components/HomePage/Filters/Region'
import Status from '@/components/HomePage/Filters/Status'
</script>
