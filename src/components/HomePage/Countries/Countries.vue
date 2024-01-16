<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <table class="table-auto w-full">
    <tr class="border-bunker text-left border-b-2">
      <th class="text-xs font-medium py-4">Flag</th>
      <th class="text-xs font-medium py-4">Name</th>
      <th class="text-xs font-medium py-4">Population</th>
      <th class="text-xs font-medium py-4">Area(km&sup2;)</th>
    </tr>
    <CountrySkeleton v-if="countriesStore.loading" />
    <CountrySkeleton v-if="countriesStore.loading" />
    <CountrySkeleton v-if="countriesStore.loading" />
    <CountrySkeleton v-if="countriesStore.loading" />

    <Country
      v-else
      v-for="country in filteredCountries"
      :key="country.name.common"
      :country="country"
    />
  </table>
</template>

<script setup>
import Country from '@/components/HomePage/Countries/Country'
import CountrySkeleton from '@/components/HomePage/Countries/CountrySkeleton'
import { useCountriesStore } from '@/stores/CountriesStore'
import { storeToRefs } from 'pinia'

const countriesStore = useCountriesStore()

const { filteredCountries } = storeToRefs(countriesStore)

// fetch countries
countriesStore.getCountries()
</script>
