<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <FilterField>
    <template #header>
      <h2 class="text-xs font-medium">Sort by</h2>
    </template>
    <template #filter>
      <DropDown />
    </template>
  </FilterField>
</template>

<script setup>
import FilterField from '@/components/FilterField'
import DropDown from '@/components/DropDown'
</script>
