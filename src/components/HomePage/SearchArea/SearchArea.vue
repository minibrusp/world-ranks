<template>
  <div class="flex flex-wrap gap-1 justify-between items-center">
    <p class="font-semibold">Found {{ getTotalCountries }} countries</p>
    <Search :searchHandler="searchHandler" v-model="searchedValue" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Search from '@/components/Search'
import { useCountriesStore } from '@/stores/CountriesStore'
import { storeToRefs } from 'pinia'
import debounce from 'lodash/debounce'

const countriesStore = useCountriesStore()
const searchedValue = ref(null)

const searchHandler = debounce(() => {
  countriesStore.search = ''
  if (!searchedValue.value) return
  countriesStore.search = searchedValue.value
}, 300)

const { getTotalCountries } = storeToRefs(countriesStore)
</script>
