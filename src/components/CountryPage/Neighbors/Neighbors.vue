<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <figure class="block my-4 mx-4 sm:my-2">
    <figcaption class="text-sm font-medium text-left py-4">Neighbouring Countries</figcaption>
    <ul class="text-left flex flex-row flex-wrap justify-start items-center gap-4 sm:my-1">
      <li v-if="countryStore.loading"><CountryThumbnailSkeleton /></li>
      <li v-if="countryStore.loading"><CountryThumbnailSkeleton /></li>
      <li v-if="countryStore.loading"><CountryThumbnailSkeleton /></li>
      <li v-if="countryStore.loading"><CountryThumbnailSkeleton /></li>
      <li v-if="countryStore.loading"><CountryThumbnailSkeleton /></li>
      <li v-else v-for="(neighbor, index) in countryStore.neighbor" :key="index">
        <CountryThumbnail :border="neighbor" />
      </li>
    </ul>
  </figure>
</template>

<script setup>
import CountryThumbnail from '@/components/CountryThumbnail'
import CountryThumbnailSkeleton from '@/components/CountryThumbnail/CountryThumbnailSkeleton'
import { useCountryStore } from '@/stores/CountryStore'

const countryStore = useCountryStore()

countryStore.getNeighbors()
</script>
