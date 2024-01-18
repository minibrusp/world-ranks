<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <figure class="block my-4 mx-4 sm:my-2">
    <figcaption class="text-sm font-medium text-left py-4">
      <span
        v-if="!countryStore.neighbor || countryStore.loading"
        class="bg-bunker w-[165px] h-[20px] inline-block rounded-xl"
      />
      <span v-else>Neighbouring Countries</span>
    </figcaption>
    <ul class="text-left flex flex-row flex-wrap justify-start items-center gap-4 sm:my-1">
      <li v-if="!countryStore.neighbor || countryStore.loading"><CountryThumbnailSkeleton /></li>
      <li v-if="!countryStore.neighbor || countryStore.loading"><CountryThumbnailSkeleton /></li>
      <li v-if="!countryStore.neighbor || countryStore.loading"><CountryThumbnailSkeleton /></li>
      <li v-if="!countryStore.neighbor || countryStore.loading"><CountryThumbnailSkeleton /></li>
      <li v-if="!countryStore.neighbor || countryStore.loading"><CountryThumbnailSkeleton /></li>
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
import { onMounted } from 'vue'

const countryStore = useCountryStore()

onMounted(() => {
  countryStore.getNeighbors()
})
</script>
