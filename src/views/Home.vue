<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import SearchArea from '@/components/HomePage/SearchArea'
import Filters from '@/components/HomePage/Filters'
import Countries from '@/components/HomePage/Countries'
</script>

<template>
  <main class="bg-black-pearl text-raven py-6 px-4">
    <SearchArea />
    <Filters />
    <Countries />
  </main>
</template>
