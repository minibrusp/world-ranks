<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <FilterField>
    <template #header>
      <h2 class="text-xs font-medium">Region</h2>
    </template>
    <template #filter>
      <div class="my-1 inline-flex flex-row justify-start items-center gap-2 flex-wrap">
        <Toggler value="Americas" :clickHandler="clickHandler">Americas</Toggler>
        <Toggler value="Antarctic" :clickHandler="clickHandler">Antarctic</Toggler>
        <Toggler value="Africa" :clickHandler="clickHandler">Africa</Toggler>
        <Toggler value="Asia" :clickHandler="clickHandler">Asia</Toggler>
        <Toggler value="Europe" :clickHandler="clickHandler">Europe</Toggler>
        <Toggler value="Oceania" :clickHandler="clickHandler">Oceania</Toggler>
      </div>
    </template>
  </FilterField>
</template>

<script setup>
import FilterField from '@/components/FilterField'
import Toggler from '@/components/Toggler'
import { useCountriesStore } from '@/stores/CountriesStore'

const countriesStore = useCountriesStore()

const clickHandler = (e) => {
  console.log(e.target.value)
  if (countriesStore.region.includes(e.target.value) === true) {
    let indexOfFoundItem = countriesStore.region.indexOf(e.target.value)
    countriesStore.region.splice(indexOfFoundItem, 1)
  } else {
    countriesStore.region.push(e.target.value)
  }
}
</script>
