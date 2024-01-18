<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header class="text-link-water px-4">
    <div class="inline-block mx-auto mb-6">
      <Flag
        v-if="!countryStore.loading"
        :source="country.flags?.png"
        :altText="country.flags?.alt"
        size="large"
      />
      <div v-else class="block bg-bunker w-[260px] max-w-[260px] min-h-[196px] rounded-xl" />
    </div>
    <h1 class="text-3xl font-bold mb-[2px]">
      <span v-if="!countryStore.loading">{{ country.name?.common }}</span>
      <span v-else class="inline-block w-[90px] h-[38px] rounded-xl bg-bunker" />
    </h1>
    <p>
      <span v-if="!countryStore.loading">{{ country.name?.official }}</span>
      <span v-else class="inline-block w-[150px] h-[20px] rounded-xl bg-bunker" />
    </p>
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
