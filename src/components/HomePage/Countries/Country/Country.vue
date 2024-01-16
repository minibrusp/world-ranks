<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <tr class="text-link-water">
    <td class="py-2 sm:pt-4">
      <img
        :src="country.flags.png"
        :alt="country.flags.alt"
        class="max-w-[50px] min-h-[38px] rounded sm:mr-4"
      />
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
import numeral from 'numeral'
defineProps(['country'])
</script>
