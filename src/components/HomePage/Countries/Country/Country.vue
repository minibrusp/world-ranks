<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <tr class="text-link-water cursor-pointer hover:bg-bunker" @click="clickHandler">
    <td class="py-2 sm:pt-4">
      <div class="sm:mr-4">
        <Flag :source="country.flags.png" :altText="country.flags.alt" size="small" />
      </div>
    </td>
    <td>
      <span class="sm:hidden">{{ country.cca3 }}</span>
      <span class="hidden sm:block sm:max-w-28">{{ country.name.common }}</span>
    </td>
    <td>
      <span class="sm:hidden">{{ numeral(country.population).format('0.000a') }}</span>
      <span class="hidden sm:block">{{ country.population.toLocaleString() }}</span>
    </td>
    <td>
      <span class="sm:hidden">{{ numeral(country.area).format('0.000a') }}</span>
      <span class="hidden sm:block">{{ country.area.toLocaleString() }}</span>
    </td>
  </tr>
</template>

<script setup>
import Flag from '@/components/Flag'
import numeral from 'numeral'
import { useRouter } from 'vue-router'

const router = useRouter()
const { country } = defineProps(['country'])

const clickHandler = () => {
  let name = country.name.common.toLowerCase()
  router.push({ name: 'country', params: { name } })
}
</script>
