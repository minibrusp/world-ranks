<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <FilterField>
    <template #header>
      <h2 class="text-xs font-medium">Sort by</h2>
    </template>
    <template #filter>
      <DropDown name="sortby" title="sort by" :changeHandler="changeHandler">
        <option value="population">Population</option>
        <option value="name">Name</option>
        <option value="area">area(km&sup2;)</option>
      </DropDown>
    </template>
  </FilterField>
</template>

<script setup>
import FilterField from '@/components/FilterField'
import DropDown from '@/components/DropDown'
import { useCountriesStore } from '@/stores/CountriesStore'

const countriesStore = useCountriesStore()

const changeHandler = (e) => {
  countriesStore.sortBy = e.target.value
}
</script>
