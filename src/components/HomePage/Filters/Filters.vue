<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
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
