<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <table class="table-auto w-full">
    <tr class="border-bunker text-left border-b-2">
      <th class="text-xs font-medium py-4">Flag</th>
      <th class="text-xs font-medium py-4">Name</th>
      <th class="text-xs font-medium py-4">Population</th>
      <th class="text-xs font-medium py-4">Area(km&sup2;)</th>
    </tr>
    <Country />
    <Country />
    <CountrySkeleton />
    <CountrySkeleton />
    <CountrySkeleton />
  </table>
</template>

<script setup>
import Country from '@/components/HomePage/Countries/Country'
import CountrySkeleton from '@/components/HomePage/Countries/CountrySkeleton'
</script>
