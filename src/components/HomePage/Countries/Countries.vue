<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <table class="table-auto w-full">
    <tr class="border-bunker text-left border-b-2">
      <th class="text-xs font-medium py-4">Flag</th>
      <th class="text-xs font-medium py-4">Name</th>
      <th class="text-xs font-medium py-4">Population</th>
      <th class="text-xs font-medium py-4">Area(km&sup2;)</th>
      <th class="text-xs font-medium py-4 hidden xl:block">Region</th>
    </tr>
    <CountrySkeleton v-if="countriesStore.loading" />
    <CountrySkeleton v-if="countriesStore.loading" />
    <CountrySkeleton v-if="countriesStore.loading" />
    <CountrySkeleton v-if="countriesStore.loading" />
    <CountrySkeleton v-if="countriesStore.loading" />
    <CountrySkeleton v-if="countriesStore.loading" />

    <Country
      v-else
      v-for="country in searchedCountry"
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
import { onMounted, onUnmounted } from 'vue'

const countriesStore = useCountriesStore()

const { searchedCountry } = storeToRefs(countriesStore)

onMounted(() => {
  // fetch countries
  countriesStore.getCountries()
})

onUnmounted(() => {
  // reset store
  countriesStore.$reset()
})
</script>
