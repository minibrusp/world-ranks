<template>
  <div @click="handleClick" class="flex flex-col justify-start items-start gap-2 cursor-pointer">
    <div>
      <Flag :source="border.flags.png" :altText="border.flag.alt" size="medium" />
    </div>
    <h2 class="text-link-water text-xs">{{ border.name?.common }}</h2>
  </div>
</template>

<script setup>
import Flag from '@/components/Flag'
import { useRouter } from 'vue-router'
import { useCountryStore } from '@/stores/CountryStore'

const router = useRouter()
const countryStore = useCountryStore()
const { border } = defineProps(['border'])

const handleClick = () => {
  let name = border.name.common.toLowerCase()
  router.push({ name: 'country', params: { name } })
  countryStore.country = border
  countryStore.neighbor = border.border
  countryStore.getNeighbors()
}
</script>
