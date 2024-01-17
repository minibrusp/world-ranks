<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header class="text-link-water px-4">
    <div class="inline-block mx-auto mb-6">
      <!-- <Flag source="https://flagcdn.com/w320/in.png" altText="flag of india" size="large" /> -->
      <Flag :source="country.flags?.png" :altText="country.flags?.alt" size="large" />
    </div>
    <h1 class="text-3xl font-bold mb-[2px]">{{ country.name?.common }}</h1>
    <p>{{ country.name?.official }}</p>
    <div class="flex flex-row flex-wrap justify-center items-center gap-2 my-9 sm:gap-10 sm:my-10">
      <Stat title="Population" :value="country.population?.toLocaleString()" />
      <Stat title="Area(km&sup2;)" :value="country.area?.toLocaleString()" />
    </div>
  </header>
</template>

<script setup>
import Stat from '@/components/Stat'
import Flag from '@/components/Flag'
import { useCountryStore } from '@/stores/CountryStore'
import { storeToRefs } from 'pinia'

const countryStore = useCountryStore()
const { country } = storeToRefs(countryStore)
</script>
