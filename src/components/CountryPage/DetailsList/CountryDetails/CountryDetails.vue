<template>
  <div
    class="text-[13px] font-medium flex flex-row justify-between items-center px-4 py-6 border-b border-bunker last-of-type:border-transparent"
  >
    <dt>
      <span v-if="!countryStore.loading">{{ title }}</span>
      <span v-else class="bg-bunker w-[70px] h-[18px] block rounded-xl" />
    </dt>
    <dd class="text-link-water">
      <span v-if="!countryStore.loading">{{ detail }}</span>
      <span v-else class="bg-bunker w-[70px] h-[18px] block rounded-xl" />
    </dd>
  </div>
</template>

<script setup>
import { useCountryStore } from '@/stores/CountryStore'

const countryStore = useCountryStore()

defineProps(['title', 'detail'])
</script>
