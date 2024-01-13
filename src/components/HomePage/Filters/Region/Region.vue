<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <FilterField>
    <template #header>
      <h2 class="text-xs font-medium">Region</h2>
    </template>
    <template #filter>
      <div class="my-1 inline-flex flex-row justify-start items-center gap-2 flex-wrap">
        <Toggler value="america">Americas</Toggler>
        <Toggler value="antarctic">Antarctic</Toggler>
        <Toggler value="africa">Africa</Toggler>
        <Toggler value="asia">Asia</Toggler>
        <Toggler value="europe">Europe</Toggler>
        <Toggler value="oceania">Oceania</Toggler>
      </div>
    </template>
  </FilterField>
</template>

<script setup>
import FilterField from '@/components/FilterField'
import Toggler from '@/components/Toggler'
</script>
