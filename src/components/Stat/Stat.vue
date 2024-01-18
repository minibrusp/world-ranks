<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <dl
    class="text-link-water text-[13px] font-medium bg-bunker inline-flex flex-row justify-start items-center px-5 py-2 rounded-xl"
  >
    <dt class="pr-4 py-1.5 border-r border-black-pearl">
      <span v-if="!countryStore.loading">{{ title }}</span>
      <span v-else class="bg-bunker w-[70px] h-[20px] inline-block" />
    </dt>
    <dd class="pl-4 py-1.5 text-[15px]">
      <span v-if="!countryStore.loading">{{ value }}</span>
      <span v-else class="bg-bunker w-[70px] h-[20px] inline-block" />
    </dd>
  </dl>
</template>

<script setup>
import { useCountryStore } from '@/stores/CountryStore'

const countryStore = useCountryStore()

defineProps(['title', 'value'])
</script>
