<script setup>
import CountryDetails from '@/components/CountryPage/DetailsList/CountryDetails'
import { useCountryStore } from '@/stores/CountryStore'
import { storeToRefs } from 'pinia'

const countryStore = useCountryStore()
const { country, getLanguages, getCurrencies } = storeToRefs(countryStore)
</script>

<template>
  <dl class="border-y border-bunker">
    <CountryDetails title="Capital" :detail="country.capital?.toString()" />
    <CountryDetails title="Subregion" :detail="country.subregion" />
    <CountryDetails title="Language" :detail="getLanguages" />
    <CountryDetails title="Currencies" :detail="getCurrencies" />
    <CountryDetails title="Continents" :detail="country.continents?.toString()" />
  </dl>
</template>
